import dotenv from 'dotenv'
import { Request, Response } from 'express'
import nodemailer from 'nodemailer'

const sendEmail = async (req: Request, res: Response) => {

    dotenv.config()
    try
    { 
        const { email, assunto, mensagem } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.SENHA_GOOGLE_PORTIFOLIO
            }
        });

        const configEmail = {
            from: "joaoguilherme.2708@gmail.com",
            to: email,
            subject: assunto,
            text: mensagem
        }

        await transporter.sendMail(configEmail);
        transporter.close()
        res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    }

    catch(error)
    {
        console.log(error);
        res.status(500).json({ message: 'Erro ao enviar o e-mail.' });
    }
}

export default sendEmail