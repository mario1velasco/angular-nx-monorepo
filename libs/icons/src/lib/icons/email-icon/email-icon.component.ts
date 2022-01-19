import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bizawaynx-email-icon',
  templateUrl: './email-icon.component.html',
  styleUrls: ['./email-icon.component.scss'],
})
export class EmailIconComponent implements OnInit {
  @Input()
  viewBox = '0 0 24 24';
  @Input()
  svgClass = 'h-6 w-6';

  constructor() {
    console.log();
  }

  ngOnInit(): void {
    console.log();
  }
}
