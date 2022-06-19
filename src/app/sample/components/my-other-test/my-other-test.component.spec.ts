import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOtherTestComponent } from './my-other-test.component';

describe('MyOtherTestComponent', () => {
  let component: MyOtherTestComponent;
  let fixture: ComponentFixture<MyOtherTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOtherTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOtherTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
