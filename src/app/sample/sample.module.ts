import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTestComponent } from './components/my-test/my-test.component';
import { MyOtherTestComponent } from './components/my-other-test/my-other-test.component';
import { MyTestDirective } from './components/my-test.directive';



@NgModule({
  declarations: [
    MyTestComponent,
    MyOtherTestComponent,
    MyTestDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyTestComponent
  ]
})
export class SampleModule { }
