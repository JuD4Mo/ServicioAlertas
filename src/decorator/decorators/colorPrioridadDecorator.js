import { AlertaDecorator } from "./alertaDecorator.js";

export class ColorPrioridadDecorator extends AlertaDecorator {
  getDecorada() {
    const colores = {
      alta: 'rojo',
      media: 'naranja',
      baja: 'verde'
    };

    return {
      ...this.alerta,
      color: colores[this.alerta.prioridad] || 'gris'
    };
  }
}
