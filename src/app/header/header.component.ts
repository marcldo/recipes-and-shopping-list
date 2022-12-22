import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() navButtonClicked = new EventEmitter<string>();
  collapsed = true;

  onRecipesClicked() {
    this.navButtonClicked.emit('recipes');
  }
  onShoppingListClicked() {
    this.navButtonClicked.emit('shopping');
  }
}
