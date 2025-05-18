import { AlertaDecorator } from "./alertaDecorator.js";

export class IconoTipoDecorator extends AlertaDecorator {
  getDecorada() {
    const iconos = {
      Demora: '⏱️',
      Cierre: '⛔',
      Accidente: '💥'
    };

    return {
      ...this.alerta,
      icono: iconos[this.alerta.tipo] || '❔'
    };
  }
}
