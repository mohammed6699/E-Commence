import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpTemplatedrivien } from './sign-up-templatedrivien';

describe('SignUpTemplatedrivien', () => {
  let component: SignUpTemplatedrivien;
  let fixture: ComponentFixture<SignUpTemplatedrivien>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpTemplatedrivien]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpTemplatedrivien);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
