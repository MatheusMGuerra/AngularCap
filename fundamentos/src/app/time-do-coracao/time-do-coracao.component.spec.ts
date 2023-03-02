import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDoCoracaoComponent } from './time-do-coracao.component';

describe('TimeDoCoracaoComponent', () => {
  let component: TimeDoCoracaoComponent;
  let fixture: ComponentFixture<TimeDoCoracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeDoCoracaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeDoCoracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
