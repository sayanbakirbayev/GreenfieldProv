import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeplageComponent } from './homeplage.component';

describe('HomeplageComponent', () => {
  let component: HomeplageComponent;
  let fixture: ComponentFixture<HomeplageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeplageComponent]
    });
    fixture = TestBed.createComponent(HomeplageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
