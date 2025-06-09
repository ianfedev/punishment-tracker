import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-nav-element',
  imports: [
    NgClass
  ],
  standalone: true,
  templateUrl: './nav-element.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavElementComponent {

  /**
   * Icon receives an input with the glyph it must render.
   */
  readonly icon = input('pi-home');

  /**
   * Title receives an input with the placeholder to be rendered.
   */
  readonly title = input('loading...');

  /**
   * Renders the chevron or hides it depending on navigation sub-elements.
   */
  readonly showChevron = input(false);

  /**
   * Modifies the element behaviour depending on expanding and collapsing.
   */
  readonly expanded = input(false);

}
