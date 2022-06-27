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
      q1: new FormControl('', [Validators.required]),
      q2: new FormControl('', [Validators.required]),
      q3: new FormControl('', [Validators.required]),
      q4: new FormControl('', [Validators.required]),
      q5: new FormControl('', [Validators.required]),
      q6: new FormControl('', [Validators.required]),
      q7: new FormControl('', [Validators.required]),
      q8: new FormControl('', [Validators.required]),
      q9: new FormControl('', [Validators.required]),
      q10: new FormControl('', [Validators.required]),
      q11: new FormControl('', [Validators.required]),
      q12: new FormControl('', [Validators.required]),
      q13: new FormControl('', [Validators.required]),
      q14: new FormControl('', [Validators.required]),
      q15: new FormControl('', [Validators.required]),
      q16: new FormControl('', [Validators.required]),
      q17: new FormControl('', [Validators.required]),
      q18: new FormControl('', [Validators.required]),
    })


    this.questions = [
      { section: "Git", label: "1) Project pushed to repository", marks: 1, control: "q1"},
      { section: "Components", label: "1)	5+ Components", marks: 3, control: "q2"},
      { section: "Components", label: "2)	Each component has a defined and useful functionality", marks: 2, control: "q3"},
      { section: "Input/Output Variables", label: "1) Used input variable", marks: 2, control: "q4"},
      { section: "Input/Output Variables", label: "2)	Used output variable", marks: 2, control: "q5"},
      { section: "Structural Directives", label: "1)	Used *ngIf", marks: 2, control: "q6"},
      { section: "Structural Directives", label: "2)	Used *ngFor", marks: 3, control: "q7"},
      { section: "Lifecycle methods", label: "1)	Used at least one lifecycle method", marks: 2, control: "q8"},
      { section: "Routing", label: "1)	Routed to at least 3 pages correctly", marks: 5, control: "q9"},
      { section: "Routing", label: "2)	Included a navigation bar", marks: 3, control: "q10"},
      { section: "Date store", label: "1)	Included a data store using BehaviorSubject and observables", marks: 5, control: "q11"},
      { section: "API calls", label: "1)	Inlcuded a REST API service", marks: 2, control: "q12"},
      { section: "API calls", label: "6)	API calls are made successfully", marks: 4, control: "q13"},
      { section: "RxJS", label: "1) Used at least one RxJS operator in an appropriate way", marks: 3, control: "q14"},
      { section: "Reative Forms", label: "1)	Used a reactive form appropriately", marks: 3, control: "q15"},
      { section: "Reative Forms", label: "2)	Validation with error messages", marks: 5, control: "q16"},
      { section: "Directive", label: "1) Used one directive", marks: 2, control: "q17"},
      { section: "Styling", label: "1) Application should be aesthestically nice to look at (design, colors, etc...)", marks: 7, control: "q18"},
    ];

    this.questions.forEach((question: any) => {
      this.fullMarks += question.marks;
    })

    this.fullMarks = this.fullMarks;

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
      this.form.patchValue({ [question.control]: question.marks });
    })
  }

  setSavedValues() {

    this.form.get('firstName')?.value;
    this.form.get('lastName')?.value;

  }
}
