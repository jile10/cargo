import { NgModule } from '@angular/core';
import { Component, OnInit, Inject } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

declare let emailjs:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
@NgModule({
  imports: [
  	FormsModule      //<----------make sure you have added this.
   ],
})
export class ContactComponent implements OnInit {
  lat: number = 14.5770263;
  lng: number = 120.979675;
  title = "Visit us here";
  constructor(){

  }

  ngOnInit() {
  }

  onSubmit(contactForm: any){
  	console.log(contactForm.value);
  	var service_id = "default_service";
  	var template_id = "template_4WwK1vLp";
  	emailjs.send(service_id,template_id,contactForm.value)
  	.then(function(){ 
    	alert("Sent!");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
    });
  	contactForm.reset();
  }

}
