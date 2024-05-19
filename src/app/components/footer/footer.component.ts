import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DOMAIN, NAVBAR_MENU_ITEMS } from '../../services/util';
import { NavbarMenuItem } from '../../interface/navbar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  NAVBAR_MENU_ITEMS: NavbarMenuItem[] = NAVBAR_MENU_ITEMS;
  domain = DOMAIN;
  constructor(
    private router: Router
  ) { }

  handleLogoClick() {
    this.router.navigateByUrl('/');
    NAVBAR_MENU_ITEMS.forEach(item => item.isActive = false);
    NAVBAR_MENU_ITEMS[0].isActive = true;
  }

  handleNavItemClick(_t6: NavbarMenuItem) {
    NAVBAR_MENU_ITEMS.forEach(item => item.isActive = false);
    if (_t6.route) {
      _t6.isActive = true;
      this.router.navigateByUrl(_t6.route);
    }
  }
}
