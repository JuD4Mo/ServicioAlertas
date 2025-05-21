import { supabase } from "../db/supaClient.js";
import { decorarAlerta, decorarAlertas } from "../decorator/decorators/decorarAlertas.js";
import { Alerta } from "../decorator/models/alerta.js";

export const crearAlerta = async (info) => {
    const alerta = new Alerta(info);
    const { data, error } = await supabase
      .from('alertas')
      .insert([alerta.toObject()])
      .select('*');
  
    const decorada = data ? decorarAlertas(data)[0] : null;
    return { data: decorada, error };
  };
  
export const getAlertas = async () => {
  const { data, error } = await supabase
    .from('alertas')
    .select(`
      *,
      estaciones (
        idestacion,
        nombre,
        ubicacion,
        Zona
      )
    `);

  const decoradas = decorarAlertas(data || []);
  return { data: decoradas, error };
};


export const getAlertaById = async (idAlerta) => {
    const { data, error } = await supabase
      .from('alertas')
      .select('*')
      .eq('idalerta', idAlerta)
      .single();
  
    const decorada = data ? decorarAlerta(data) : null;
    return { data: decorada, error };
  };
  

export const filtrarAlertas = async (tipos = []) => {
    const { data, error } = await supabase
      .from('alertas')
      .select('*')
      .in('tipo', tipos);
  
    const decoradas = decorarAlertas(data || []);
    return { data: decoradas, error };
  };
  
