import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-time-commits',
  templateUrl: './line-time-commits.component.html',
  styleUrls: ['./line-time-commits.component.css'],
})
export class LineTimeCommitsComponent implements OnInit {
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() {}

  ngOnInit(): void {}
}
