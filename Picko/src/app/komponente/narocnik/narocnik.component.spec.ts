import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarocnikComponent } from './narocnik.component';

describe('NarocnikComponent', () => {
  let component: NarocnikComponent;
  let fixture: ComponentFixture<NarocnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarocnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NarocnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
