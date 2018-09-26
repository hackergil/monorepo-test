import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonorepolibComponent } from './monorepolib.component';

describe('MonorepolibComponent', () => {
  let component: MonorepolibComponent;
  let fixture: ComponentFixture<MonorepolibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonorepolibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonorepolibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
