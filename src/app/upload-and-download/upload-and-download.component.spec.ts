import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAndDownloadComponent } from './upload-and-download.component';

describe('UploadAndDownloadComponent', () => {
  let component: UploadAndDownloadComponent;
  let fixture: ComponentFixture<UploadAndDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadAndDownloadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadAndDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
