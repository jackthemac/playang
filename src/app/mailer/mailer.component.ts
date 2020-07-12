import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mailer',
  templateUrl: './mailer.component.html',
  styleUrls: ['./mailer.component.scss']
})
export class MailerComponent implements OnInit {
 email : string;
  name : string;
  message : string;
  endpoint : string;



constructor(private mail: MailService) { }


sendEmail() {
  this.email = "nov0360@hotmail.com";
  this.name = "Hayden Pierce";
  this.message = "Hello, this is Hayden.";

//  this.endpoint = "http://shadrackshack.x10host.com/index.php";
   this.endpoint = "http://localhost:8080/email";







    let postVars = {
     email : this.email,
      name : this.name,
      message : this.message
    };

    this.mail.sendEmail(this.endpoint, postVars);
  }

 

  ngOnInit() {

  
  }
}