import { Component } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService.open();
  }
}
