const nodemailer = require('nodemailer');

class EmailManager {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: false, // TLS explícito
            auth: {
                user: "comercioc33@gmail.com",
                pass: "ikyb lohh bhwh nfef"
            },
            tls: {
                rejectUnauthorized: false  // Desactiva la validación estricta del certificado
            }
        });
    }

    async enviarCorreoCompra(email, first_name, ticket) {
        try {
            const mailOptions = {
                from: "Gamers <comercioc33@gmail.com>",
                to: email,
                subject: 'Confirmación de compra',
                html: `
                    <h1>Confirmación de compra</h1>
                    <p>Gracias por tu compra, ${first_name}!</p>
                    <p>El número de tu orden es: ${ticket}</p>
                `
            };

            await this.transporter.sendMail(mailOptions);
            console.log('Correo de confirmación de compra enviado exitosamente.');
        } catch (error) {
            console.error('Error al enviar el correo electrónico:', error);
        }
    }

    async enviarCorreoRestablecimiento(email, first_name, token) {
        try {
            const mailOptions = {
                from: "Gamers <comercioc33@gmail.com>",
                to: email,
                subject: 'Restablecimiento de contraseña',
                html: `
                    <h1>Restablecimiento de Contraseña</h1>
                    <p>Hola ${first_name}!</p>
                    <p>Pediste restablecer tu contraseña. Te enviamos el código de confirmacion</p>
                    <strong>${token}</strong>
                    <p>Este código expira en una hora.</p>
                    <a href="http://localhost:3000/password">Restablecer Contraseña</a>
                `
            };

            await this.transporter.sendMail(mailOptions);
            console.log('Correo de restablecimiento de contraseña enviado exitosamente.');
        } catch (error) {
            console.error('Error al enviar el correo electrónico:', error);
        }
    }
}

module.exports = EmailManager;
