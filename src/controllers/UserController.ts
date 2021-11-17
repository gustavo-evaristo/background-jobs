import { Request, Response } from 'express';
import Mail from '../utils/mail';

class UserController {
    async create(req: Request, res: Response){
        const { name, email, password  } = req.body;

        const user = { name, email, password };

        await Mail.sendMail({
            from: 'Queue Test <queue@test.com.br>',
            to: `${name} <${email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${name}, bem-vindo ao nosso sitema de filas :D`,
        });

        return res.json(user);
    }
};

export default new UserController();