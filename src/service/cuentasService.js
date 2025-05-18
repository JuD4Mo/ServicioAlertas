import { supabase } from "../db/supaClient.js";
import { getTarjetaCuentaId } from "./tarjetaService.js";

export const getCuentaId = async(cuentaId) => {
   const cuenta = await supabase.from('cuentas').select('*').eq('idCuenta', cuentaId).single();
   return cuenta;
}

export const actualizarInfoCuenta = async(cuentaId, info) => {
    const camposAActualizar = {};
    if (info.nombre) camposAActualizar.nombre = info.nombre;
    if (info.apellido) camposAActualizar.apellido = info.apellido;
    if (info.correo) camposAActualizar.correo = info.correo;

    if (Object.keys(camposAActualizar).length === 0) {
        throw new Error("No se enviaron datos para actualizar.");
    }

    return await supabase.from('cuentas').update(camposAActualizar).eq('idcuenta', Number(cuentaId)).select('*');
}

export const eliminarCuenta = async(cuentaId) => {
    let {data, error} = await getTarjetaCuentaId(cuentaId); //Método getTarjetaCuentaId que está en TarjetaService
    for(const tarjeta of data){
        await supabase.from('tarjetas').delete('*').eq('idtarjeta', tarjeta.idtarjeta);
    }

    return await supabase.from('cuentas').delete('*').eq('idcuenta',cuentaId);
}