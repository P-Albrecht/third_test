import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviromentComponent } from './enviroment.component';

describe('InviromentComponent', () => {
  let component: EnviromentComponent;
  let fixture: ComponentFixture<EnviromentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnviromentComponent]
    });
    fixture = TestBed.createComponent(EnviromentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
