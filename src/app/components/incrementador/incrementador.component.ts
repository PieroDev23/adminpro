import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css'],
})
export class IncrementadorComponent implements OnInit {
  @Input('value')
  public progress: number = 50;
  @Input('clase')
  public btnClase: string = '';

  @Output()
  public emmitValue: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    this.btnClase = `btn ${this.btnClase}`;
  }

  changeValue(value: number): void {
    if (this.progress >= 100 && value > 0) {
      this.progress = 100;
      this.emmitValue.emit(100);
      return;
    }

    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      this.emmitValue.emit(0);
      return;
    }

    this.progress += value;
    this.emmitValue.emit(this.progress);
  }

  onChange(value: number) {
    value >= 100
      ? (this.progress = 100)
      : value <= 0
      ? (this.progress = 0)
      : (this.progress = value);

      this.emmitValue.emit(this.progress)
  }
}
