import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  name = '';
  lastname = '';
  subject = '';


  submit(name: string, lastname: string, subject: string) {
    console.log(this.name);
    console.log(this.lastname);
    console.log(this.subject);



  }
  ngOnInit() {
  }

}
