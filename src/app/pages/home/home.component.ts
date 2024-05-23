import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { APPROACH, DOMAIN, IMPACT_ITEMS, SERVICES, WHY_CHOOSE_US_CONTENTS } from '../../services/util';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  domain = DOMAIN;
  whyChooseUsContents = WHY_CHOOSE_US_CONTENTS;
  approachContents = APPROACH;
  servicesContent = SERVICES;
  impactItems = IMPACT_ITEMS;
}
