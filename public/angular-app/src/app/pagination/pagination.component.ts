import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Input()
  currentOffset!: number;
  @Input()
  limit!: number;
  @Input()
  resultCount!: number;

  @Output()
  backEvent: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  forWardEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private _router: Router) {}

  public goBack() {
    this.currentOffset -= this.limit;
    this.backEvent.emit(this.currentOffset);
  }

  public goForWard() {
    this.currentOffset += this.limit;
    this.forWardEvent.emit(this.currentOffset);
  }
}
