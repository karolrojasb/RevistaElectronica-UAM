import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { articulos } from 'src/app/Modelos/articulos.interface';
import { ServidorService } from 'src/app/servidor.service';

@Component({
  selector: 'app-panel-editor',
  templateUrl: './panel-editor.component.html',
  styleUrls: ['./panel-editor.component.css'],
})
export class PanelEditorComponent implements OnInit {


  public articulos1 = [] as articulos[]
  constructor(private servidor: ServidorService, private router: Router) {
    this.obtenerArticulos()

  }
  ngOnInit(): void {}

  public obtenerArticulos() {
    this.servidor.obtenerArticulosTotal().subscribe((data) => {
      console.log(data)
      this.articulos1 = data as articulos[]
    })
  }

  public verArticulo(index: number) {
    console.log(index)
    this.router.navigate([{ outlets: { lec: ['articulo', index] } }])
  }
}
