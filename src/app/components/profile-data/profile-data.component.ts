import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { nameValidator, parentalConsent } from 'src/app/validators/validators';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss']
})
export class ProfileDataComponent implements OnInit {
  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [nameValidator()]),
      lastName: new FormControl('', [nameValidator()]),
      over18: new FormControl('', Validators.required),
      parentSignature: new FormControl(''),
    }, parentalConsent())
  }

  isFormValid() {
    console.log(this.form.valid);
    
  }

  submit() {
    console.log(this.form.value);
    
  }

}
