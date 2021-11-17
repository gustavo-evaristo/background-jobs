import Mail from '../utils/mail';

export default {
    key: 'RegistrationMail',

    async handle({ data }: any) {

        data.map( (user: any,  idx: number) => {
            setTimeout(async () => {
                await Mail.sendMail({
                    from: 'Queue Test <queue@test.com.br>',
                    to: `${user.name} <${user.email}>`,
                    subject: 'Cadastro de usuário',
                    html: `Olá, ${user.name}, bem-vindo ao nosso sitema de filas :D`,
                });
            }, 5000 * idx)
        })
    }
}