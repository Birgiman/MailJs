import { render } from '@react-email/render';
import nodemailer from "nodemailer";
import Email from './email';

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "63d0f30242c39f",
    pass: "909a607854118d"
  }
})


const emailHtml = render(<Email url="https://www.linkedin.com/in/eduardo-birgiman-domingues/" />);

const options = {
  from: "eduardo.birgiman@outlook.com",
  to: "some@one.dev",
  subject: "Temos uma novidade para você!",
  html: emailHtml,
}

transporter.sendMail(options).then(() => console.log('Email sent'));
