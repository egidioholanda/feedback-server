import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "eb75760c364e62",
    pass: "409de64d0be267"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe EHDevelopment <oi@ehdevelopment.com.br>',
      to: 'Egidio Holanda <egidioholanda@gmail.com>',
      subject,
      html: body,    
    });
  };

}