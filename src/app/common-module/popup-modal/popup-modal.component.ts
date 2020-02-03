import { Component, OnInit, Input } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-popup-modal",
  templateUrl: "./popup-modal.component.html",
  styleUrls: ["./popup-modal.component.scss"]
})
export class PopupModalComponent implements OnInit {
  @Input() Main_title;
  @Input() sub_text;
  @Input() Btn_text;
  @Input() Btn_link;
  @Input() sub_btn_text;
  @Input() sub_btn_link;
  @Input() showPopup;
  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private router: Router,
  ) {}

  message: string = "Saved";
  messageSmall: string = "saved";
  optionalUrl: string = "";

  ngOnInit() {
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  openNew(m1: string, m2: string, optionalUrl:string = "/agreements")  {
    this.optionalUrl = optionalUrl;
    this.message = m1
    this.messageSmall = m2;
    document.getElementById("modalButton").click();
  }

  doRedirect() {
    this.router.navigate([this.optionalUrl])
    this.modalService.dismissAll()
  }

}
