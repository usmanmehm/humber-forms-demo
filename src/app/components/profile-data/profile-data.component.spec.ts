import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDataComponent } from './profile-data.component';

describe('ProfileDataComponent', () => {
  let component: ProfileDataComponent;
  let fixture: ComponentFixture<ProfileDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const validCanadianPostalCodes = ["L5A 3A3", "M5A 2R7", "L5A3A3"];
  const invalidCanadianPostalCodes = ["12345", "L3a4x9"];

  const validUSPostalCodes = ["12345", "54321"];
  const invalidUSPostalCodes = ["1234567890", "123", "abcdef", "L5A 3S3"];


  validCanadianPostalCodes.forEach(postalCode => {
    it(`should validate ${postalCode} as a valid canadian postal code`, () => {

      component.form.get('country')?.setValue("canada");
      component.form.get('postalCode')?.setValue(postalCode)
      expect(component.form.valid).toBeTrue();
    });
  })

  invalidCanadianPostalCodes.forEach(postalCode => {
    it(`should validate ${postalCode} as an invalid canadian postal code`, () => {

      component.form.get('country')?.setValue("canada");
      component.form.get('postalCode')?.setValue(postalCode)
      expect(component.form.valid).toBeFalse();
    });
  })

  validUSPostalCodes.forEach(postalCode => {
    it(`should validate ${postalCode} as a valid US postal code`, () => {
      component.form.get('country')?.setValue("US");
      component.form.get('postalCode')?.setValue(postalCode)
      expect(component.form.valid).toBeTrue();
    });
  })

  invalidUSPostalCodes.forEach(postalCode => {
    it(`should validate ${postalCode} as an invalid US postal code`, () => {

      component.form.get('country')?.setValue("US");
      component.form.get('postalCode')?.setValue(postalCode)
      expect(component.form.valid).toBeFalse();
    });
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
