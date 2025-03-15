import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.component.html',
  styleUrls: ['./moreinfo.component.css']
})
export class MoreinfoComponent {

  constructor() {}

  /**
   * Función para enviar el correo electrónico.
   * Toma los valores de los campos y genera un mailto con el asunto basado en la opción seleccionada.
   */
  sendEmail(): void {
    // Obtén los elementos de los campos (asegúrate de que en el HTML tengan el data-placeholder correcto)
    const nombreElem = document.querySelector(".cause-input[data-placeholder='Nombre*']") as HTMLElement;
    const apellidoElem = document.querySelector(".cause-input[data-placeholder='Apellido*']") as HTMLElement;
    const telefonoElem = document.querySelector(".cause-input[data-placeholder='Número de teléfono*']") as HTMLElement;
    const emailElem = document.querySelector(".cause-input[data-placeholder='Correo electrónico*']") as HTMLElement;
    const selectElem = document.getElementById("dropdownAdopt") as HTMLSelectElement;

    // Extrae los textos y limpia espacios
    const nombre = nombreElem ? nombreElem.innerText.trim() : "";
    const apellido = apellidoElem ? apellidoElem.innerText.trim() : "";
    const telefono = telefonoElem ? telefonoElem.innerText.trim() : "";
    const email = emailElem ? emailElem.innerText.trim() : "";
    // El asunto será el texto de la opción seleccionada; si no hay selección, se usa un valor por defecto.
    const subjectText = selectElem?.options[selectElem.selectedIndex]?.text || "Información para adoptar";

    // Diseña el cuerpo del mensaje con un formato acorde al tema canino
    const emailBody = `Hola,

Mi nombre es ${nombre} ${apellido} y estoy interesado en obtener más información sobre "${subjectText}" en Mi Jardín de Peludos, una organización comprometida con el bienestar de nuestros amigos caninos.

Mis datos de contacto:
Teléfono: ${telefono}
Correo: ${email}

Agradezco enormemente la labor que realizan y espero su respuesta para poder colaborar.

¡Muchas gracias y saludos!

${nombre}`;

    // Define el destinatario (ajusta según corresponda)
    const destinatario = "javiervelasquez085@gmail.com";

    // Crea el enlace mailto con el asunto y el cuerpo codificados
    const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(emailBody)}`;

    // Redirige para abrir el cliente de correo
    window.location.href = mailtoLink;
  }

  /**
   * Función de validación: Verifica que todos los campos requeridos estén completados.
   * Si falta alguno, muestra un mensaje de error con Toastr.
   * Si todo está completo, llama a sendEmail().
   */
  validateAndSendEmail(): void {
    // Selecciona los campos usando sus data-placeholder
    const nombreElem = document.querySelector(".cause-input[data-placeholder='Nombre*']") as HTMLElement;
    const apellidoElem = document.querySelector(".cause-input[data-placeholder='Apellido*']") as HTMLElement;
    const telefonoElem = document.querySelector(".cause-input[data-placeholder='Número de teléfono*']") as HTMLElement;
    const emailElem = document.querySelector(".cause-input[data-placeholder='Correo electrónico*']") as HTMLElement;
    const selectElem = document.getElementById("dropdownAdopt") as HTMLSelectElement;

    // Obtén los valores de cada campo
    const nombre = nombreElem?.innerText.trim() || "";
    const apellido = apellidoElem?.innerText.trim() || "";
    const telefono = telefonoElem?.innerText.trim() || "";
    const email = emailElem?.innerText.trim() || "";
    const dropdownValue = selectElem?.value || "";

    // Array para los campos faltantes
    const missingFields: string[] = [];
    if (!nombre) missingFields.push("Nombre*");
    if (!apellido) missingFields.push("Apellido*");
    if (!telefono) missingFields.push("Número de teléfono*");
    if (!email) missingFields.push("Correo electrónico*");
    if (!dropdownValue) missingFields.push("Información para adoptar*");

    if (missingFields.length > 0) {
      // Muestra un toast de error con Toastr
      window.console.error(
        `Por favor, completa los siguientes campos: ${missingFields.join(", ")}`,
        "Campos incompletos"
      );
      return;
    }

    // Si todos los campos están completos, envía el correo
    this.sendEmail();
  }
}
