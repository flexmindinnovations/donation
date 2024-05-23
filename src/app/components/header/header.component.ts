import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, DoCheck, HostListener, NgZone, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { AddUserComponent } from '../../modals/add-user/add-user.component';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SharedService } from '../../services/shared.service';
import { NAVBAR_MENU_ITEMS } from '../../services/util';
import { NavbarMenuItem } from '../../interface/navbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, DynamicDialogModule, CommonModule, AddUserComponent],
  providers: [DialogService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logoSrc: string = 'assets/logo.jpg';
  NAVBAR_MENU_ITEMS: NavbarMenuItem[] = NAVBAR_MENU_ITEMS;
  ref: DynamicDialogRef | undefined;

  constructor(
    private router: Router,
    private dialogService: DialogService,
    private sharedService: SharedService
  ) { }


  handleLogoClick() {
    this.router.navigateByUrl('/');
    NAVBAR_MENU_ITEMS.forEach(item => item.isActive = false);
    NAVBAR_MENU_ITEMS[0].isActive = true;
  }

  handleNavItemClick(_t6: NavbarMenuItem) {
    NAVBAR_MENU_ITEMS.forEach(item => item.isActive = false);
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
