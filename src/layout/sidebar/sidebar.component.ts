import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {SidebarService} from '../../core/services/sidebar/sidebar.service';
import {NavElementComponent} from './partial/nav-element/nav-element.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [
    NavElementComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {

  private readonly sidebarService = inject(SidebarService);
  public readonly open =
    computed(() => this.sidebarService.isOpen && this.sidebarService.canCollapse);
  public readonly canCollapse =
    computed(() => this.sidebarService.canCollapse);

  public readonly sidebarWidthClass = computed(() =>
    !this.canCollapse() ? 'w-full' : this.open() ? 'w-[80px]' : 'w-[300px]'
  );

  toggleSidebar(): void {
    this.sidebarService.toggle();
  }

}
