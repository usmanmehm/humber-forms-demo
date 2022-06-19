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
      { section: "Routing", label: "1)	Used routerLink for navigation", marks: 1, control: "q2"},
      { section: "Routing", label: "2)	The links correctly take us to the defined pages", marks: 2, control: "q3"},
      { section: "Data Store", label: "1) Used data store correctly where needed", marks: 1, control: "q4"},
      { section: "Data Store", label: "2)	Order is added to list of orders after submission", marks: 2, control: "q5"},
      { section: "Data Store", label: "3)	Total for order is correctly calculated", marks: 2, control: "q6"},
      { section: "Data Store", label: "4)	Cart is empty after submission", marks: 2, control: "q7"},
      { section: "Reative Forms", label: "1)	Created FormGroup", marks: 1, control: "q8"},
      { section: "Reative Forms", label: "2)	Added form controls for each field", marks: 4, control: "q9"},
      { section: "Reative Forms", label: "3)	Added input and select elements for each field", marks: 4, control: "q10"},
      { section: "Reative Forms", label: "4)	Connected HTML form to reactive form", marks: 2, control: "q11"},
      { section: "Reative Forms", label: "5)	Added validation to make fields mandatory", marks: 3, control: "q12"},
      { section: "Reative Forms", label: "6)	Added validation for credit card", marks: 5, control: "q13"},
      { section: "Reative Forms", label: "7)	Used error messages or directive to guide the user", marks: 3, control: "q14"},
      { section: "Reative Forms", label: "8)	Submit button is disabled until form is valid", marks: 1, control: "q15"},
      { section: "Reative Forms", label: "9)	Log form contents to console on submit", marks: 1, control: "q16"},
      { section: "Bonus", label: "1) Store user's data somewhere in app", marks: 2, control: "q17"},
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
