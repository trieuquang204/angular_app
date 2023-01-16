import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentToViewComponent } from './component-to-view.component';

describe('ComponentToViewComponent', () => {
  let component: ComponentToViewComponent;
  let fixture: ComponentFixture<ComponentToViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentToViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
