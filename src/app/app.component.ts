import {Component} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {SidebarComponent} from '../layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, SidebarComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'punishment-tracker';
}
