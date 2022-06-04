import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'form-demo';
  form!: FormGroup;
  ageArray!:any;

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      csharp: new FormControl(''),
      java: new FormControl(''),
      javaScript: new FormControl(''),
      favoriteFramework: new FormControl('')
    })

    const myArray = Array.from(Array(16).keys());
    this.ageArray = myArray.map(el => el + 25);
    console.log(this.ageArray);
  }

  getValues() {
    const firstName = (this.form.get('randomControl') as FormControl)?.value;
    const lastName = (this.form.get('lastName') as FormControl).value;
    console.log('First name:', firstName);
    console.log('Last name:', lastName);
  }

  populateValues() {
    this.form.get('firstName')?.setValue('Jack');
    this.form.get('lastName')?.setValue('Sparrow');
  }

  submit() {

    console.log(this.form.valid);
    
  }

  setSavedValues() {

    this.form.get('firstName')?.value;
    this.form.get('lastName')?.value;

  }
}
