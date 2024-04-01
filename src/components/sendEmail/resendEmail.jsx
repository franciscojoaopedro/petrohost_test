//import { render } from '@react-email/render';
//import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: 'smtp.petrohost.ao',
    port: 465,
    secure: true,
    auth: {
      user: 'my_user',
      pass: 'my_password',
    },
  });
  
 // const emailHtml = render(<Email url="https://petrohost.vercel.app/" />);
  
  const options = {
    from: 'projectos@dev.petrohost.ao',
    to: 'francisco.pedro@petrohost.ao',
    subject: 'hello world',
    html: "<p>Ola teste</p>",
  };
  



  export const EnviarEmail=async()=>{

      await transporter.sendMail(options)
      .then((resultado)=>{
        console.log('email enviado',resultado)
      })
      .catch((error)=>{
        console.log("error ao enviar email",error)
      })
  }