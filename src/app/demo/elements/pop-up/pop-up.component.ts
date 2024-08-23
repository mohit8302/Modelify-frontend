import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [],
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  closeModal() {
    document.body.classList.remove('modal-open');
    document.getElementById('modal-overlay')?.classList.remove('visible');
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const clickedElement = event.target as HTMLElement;
    if (!clickedElement.closest('.modal-content')) {
      this.closeModal();
    }
  }
}
