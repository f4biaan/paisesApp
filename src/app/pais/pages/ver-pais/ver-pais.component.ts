import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {
  paises!: Country[];
  pais!: Country;

  constructor(
    private activatedRouter: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRouter.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorId(id)),
        tap(console.log)
      )
      .subscribe((pais) => (this.pais = pais[0]));
  }
}
