//Importar librerias
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

// Clase del componente Home
export class HomeComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      type: ['', Validators.required], 
      document: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(11),
          Validators.pattern('^[0-9]+$'), 
        ],
      ],
    });
  }

  //Funcion para buscar usuario
  onSearch() {
    //Validación de formulario valido
    if (this.form.valid) {
      const { type, document } = this.form.value;
      // navegación a ruta summary
      this.router.navigate(['summary'], { queryParams: { type, document } })
        .catch((err) => console.error('Navigation error:', err));
    } else {
      console.error('Formulario invalido');
    }
  }
}
