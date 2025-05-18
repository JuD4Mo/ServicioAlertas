export class Alerta {
  constructor({ mensaje, tipo, hora, idestacion = null, idruta = null, prioridad = "media" }) {
    this.mensaje = mensaje;
    this.tipo = tipo; // Demora, Cierre, Accidente
    this.hora = hora || new Date().toISOString();
    this.idestacion = idestacion;
    this.idruta = idruta;
    this.prioridad = prioridad;
  }

  toObject() {
    return {
      mensaje: this.mensaje,
      tipo: this.tipo,
      hora: this.hora,
      idestacion: this.idestacion,
      idruta: this.idruta,
      prioridad: this.prioridad
    };
  }
}
