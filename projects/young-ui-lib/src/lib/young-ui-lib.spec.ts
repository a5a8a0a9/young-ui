import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungUiLib } from './young-ui-lib';

describe('YoungUiLib', () => {
  let component: YoungUiLib;
  let fixture: ComponentFixture<YoungUiLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoungUiLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoungUiLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
