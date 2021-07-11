import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker, circle, polygon } from 'leaflet';
import { Coordanada } from '../coordenadas';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  @Input()
  coordenadasIniciales: Coordanada[] = [];

  @Output()
  coordenadaSeleccionada: EventEmitter<Coordanada> = new EventEmitter<Coordanada>();

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 18,
    center: latLng(10.241409228427944, -68.01165389988456)
  };

  ngOnInit(): void {
    this.capas = this.coordenadasIniciales.map(valor => marker([valor.latitud, valor.longitud]));
  }

  capas: Marker<any>[] = [];

  manejarClick(event: LeafletMouseEvent) {
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
    console.log({latitud,longitud});

    this.capas = [];
    this.capas.push(marker([latitud,longitud]));
    this.coordenadaSeleccionada.emit({latitud: latitud, longitud: longitud});
  }

}
