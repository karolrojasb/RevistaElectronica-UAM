import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAutorComponent } from './panel-autor.component';

describe('PanelAutorComponent', () => {
  let component: PanelAutorComponent;
  let fixture: ComponentFixture<PanelAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelAutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
