import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { MessagesModule } from 'primeng/messages';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { SplitterModule } from 'primeng/splitter';
import { ListboxModule } from 'primeng/listbox';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BadgeModule } from 'primeng/badge';
import { ImageModule } from 'primeng/image';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ToolbarModule } from 'primeng/toolbar';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const modules = [
  InputTextModule,
  DropdownModule,
  ButtonModule,
  CarouselModule,
  CheckboxModule,
  MessagesModule,
  MenuModule,
  MenubarModule,
  AvatarModule,
  DialogModule,
  PasswordModule,
  SplitterModule,
  ListboxModule,
  CalendarModule,
  InputTextareaModule,
  SelectButtonModule,
  ToggleButtonModule,
  ScrollTopModule,
  ConfirmPopupModule,
  OverlayPanelModule,
  BadgeModule,
  ImageModule,
  ToastModule,
  SidebarModule,
  DynamicDialogModule,
  ToolbarModule,
  AnimateOnScrollModule,
  DividerModule,
  CardModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...modules
  ]
})
export class SharedModule { }
