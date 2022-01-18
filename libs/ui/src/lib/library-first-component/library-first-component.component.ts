import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bizawaynx-library-first-component',
  templateUrl: './library-first-component.component.html',
  styleUrls: ['./library-first-component.component.scss'],
})
export class LibraryFirstComponentComponent implements OnInit {
  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('OnInit');
  }
}
