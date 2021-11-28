import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarociloComponent } from './narocilo.component';

describe('NarociloComponent', () => {
  let component: NarociloComponent;
  let fixture: ComponentFixture<NarociloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarociloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NarociloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
