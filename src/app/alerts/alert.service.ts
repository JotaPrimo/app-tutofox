import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})


export class AlertService {

  returnToast() {
    return Swal.mixin({
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
  }

  showSuccess(message: string): void {
    let toast = this.returnToast();
    toast.fire({
      icon: 'success',
      title: message
    })
  }

  showError(message: string): void {
    let toast = this.returnToast();
    toast.fire({
      icon: 'error',
      title: message
    })
  }

  showWarnig(message: string): void {
    let toast = this.returnToast();
    toast.fire({
      icon: 'warning',
      title: message
    })
  }

  returnConfirmationAlertDelete() {
    return Swal.fire({
      title: 'Tem certeza ?',
      text: "Você não será capaz de reverter isso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, Deletar!',
      cancelButtonText: 'Cancelar!'
    })
  }


}
