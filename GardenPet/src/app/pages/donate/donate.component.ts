import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-donate',
  imports: [RouterModule],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent {

  copyText(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Texto copiado al portapapeles:', text);
      // Aquí puedes mostrar una notificación al usuario, por ejemplo, usando un Toast o similar.
    }).catch(err => {
      console.error('Error al copiar texto:', err);
    });
  }

}
