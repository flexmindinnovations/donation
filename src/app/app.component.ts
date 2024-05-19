import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedService } from './services/shared.service';
import { NAVBAR_MENU_ITEMS } from './services/util';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'donation';

  constructor(
    private sharedService: SharedService
  ) {
    window.addEventListener("load", () => {
      const url = window.location.href;
      let currentRoute = url.substring(url.lastIndexOf('/') + 1, url.length);
      NAVBAR_MENU_ITEMS.forEach(item => item.isActive = false);
      if (currentRoute) this.setActiveItemOnPageRefresh(currentRoute);
      else NAVBAR_MENU_ITEMS[0].isActive = true;
    });
  }

  setActiveItemOnPageRefresh(route: string) {
    const itemIndex = NAVBAR_MENU_ITEMS.findIndex(item => item.key.toLowerCase() === route);
    if (itemIndex > -1) NAVBAR_MENU_ITEMS[itemIndex].isActive = true;
  }
}
