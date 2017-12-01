import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinleEntryComponent } from './sinle-entry.component';

describe('SinleEntryComponent', () => {
  let component: SinleEntryComponent;
  let fixture: ComponentFixture<SinleEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinleEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinleEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
