import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgClass
  ],
  standalone: true
})
export class HeaderComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
  }

}
