import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-modal-branch',
  templateUrl: './modal-branch.component.html',
  styleUrls: ['./modal-branch.component.scss'],
})
export class ModalBranchComponent {
  branch = new FormGroup({
    name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private branchService: BranchService,
    public dialogRef: MatDialogRef<ModalBranchComponent>
  ) {}

  registerBranch() {
    this.branchService.add(this.branch.value).subscribe({
      next: () => {
        this.dialogRef.close();
      },
    });
  }
}
