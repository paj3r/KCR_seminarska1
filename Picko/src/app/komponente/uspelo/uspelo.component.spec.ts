import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UspeloComponent } from './uspelo.component';

describe('UspeloComponent', () => {
  let component: UspeloComponent;
  let fixture: ComponentFixture<UspeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UspeloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UspeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
