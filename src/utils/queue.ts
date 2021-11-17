import Bull from 'bull';
import redisConfig from '../config/redis';
import RegistrationMail from '../jobs/RegistrationMail';

const Queue = new Bull(RegistrationMail.key,  { 
    ...redisConfig, 
    limiter: {
        max: 1,
        duration: 5000
    }      
});

Queue.on('failed', (job, err) => { 
    console.log('job failed', job.name);
    console.log(err);
});

export default Queue;