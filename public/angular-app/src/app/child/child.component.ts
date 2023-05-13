import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
  childX!: number;

  @Input()
  childY!: number;
  childZ: number = 0;

  @Output()
  addEvent: EventEmitter<number> = new EventEmitter<number>();

  public add(): void {
    this.childZ = this.childX + this.childY;
    this.addEvent.emit(this.childZ);
  }
}
