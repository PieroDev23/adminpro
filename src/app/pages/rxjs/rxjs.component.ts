import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, filter, interval, map, retry, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs$: Subscription

  constructor() {
    // this.returnObs()
    //   .pipe(retry(1))
    //   .subscribe({
    //     next: (value) => console.log(value),
    //     error: (err) => console.error(err),
    //     complete: () => console.log('obs terminado'),
    //   });

    this.intervalSubs$ = this.returnsInterval().subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.intervalSubs$.unsubscribe()
  }

  returnsInterval(): Observable<number> {
    return interval(500).pipe(
      take(10),
      map((value) => value + 1),
      filter((value) => value % 2 === 0)
    );
  }

  returnObs(): Observable<number> {
    let number = -1;
    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        number++;
        observer.next(number);

        if (number === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (number === 2) {
          observer.error('number llego al error');
        }
      }, 1000);
    });
  }
}
