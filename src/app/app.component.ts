import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UploadAndDownloadComponent } from "./upload-and-download/upload-and-download.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, UploadAndDownloadComponent]
})
export class AppComponent {
  title = 'UploadDownload';
}
