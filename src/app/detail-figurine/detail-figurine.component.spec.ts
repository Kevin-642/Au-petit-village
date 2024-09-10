import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFigurineComponent } from './detail-figurine.component';

describe('DetailFigurineComponent', () => {
  let component: DetailFigurineComponent;
  let fixture: ComponentFixture<DetailFigurineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailFigurineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailFigurineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
