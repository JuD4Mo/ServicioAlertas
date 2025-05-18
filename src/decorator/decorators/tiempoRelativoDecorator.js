import { AlertaDecorator } from "./alertaDecorator.js";

export class TiempoRelativoDecorator extends AlertaDecorator {
  getDecorada() {
    const hora = new Date(this.alerta.hora);
    const ahora = new Date();
    const minutos = Math.floor((ahora - hora) / 60000);

    return {
      ...this.alerta,
      hace: `${minutos} min`
    };
  }
}