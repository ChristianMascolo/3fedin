import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from 'src/app/services/image.service';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-modal-property',
  templateUrl: './modal-property.component.html',
  styleUrls: ['./modal-property.component.scss']
})
export class ModalPropertyComponent {
  form = new FormGroup({
    type: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    dimension: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    rooms: new FormControl("", Validators.required),
    parkingPlace: new FormControl("", Validators.required),
  })

  images: any[] = [];

  constructor(private imageService: ImageService, private propertyService: PropertyService, private sanitizer: DomSanitizer, public dialogRef: MatDialogRef<ModalPropertyComponent>) { }

  onFileChange(event: any) {
    let path = event.target.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(path);
    reader.onloadend = () => {
      let base64String = reader.result as string;

      this.images.push(base64String.replace("data:image/png;base64,/9j/", ""));
    };
  }

  onSubmit() {
    this.propertyService.add(this.form.value).subscribe({
      next: (res: any) => {
        this.addImgs(res.id);
      }
    })
  }

  addImgs(id: number) {
    let imgs: any[] = [];

    this.images.forEach(i => {
      imgs.push({ img: i, property: { id: id } });
    })

    console.table(imgs);

    this.imageService.add(imgs).subscribe({
      next: () => {
        this.dialogRef.close();
      }
    });
  }
}
