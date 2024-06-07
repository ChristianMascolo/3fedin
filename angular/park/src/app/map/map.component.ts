import { Component, SecurityContext } from '@angular/core';
import * as Leaflet from 'leaflet';
import { CarouselService } from '../services/carousel.service';
import { DomSanitizer } from '@angular/platform-browser';
import 'leaflet-geometryutil';
import GeometryUtil from 'leaflet-geometryutil';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright"></a>',
      }),
    ],
    zoom: 18,
    center: { lat: 41.76484274829768, lng: 12.959777415130038 },
  };

  constructor(
    private carouselService: CarouselService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.initMarkers();
  }

  initMarkers() {
    /*  if (localStorage.getItem('client') !== null) {
      let client = JSON.parse(localStorage.getItem('client') as string);
      this.carouselService
        .getAllAvailable(client.age, client.height)
        .subscribe({
          next: (res) => {
            for (let i = 0; i < res.length; i++) {
              let tmpMarker = {
                position: {
                  lat: res[i].latitude,
                  lng: res[i].longitude,
                },
                draggable: false,
              };
              let marker = this.generateMarker(tmpMarker, i);
              marker.addTo(this.map).bindPopup(
                `<h1>${res[i].name}</h1>`
              );
              this.map.panTo(tmpMarker.position);
              this.markers.push(marker);
            }
          },
        });
    } else if (localStorage.getItem('client') === null) {
      this.carouselService.getAll().subscribe({
        next: (res) => {
          for (let i = 0; i < res.length; i++) {
            let tmpMarker = {
              position: {
                lat: res[i].latitude,
                lng: res[i].longitude,
              },
              draggable: false,
            };
            let marker = this.generateMarker(tmpMarker, i);
            
            marker.addTo(this.map).bindPopup(
              `<h1>${res[i].name}</h1>`
            
            );
            this.map.panTo(tmpMarker.position);
            this.markers.push(marker);
          }
        },
      });
    } */
  }

  generateMarker(data: any, index: number) {
    return Leaflet.marker(data.position, { draggable: data.draggable })
      .on('click', (event) => this.markerClicked(event, index))
      .on('dragend', (event) => this.markerDragEnd(event, index));
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.initMarkers();
  }

  mapClicked($event: any) {
    let data = {
      position: {
        lat: $event.latlng.lat,
        lng: $event.latlng.lng,
      },
      draggable: true,
    };
    let marker = this.generateMarker(data, 0);
    marker.addTo(this.map).bindPopup(`<h1>Tu sei qui</h1>`);
    this.map.panTo(data.position);
    this.markers.push(marker);
    this.generateNeighbourMarker($event.latlng);
  }

  markerClicked($event: any, index: number) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerDragEnd($event: any, index: number) {
    console.log($event.target.getLatLng());
  }

  generateNeighbourMarker(latLng: any) {
    this.carouselService.getNeighbour(latLng.lat,latLng.lng).subscribe({
      next: (res)=>{
        for (let i = 0; i < res.length; i++) {
          let tmpMarker = {
            position: {
              lat: res[i].latitude,
              lng: res[i].longitude,
            },
            draggable: false,
          };
          let marker = this.generateMarker(tmpMarker, i);
          marker.addTo(this.map).bindPopup(
            `<h1>${res[i].name}</h1>`
          );
          this.map.panTo(tmpMarker.position);
          this.markers.push(marker);
        }
      }
    })
  }

  getImg(path: any) {
    let base64String = 'data:image/*;base64, ' + ' ' + path;
    return this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, path);
  }
}
