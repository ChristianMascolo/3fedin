import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { BranchService } from '../services/branch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  admin = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  branch = new FormGroup({
    name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  adminRegister = false;
  branchRegister = false;

  constructor(
    private adminService: AdminService,
    private branchService: BranchService,
    private route: Router
  ) {}

  registerAdmin() {
    this.adminService.add(this.admin.value).subscribe({
      next: (res) => {
        localStorage.setItem('admin', JSON.stringify(res));
        this.route.navigate(['home']);
      },
    });
  }

  registerBranch() {
    this.branchService.add(this.branch.value).subscribe({
      next: (res) => {
        localStorage.setItem('branch', JSON.stringify(res));
        this.route.navigate(['home']);
      },
    });
  }

  openAdminRegister() {
    this.adminRegister = !this.adminRegister;
    this.branchRegister = false;
  }

  openBranchRegister() {
    this.branchRegister = !this.branchRegister;
    this.adminRegister = false;
  }
}
