import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { BranchService } from '../services/branch.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  admin = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  branch = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  adminLogin = false;
  branchLogin = false;

  constructor(
    private adminService: AdminService,
    private branchService: BranchService,
    private route: Router,
  ) {}

  loginAdmin() {
    this.adminService.find(this.admin.value.email).subscribe({
      next: (res: any) => {
        if (res) {
          sessionStorage.setItem('admin', JSON.stringify(res));
          this.route.navigate(['home'])
        }
      },
    })
  }

  loginBranch() {
    this.branchService.find(this.branch.value).subscribe({
      next: (res: any) => {
        if (res) {
          sessionStorage.setItem('branch', JSON.stringify(res));
          this.route.navigate(['home'])
        }
      },
    })
  }

  openAdminLogin() {
    this.adminLogin = !this.adminLogin;
    this.branchLogin = false;
  }

  openBranchLogin() {
    this.branchLogin = !this.branchLogin;
    this.adminLogin = false;
  }
}
