import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'Button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input()
  className = 'btn';
  @Input()
  disabled = false;

  initialClassName = '';
  constructor() {
    // console.log('ButtonComponent');
  }

  ngOnInit(): void {
    if (this.disabled) {
      this.className = 'btn-disabled';
    }
    this.initialClassName = this.className;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['disabled']?.currentValue);
    if (changes['disabled']?.currentValue) {
      this.className = 'btn-disabled';
    } else if (changes['disabled']?.currentValue === false) {
      this.className = this.initialClassName;
    }
  }
}
