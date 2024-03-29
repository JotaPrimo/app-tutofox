import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-sort-icon',
  templateUrl: './sort-icon.component.html',
  styleUrls: ['./sort-icon.component.css']
})
export class SortIconComponent {
  @Input() isAscending: boolean = true;
}
