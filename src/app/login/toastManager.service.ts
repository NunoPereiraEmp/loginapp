import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Injectable()
export class ToastManager {
  constructor(private toast: NgToastService) {}

  errorToast() {
    this.toast.error({
      detail: 'Login failed, your password or username are incorrect',
      summary: '',
      duration: 2000,
    });
    console.log('insidde toast');
  }

  successToast() {
    this.toast.success({
      detail: 'Login success, your password and username are correct',
      summary: '',
      duration: 2000,
    });
  }

  warningToast() {
    this.toast.warning({
      detail: 'Login failed, insert your password or username',
      summary: '',
      duration: 2000,
    });
  }
}
