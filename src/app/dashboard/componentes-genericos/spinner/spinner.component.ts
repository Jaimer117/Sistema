import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `<ng-container *ngIf="isLoading$ | async"><div class="overlay"><mat-spinner class="spinner"></mat-spinner></div></ng-container>`,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  isLoading$ = this.spinnerService.isLoading;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    
  }

}