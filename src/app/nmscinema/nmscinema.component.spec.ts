import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NmscinemaComponent } from './nmscinema.component';

describe('NmscinemaComponent', () => {
  let component: NmscinemaComponent;
  let fixture: ComponentFixture<NmscinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NmscinemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NmscinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
