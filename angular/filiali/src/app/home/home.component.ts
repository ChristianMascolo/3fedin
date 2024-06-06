import { Component } from '@angular/core';
import { BranchService } from '../services/branch.service';
import { OrderService } from '../services/order.service';
import { RevenueService } from '../services/revenue.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  branchs!: any[];
  orders!: any[];
  revenues!: any[];

  constructor(
    private branchService: BranchService,
    private orderService: OrderService,
    private revenueService: RevenueService
  ) {
    branchService.all().subscribe({
      next: (res: any) => {
        this.branchs = res;
      },
    });
  }

  loadOrder(id: number) {
    this.orderService.findByBranchId(id).subscribe({
      next: (res: any) => {
        this.orders = [];
        this.orders = res;
      },
    });
  }

  loadRevenue(id:number){
    this.revenueService.byBranch(id).subscribe({
      next: (res: any) => {
        this.revenues = [];
        this.revenues = res;
      }
    })
  }
}
