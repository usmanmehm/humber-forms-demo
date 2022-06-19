import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';
import { nameValidator, parentalConsent, postalCodeValidator } from 'src/app/validators/validators';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss']
})
export class ProfileDataComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  formSubscription!: Subscription;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      address: new FormControl(''),
      city: new FormControl(''),
      postalCode: new FormControl(''),
      country: new FormControl('')
    }, postalCodeValidator())

  }

  isFormValid() {
    console.log(this.form.valid);
    
  }

  submit() {
    console.log(this.form.value);
    
  }

  ngOnDestroy(): void {
    // this.formSubscription.unsubscribe();
  }

}
