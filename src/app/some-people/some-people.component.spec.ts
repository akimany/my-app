import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomePeopleComponent } from './some-people.component';

describe('SomePeopleComponent', () => {
  let component: SomePeopleComponent;
  let fixture: ComponentFixture<SomePeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomePeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
