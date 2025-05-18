export class AlertaDecorator {
    constructor(alerta) {
      this.alerta = alerta;
    }
  
    getDecorada() {
      return this.alerta;
    }
  }