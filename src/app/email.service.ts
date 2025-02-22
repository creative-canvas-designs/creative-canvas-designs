import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
  

  sendEmail(formData: any): Promise<any> {
    return emailjs.send('your_service_id', 'your_template_id', formData, 'your_user_id');
  }
}
