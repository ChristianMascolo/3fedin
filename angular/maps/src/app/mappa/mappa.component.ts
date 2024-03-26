import { Component, ElementRef, ViewChild } from '@angular/core';
import { Browser, Map, map, tileLayer } from 'leaflet';

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.component.html',
  styleUrls: ['./mappa.component.scss']
})
export class MappaComponent {
  @ViewChild('map')
  private mapContainer !: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    const initialState = { lng: 45.59135, lat: 10.243048, zoom: 4 };

    const lefletMap: Map = map(this.mapContainer.nativeElement).setView([initialState.lat, initialState.lng], initialState.zoom);

    const isRetina = Browser.retina;
    const baseUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}";
    const retinaUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}";

    tileLayer(isRetina ? retinaUrl : baseUrl, {
      apiKey: '164a0d5566b146ab880c7ec419d490cb',
      maxZoom: 20,
      id: 'osm-bright',
    } as any).addTo(lefletMap);
  }

}
