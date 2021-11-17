import Queue from './config/queue';
import RegistrationMail from './jobs/RegistrationMail';

Queue.process(RegistrationMail.handle)