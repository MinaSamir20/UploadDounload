import {
  HttpClient,
  HttpClientModule,
  HttpErrorResponse,
} from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload-and-download',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './upload-and-download.component.html',
  styleUrl: './upload-and-download.component.scss',
})
export class UploadAndDownloadComponent {
  inputData: any = '';
  folderName = 'Users';
  baseUrl = 'https://localhost:7191/api/files/';
  uploadFileNames: string[] = [];

  constructor(private http: HttpClient) {}
  onFileChange(event: any) {
    const filetype = ['image/jpg', 'image/jpeg', 'image/png'];
    const file = event.currentTarget.files[0];
    if (filetype.includes(file.type) && file.size < 2000000) {
      this.inputData = file.name;
      const formData = new FormData();
      formData.append('file', file);
      this.uploadFiles(this.folderName, formData);
    } else {
      if (!filetype.includes(file.type)) {
        alert('File type not supported');
      } else {
        alert('File size must be less than 2MB');
      }
    }
  }

  uploadFiles(folderName: string, formData: FormData) {
    this.http.post(this.baseUrl + folderName, formData).subscribe({
      next: (res: any) => {
        this.http.get(`${res.location}`).subscribe({
          next: (res: any) => {
            this.uploadFileNames.push(res.image);
          },
        });
      },
      error: (err: HttpErrorResponse) => alert(err.error),
    });
  }

  downloadFile(file: string) {
    this.http.get(file, { responseType: 'blob' }).subscribe((res: Blob) => {
      const blob = new Blob([res], { type: res.type });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
