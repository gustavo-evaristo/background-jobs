import Mail from '../utils/mail';

export default {
    key: 'RegistrationMail',

    async handle({ data }: any) {
        await Mail.sendMail({
            from: 'Queue Test <queue@test.com.br>',
            to: `${data.name} <${data.email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${data.name}, bem-vindo ao nosso sitema de filas :D`,
        });
    }
}