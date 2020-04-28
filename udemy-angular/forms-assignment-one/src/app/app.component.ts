import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') submitForm : NgForm;
  defaultSub = 'advanced';
  data = {
    email: '',
    subscription: '',
    password: ''
  }
  isSubmitted = false;

  onSubmit()
  {
    this.isSubmitted = true;
    this.data.email = this.submitForm.value.email;
    this.data.subscription = this.submitForm.value.subscription;
    this.data.password = this.submitForm.value.password;

    this.submitForm.reset();
  }
}
