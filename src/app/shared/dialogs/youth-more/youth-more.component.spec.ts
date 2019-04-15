import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthMoreComponent } from './youth-more.component';

describe('YouthMoreComponent', () => {
  let component: YouthMoreComponent;
  let fixture: ComponentFixture<YouthMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouthMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
