import { Request, Response } from 'express';
import Queue from '../utils/queue';

class UserController {
    async create(req: Request, res: Response){

        const users = [
            { name: 'Gustavo Primeiro', email: '<gustavo@primeiro.com>' },
            { name: 'Gustavo segundo', email: '<gustavo@segundo.com>' },
            { name: 'Gustavo terceiro', email: '<gustavo@terceiro.com>' },
            { name: 'Gustavo quarto', email: '<gustavo@quarto.com>' },
            { name: 'Gustavo quinto', email: '<gustavo@quinto.com>' },
            { name: 'Gustavo sexto', email: '<gustavo@sexto.com>' },
            { name: 'Gustavo setimo', email: '<gustavo@setimo.com>' },
            { name: 'Gustavo oitavo', email: '<gustavo@oitavo.com>' },
        ]

        const user = { name: 'Gustavo Primeiro', email: 'gug.henri1@gmail.com' };

        Queue.add(users);

        return res.json(user);

    }
};

export default new UserController();