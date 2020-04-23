import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-section-banner-tres',
  templateUrl: './section-banner-tres.component.html',
  styleUrls: ['./section-banner-tres.component.scss']
})
export class SectionBannerTresComponent implements OnInit {

  constructor() { }
  
  contactoForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
  }
  
  get name(){return this.contactoForm.get('name')}
  get lastName() {return this.contactoForm.get('lastName')}
  get email() { return this.contactoForm.get('email')}
  get message() { return this.contactoForm.get('message')}

  resetForm(){
    this.contactoForm.reset()
  }

  send(form) {
    console.log(form)
    this.resetForm()
    Swal.fire(
      'Mensaje enviado con éxito',
      'En breve nos pondremos en contacto',
      'success'
    )
  }
}
