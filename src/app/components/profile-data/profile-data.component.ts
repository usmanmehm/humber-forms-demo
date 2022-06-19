import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { firstNameValidator, parentalConsent } from 'src/app/validators/validators';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss']
})
export class ProfileDataComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  formSubscription!: Subscription
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required, firstNameValidator()]),
      lastName: new FormControl(''),
      over18: new FormControl(''),
      parentSignature: new FormControl('')
    }, parentalConsent())

    this.listenToForm();
  }

  
  listenToForm() {
    this.formSubscription = this.form.valueChanges.subscribe(values => {
      console.log(values);
    })
  }
  
  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }
  
  submit() {
    console.log(this.form.value)
  }
}
