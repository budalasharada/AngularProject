import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharadaComponent } from './sharada.component';

describe('SharadaComponent', () => {
  let component: SharadaComponent;
  let fixture: ComponentFixture<SharadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
