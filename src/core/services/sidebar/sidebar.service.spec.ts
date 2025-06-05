import { TestBed } from '@angular/core/testing';
import {SidebarService} from './sidebar.service';
import {provideExperimentalZonelessChangeDetection} from '@angular/core';

describe('SidebarService', () => {

  let service: SidebarService;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [
        provideExperimentalZonelessChangeDetection(),
      ]
    });
    service = TestBed.inject(SidebarService);
  });

  it('should create a SidebarService instance', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle open state without argument', () => {
    expect(service.isOpen).toBeFalse();
    service.toggle();
    expect(service.isOpen).toBeTrue();
  });

  it('should force open state to true', () => {
    service.toggle(false);
    service.toggle(true);
    expect(service.isOpen).toBeTrue();
  });

  it('should force open state to false', () => {
    service.toggle(true);
    service.toggle(false);
    expect(service.isOpen).toBeFalse();
  });

  it('should reflect collapse capability based on view width', () => {
    service.forceViewWidth(800);
    expect(service.canCollapse).toBeTrue();

    service.forceViewWidth(600);
    expect(service.canCollapse).toBeFalse();
  });

  it('should auto-open sidebar when collapse is not allowed', async () => {
    service.forceViewWidth(500);

    await new Promise(resolve => setTimeout(resolve, 10));

    expect(service.isOpen).toBeTrue();
  });

});
