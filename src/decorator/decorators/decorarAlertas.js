import { IconoTipoDecorator } from "./iconoTipoDecorator.js";
import { TiempoRelativoDecorator } from "./tiempoRelativoDecorator.js";
import { ColorPrioridadDecorator } from "./colorPrioridadDecorator.js";

export const decorarAlerta = (alerta) => {
  let decorada = new IconoTipoDecorator(alerta).getDecorada();
  decorada = new TiempoRelativoDecorator(decorada).getDecorada();
  decorada = new ColorPrioridadDecorator(decorada).getDecorada();
  return decorada;
};

export const decorarAlertas = (alertas = []) => {
  return alertas.map(decorarAlerta);
};
