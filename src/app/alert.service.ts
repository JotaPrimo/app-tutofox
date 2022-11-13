import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public success(message: string, title?: string): void {
    this.showAlert(title, message, 'success');
  }

  public info(message: string, title?: string): void {
    this.showAlert(title, message, 'info');
  }

  public error(message: string, title?: string): void {
    this.showAlert(title, message, 'error');
  }

  public confirm() {

    return Swal.fire({
      title: 'Tem certeza?',
      text: "Você não poderá reverter isso!",
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, exclua!',
      cancelButtonText: 'Cancelar!',
    })
  }

  private showAlert(
    title: string | undefined,
    message: string,
    icon: SweetAlertIcon
  ): void {

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: icon,
      title: message
    })
  }
}
