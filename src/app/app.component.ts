import { Component } from '@angular/core';
import { GetAllOffreService } from './services/get-all-offre.service';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {}

  async sendEmail(
    fromName: string,
    toName: string,
    fromEmail: string,
    subject: string,
    message: string
  ) {
    emailjs.init('eloCX8WhF2xc52mPQ');
    let res = await emailjs.send('service_t508he7', 'template_zepfzxq', {
      from_name: fromName,
      to_name: toName,
      from_email: fromEmail,
      subject: subject,
      message: message,
      reply_to: 'gestion zeta',
    });
    console.log(res);
  }
}
