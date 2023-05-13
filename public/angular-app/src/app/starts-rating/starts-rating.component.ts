import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-starts-rating',
  templateUrl: './starts-rating.component.html',
  styleUrls: ['./starts-rating.component.css']
})
export class StartsRatingComponent {

  @Input()
  rating!: number;
  
  starts!: number[];

  ngOnChanges(changes: SimpleChanges): void {
    this.starts = new Array<number>(this.rating);
  }
}
