import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituserphotoComponent } from './edituserphoto.component';

describe('EdituserphotoComponent', () => {
  let component: EdituserphotoComponent;
  let fixture: ComponentFixture<EdituserphotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdituserphotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdituserphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
