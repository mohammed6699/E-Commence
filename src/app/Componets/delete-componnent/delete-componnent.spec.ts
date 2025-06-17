import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComponnent } from './delete-componnent';

describe('DeleteComponnent', () => {
  let component: DeleteComponnent;
  let fixture: ComponentFixture<DeleteComponnent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteComponnent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteComponnent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
