//import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail, email],
      subject: subject,
      react: (
        <>
          <h1>Gracias Por Contactar</h1>
          <h2>Asunto del correo:</h2>
          <h3>{subject}</h3>
          <h2>Te confirmo al correo al que te contactar&eacute;:</h2>
          <h3>{email}</h3>
          <h2>Contenido del Mensaje:</h2>
          <h3>{message}</h3>
        </>
      ),
    });
    
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}