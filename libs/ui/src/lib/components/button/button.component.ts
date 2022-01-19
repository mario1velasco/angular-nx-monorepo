import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  className = 'btn';
  @Input()
  disabled = false;

  constructor() {
    // console.log('ButtonComponent');
  }

  ngOnInit(): void {
    if (this.disabled) {
      console.log('DISABLED');

      this.className = 'btn-disabled';
    }
  }
}
