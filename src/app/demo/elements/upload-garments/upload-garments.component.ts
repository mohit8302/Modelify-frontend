import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-upload-garments',
  standalone: true,
  imports: [MatIconModule, CommonModule, FormsModule], // Include CommonModule and FormsModule here
  templateUrl: './upload-garments.component.html',
  styleUrls: ['./upload-garments.component.scss']
})
export default class UploadGarmentsComponent {
  files: any[] = [];

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    (event.target as HTMLElement).classList.add('dragover');
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    (event.target as HTMLElement).classList.remove('dragover');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    (event.target as HTMLElement).classList.remove('dragover');

    if (event.dataTransfer?.files) {
      this.addFiles(event.dataTransfer.files);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.addFiles(input.files);
    }
  }

  addFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const url = URL.createObjectURL(file);
      console.log(`File added: ${file.name}, URL: ${url}`); // Debugging
      this.files.push({
        file,
        url,
        clothingName: '',
        folder: '',
        tags: ''
      });
    }
  }

  saveDetails(fileObj: { file: File; url: string; clothingName: string; folder: string; tags: string }) {
    // Implement your save logic here
    console.log('Saving details for', fileObj.file.name, 'with details:', {
      clothingName: fileObj.clothingName,
      folder: fileObj.folder,
      tags: fileObj.tags
    });
  }
}
