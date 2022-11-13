import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'endereco-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() public emitSearch: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public search(value: string) {
    this.emitSearch.emit(value)
  }

}
