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

  questions: any;
  sections: any;

  totalMarks = 0;
  fullMarks = 0;

  age: any;

  ngOnInit(): void {
    this.form = new FormGroup({
      q1: new FormControl('', Validators.required),
      q2: new FormControl('', Validators.required),
      q3: new FormControl('', Validators.required),
      q4: new FormControl('', Validators.required),
      q5: new FormControl('', Validators.required),
      q6: new FormControl('', Validators.required),
      q7: new FormControl('', Validators.required),
      q8: new FormControl('', Validators.required),
      q9: new FormControl('', Validators.required),
      q10: new FormControl('', Validators.required),
      q11: new FormControl('', Validators.required),
      q12: new FormControl('', Validators.required),
      q13: new FormControl('', Validators.required),
      q14: new FormControl('', Validators.required),
      q15: new FormControl('', Validators.required),
      q16: new FormControl('', Validators.required),
      q17: new FormControl('', Validators.required),
      q18: new FormControl('', Validators.required),
    })

    this.questions = [
      { section: "Git", label: "1)	Forked repository correctly", marks: 1, control: "q1"},
      { section: "Routing", label: "1)	Used routerLink for navigation", marks: 2, control: "q2"},
      { section: "Routing", label: "2)	The links correctly take us to the defined pages", marks: 2, control: "q3"},
      { section: "HTTP", label: "1)	Imported HttpClientModule ", marks: 1, control: "q4"},
      { section: "HTTP", label: "2)	Injected HttpClient into service ", marks: 2, control: "q5"},
      { section: "HTTP", label: "3)	Used http get request correctly ", marks: 2, control: "q6"},
      { section: "HTTP", label: "4)	Subscribed to the Observable response and assigned to the relevant variable ", marks: 2, control: "q7"},
      { section: "HTTP", label: "5)	Added interfaces for product data and order data ", marks: 3, control: "q8"},
      { section: "Passing Data", label: "1)	Added input variable for item component ", marks: 1, control: "q9"},
      { section: "Passing Data", label: "2)	Added input variable for order item component ", marks: 1, control: "q10"},
      { section: "Passing Data", label: "3)	Added input variable for cart item component ", marks: 1, control: "q11"},
      { section: "Passing Data", label: "4)	Used *ngFor for rendering all 3 components on their respective pages ", marks: 6, control: "q12"},
      { section: "Passing Data", label: "5)	Correct behaviour for ‘Add to Cart’ button ", marks: 3, control: "q13"},
      { section: "Passing Data", label: "6)	‘Clear cart’ button removes all items from cart ", marks: 2, control: "q14"},
      { section: "Passing Data", label: "7)	Filtering the products using search is working correctly ", marks: 4, control: "q16"},
      { section: "Other", label: "1)	Used *ngIf for the empty cart message and for displaying the cart items", marks: 3, control: "q17"},
      { section: "Bonus", label: "1)	Message for empty cart is centered in the page", marks: 2, control: "q18"},
    ];

    this.questions.forEach((question: any) => {
      this.fullMarks += question.marks;
    })

    this.fullMarks = this.fullMarks - 2;

    this.sections = new Set(this.questions.map((question: any) => question.section));
    console.log(this.sections);
  }

  submit() {
    let total = 0;
    (Object.values(this.form.value) as string[]).forEach((val: string) => {
      total = +val + total
    })

    this.totalMarks = total;
  }

  populateFullMarks() {
    this.questions.forEach((question: any) => {
      this.form.get(question.control)?.setValue(question.marks);
    })
  }

  setSavedValues() {

    this.form.get('firstName')?.value;
    this.form.get('lastName')?.value;

  }
}
