import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const contato = async (req: Request, res: Response) => {
    // Passo 1: Configurar o transporter
    let transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "4fd83cf5d535a9",
            pass: "574fa2757baa96"
        }
    });

    // Passo 2: Configurar a mensagem
    let message = {
        from: 'bootenviode@email.com',
        to: 'teste@hotmail.com, fulano@hotmail.com',
        replyTo: req.body.replyTo,
        subject: req.body.subject,
        html: req.body.htmlemail,
        text: req.body.textemail
    }
    // Passo 3: Enviar a mensagem
    let info = await transport.sendMail(message);

    console.log('INFO', info);

    res.json({success: true});
}


