import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
 export class MailService {
/*
  email : string;
  name : string;
  message : string;
  endpoint : string;
*/



  constructor(private http: HttpClient) { }

sendEmail(a,b){
 /* sendEmail(this.endpoint, postVars){
  this.email = "nov0360@hotmail.com";
  this.name = "Hayden Pierce";
  this.message = "Hello, this is Hayden.";
  this.endpoint = "http://shadrackshack.x10host.com/index.php";
   this.endpoint = "http://localhost:8080";







    let postVars = {
    email : this.email,
      name : this.name,
      message : this.message
   }; 

*/
    //You may also want to check the response. But again, let's keep it simple.
    this.http.post(a, b)
        .subscribe(
            response => console.log(response)
        )
  }
}
