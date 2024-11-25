//Importar librerias
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})

// Clase del componente Summary
export class SummaryComponent implements OnInit {
  clientData: any;
  error: boolean = false;

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    //Obtención de parametros 
    const { type, document } = this.route.snapshot.queryParams;

    try {
      // Llamado a la API
      const response = await axios.get(
        `http://localhost:8080/api/clients?type=${type}&document=${document}`
      );
      // Cargue de datos
      this.clientData = response.data;
    } catch (err) {
      console.error('Error al cargar los datos:', err);
      this.error = true;
    }
  }
}
