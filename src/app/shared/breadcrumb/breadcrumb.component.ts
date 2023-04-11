import { Component, OnDestroy, inject } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: [],
})
export class BreadcrumbComponent implements OnDestroy {
  private readonly _router: Router = inject(Router);
  public title: string = '';
  public titleSubs$!: Subscription;

  constructor() {
    this.titleSubs$ = this.getRouteArgs().subscribe(({ titulo }) => {
      this.title = titulo;
      document.title = `Adminpro - ${titulo}`;
    });
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getRouteArgs() {
    return this._router.events.pipe(
      //Filtrar los objestos que sean una instancia de ActiavtionEnd porque en ese tipo esta el objeto con la propiedad titulo que definimos en las rutas
      filter((event) => event instanceof ActivationEnd),
      //Filtrando los objetos que tienen null esta propiedad de fristChild
      filter((event) => (<ActivationEnd>event).snapshot.firstChild === null),
      //Retornar el valor que esta en la propiedad data
      map((event) => (<ActivationEnd>event).snapshot.data)
    );
  }
}
