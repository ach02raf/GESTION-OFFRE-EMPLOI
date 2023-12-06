import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirPlusPageComponent } from './voir-plus-page.component';

describe('VoirPlusPageComponent', () => {
  let component: VoirPlusPageComponent;
  let fixture: ComponentFixture<VoirPlusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoirPlusPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoirPlusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
