import { Component } from '@angular/core';
import { DOMAIN } from '../../services/util';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  domain = DOMAIN;
}
