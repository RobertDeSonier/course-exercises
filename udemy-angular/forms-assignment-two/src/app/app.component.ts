import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projectForm:FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'project': new FormControl(null, Validators.required, CustomValidators.forbiddenProjectNameAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('critical')
    });
  }

  onSubmit() {
    console.log('Project Name: ' + this.projectForm.get('project').value);
    console.log('Email: ' + this.projectForm.get('email').value);
    console.log('Status: ' + this.projectForm.get('status').value);
  }
}
