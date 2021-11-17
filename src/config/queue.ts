import Bull from 'bull';
import redisConfig from '../config/redis';
import RegistrationMail from '../jobs/RegistrationMail';

const Queue = new Bull(RegistrationMail.key,  { 
    redis: redisConfig, 
    limiter: {
        max: 10,
        duration: 1000
    },
    defaultJobOptions: {
        attempts: 3,
    }      
});

Queue.on('failed', (job, err) => { 
    console.log('job failed', job.name);
    console.log(err);
});

export default Queue;