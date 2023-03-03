import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderizarLiComponent } from './renderizar-li.component';

describe('RenderizarLiComponent', () => {
  let component: RenderizarLiComponent;
  let fixture: ComponentFixture<RenderizarLiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderizarLiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderizarLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
