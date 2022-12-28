import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifsService) {}

  buscar() {
    const query = this.txtBuscar.nativeElement.value;

    if (query.trim().length === 0) return;

    this.gifService.buscarGifs(query);

 
      this.txtBuscar.nativeElement.value = '';
  }
}
