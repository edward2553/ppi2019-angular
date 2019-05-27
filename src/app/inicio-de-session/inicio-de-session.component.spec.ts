import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioDeSessionComponent } from './inicio-de-session.component';

describe('InicioDeSessionComponent', () => {
  let component: InicioDeSessionComponent;
  let fixture: ComponentFixture<InicioDeSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioDeSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioDeSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
