import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bizawaynx-bell-icon',
  templateUrl: './bell-icon.component.html',
  styleUrls: ['./bell-icon.component.scss'],
})
export class BellIconComponent implements OnInit {
  @Input()
  viewBox = '0 0 24 24';
  @Input()
  svgClass = 'h-6 w-6';
  isFill = false;
  constructor() {
    // sda
  }

  ngOnInit(): void {
    console.log();
  }
}
