import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css'],
})
export class HeaderNavComponent implements OnInit {
  @Input() sessionParam: string;

  constructor() {}

  ngOnInit(): void {}
}
