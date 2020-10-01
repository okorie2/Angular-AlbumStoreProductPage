import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducrDescriptionComponent } from './producr-description.component';

describe('ProducrDescriptionComponent', () => {
  let component: ProducrDescriptionComponent;
  let fixture: ComponentFixture<ProducrDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducrDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducrDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
