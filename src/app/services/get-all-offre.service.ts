import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, query } from '@angular/fire/firestore';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class GetAllOffreService {
  constructor(public firestore: Firestore, private storage: Storage) {}
  async getAllOffre(nameWebSite: string) {
    return (
      await getDocs(query(collection(this.firestore, nameWebSite)))
    ).docs.map((robots) => robots.data());
  }
  async downloadFile(fileName: string) {
    const storageRef = ref(this.storage, `${fileName}`);
    return await getDownloadURL(storageRef)
      .then((downloadURL) => {
        return downloadURL;
      })
      .catch((error) => {
        console.error('Error downloading file:', error);
      });
  }
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
