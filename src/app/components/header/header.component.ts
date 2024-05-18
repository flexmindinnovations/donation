import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { AddUserComponent } from '../../modals/add-user/add-user.component';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, DynamicDialogModule, CommonModule, AddUserComponent],
  providers: [DialogService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, AfterViewInit {
  logoSrc: string = 'assets/logo.jpg';
  navbarMenuItems: NavbarMenuItem[] = [];
  ref: DynamicDialogRef | undefined;
  constructor(
    private router: Router,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.setNavbarMenuItems();
  }

  ngAfterViewInit(): void {

    window.addEventListener("load", () => {
      const url = window.location.href;
      const currentRoute = url.substring(url.lastIndexOf('/') + 1, url.length);
      this.setActiveItemOnPageRefresh(currentRoute);
    });
  }

  setNavbarMenuItems() {
    this.navbarMenuItems = [
      { id: 1, key: 'HOME', title: 'Home', route: '/', icon: '', isActive: false },
      { id: 2, key: 'ABOUT', title: 'About', route: '/about', icon: '', isActive: false },
      { id: 3, key: 'CONTACT', title: 'Contact', route: '/contact', icon: '', isActive: false },
      // {id: 4, key: 'HOME', title: 'Home', route: '/', icon: '', isActive: false},
    ];
  }

  setActiveItemOnPageRefresh(route: string) {
    const itemIndex = this.navbarMenuItems.findIndex(item => item.key.toLowerCase() === route);
    if (itemIndex > -1) this.navbarMenuItems[itemIndex].isActive = true;
    else this.navbarMenuItems[0].isActive = true;
  }

  handleLogoClick() {
    this.router.navigateByUrl('/');
    this.navbarMenuItems.forEach(item => item.isActive = false);
    this.navbarMenuItems[0].isActive = true;
  }

  handleNavItemClick(_t6: NavbarMenuItem) {
    this.navbarMenuItems.forEach(item => item.isActive = false);
    _t6.isActive = true;
    this.router.navigateByUrl(_t6.route);
  }

  handleAddUser() {
    this.ref = this.dialogService.open(
      AddUserComponent,
      {
        header: 'Add Employee',
        styleClass: 'add-employee-modal',
        width: '50%',
        height: '60%'
      }
    );
  }
}

interface NavbarMenuItem {
  id: number;
  key: string;
  title: string;
  route: string;
  icon: string;
  isActive: boolean;
}
