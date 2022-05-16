import { Injectable } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  modalReference: any;
  closeModal: string = "";
  constructor(private modalService: NgbModal, private toastr: ToastrService) { }

  public close() {
    this.modalService.dismissAll();
  }
  showSuccess(msg: any) {
    this.toastr.success(msg);
  }

  showError(msg: any) {
    this.toastr.error(msg);
  }

  triggerModal(content: any, size = 'lg') {
    this.modalReference = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: size })
    this.modalReference.result.then((res: any) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res: any) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
