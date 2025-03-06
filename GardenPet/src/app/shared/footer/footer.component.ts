import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  copyEmail(email: string) {
    navigator.clipboard.writeText(email).then(
      () => {
        // Opcional: mostrar un mensaje de éxito
        console.log(`Correo copiado: ${email}`);
      },
      err => {
        // Manejo de error (si el usuario no dio permisos, etc.)
        console.error('Error al copiar', err);
      }
    );
  }
  
}
