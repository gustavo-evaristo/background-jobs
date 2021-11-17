import Queue from './utils/queue';
import RegistrationMail from './jobs/RegistrationMail';

Queue.process(RegistrationMail.handle)