import {Injectable} from "@angular/core";
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() {
  }

  public info(title: string, message: string) {
    Swal.fire({
      icon: 'info',
      title: title,
      text: message
    });
  }

  public success(title: string, message: string) {
    Swal.fire({
      icon: 'success',
      title: title,
      text: message,
      showConfirmButton: false,
      timer: 1500
    });
  }

  public error(title: string, message: string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: message
    });
  }

  public warning(title: string, message: string) {
    Swal.fire({
      icon: 'warning',
      title: title,
      text: message
    });
  }

  public confirm(title: string, message: string, callback: any, cancelCallback?: any) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Yes'
    }).then(result => {
      if (result.value) {
        callback();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        if (cancelCallback) {
          cancelCallback();
        }
      }
    });
  }

  public cancel(title: string, message: string, callback: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ms-2'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: title,
        text: message,
        icon: 'warning',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        showCancelButton: true
      })
      .then(result => {
        if (result.value) {
          callback();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          );
        }
      });
  }
}
