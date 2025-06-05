import {computed, effect, Injectable, Signal, signal, WritableSignal} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  /**
   * Designed to prevent collapse from smaller screens (ATM: MD breakpoint).
   * @private minimum to allow collapse.
   */
  private readonly collapseAllowance: number = 768;
  private _viewWidth: WritableSignal<number> = signal(window.innerWidth);

  /**
   * @private defines main control for shrinking and widening.
   */
  private _isOpen: WritableSignal<boolean> = signal(false);

  /**
   * @private computes if width is enough to allow shrinking from user.
   */
  private _canCollapse: Signal<boolean> = computed(() => this._viewWidth() > this.collapseAllowance);

  constructor() {

    window.addEventListener('resize', () => {
      this._viewWidth.set(window.innerWidth);
    });

    effect(() => {
      if (!this.canCollapse) {
        this.toggle(true);
      }
    });

  }

  /**
   * Toggles the actual state of the sidebar.
   * @param force an specific value.
   */
  public toggle(force?: boolean): void {
    this._isOpen.set(force ?? !this.isOpen);
  }

  /**
   * Check if sidebar is open.
   */
  get isOpen(): boolean {
    return this._isOpen();
  }

  /**
   * Check if user has collapse granted.
   */
  get canCollapse(): boolean {
    return this._canCollapse();
  }

  /**
   * Forces view width for test purposes
   * @param value new view width.
   */
  forceViewWidth(value: number) {
    this._viewWidth.set(value);
  }

}
