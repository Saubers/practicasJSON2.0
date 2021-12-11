export function funciones(data) {

    //Guardar sexos disponibles

    function sexoPaciente(parametro) {
        var sexo = [];
        parametro.forEach(item => {
            if (!sexo.includes(item.paciente.sexo)) {
                sexo.push(item.paciente.sexo);
            }
        })
        return sexo;
    }
    let sexo = sexoPaciente(data);

    //Funcion contadora de tipo de sexo

    let contadorSexo = {};
    sexo.forEach(item => {
        contadorSexo[item] = data.filter(x => x.paciente.sexo === item);
    })
    
    for (let key in contadorSexo) {
        console.log(`Sexo: ${key} - Cantidad: ${contadorSexo[key].length}`);
    }


    //Guardar instituciones disponibles

    function instituciones(parametro) {
        var nombres = [];
        parametro.forEach(item => {
            if (!nombres.includes(item.institucion.prestador)) {
                nombres.push(item.institucion.prestador);
            }
        })
        return nombres;
    }
    let institucion = instituciones(data);

    //Funcion contadora de instituciones

    let contadorInstituciones = {};
    institucion.forEach(item => {
        contadorInstituciones[item] = data.filter(x => x.paciente.sexo === item);
    })
    for (let i in contadorInstituciones) {
        console.log(i + ": " + contadorInstituciones[i].length);
    }


    //Guardar estados disponibles

    function estados(parametro) {
        var estado = [];
        parametro.forEach(item => {
            if (!estado.includes(item.estado.nombre)) {
                estado.push(item.estado.nombre);
            }
        })
        return estado;
    }
    let estado = estados(data);

    //Funcion contadora de estados

    let contadorEstado = {};
    estado.forEach(item => {
        contadorEstado[item] = data.filter(x => x.estado.nombre === item);
    })
    for (let i in contadorEstado) {
        console.log(`La cantidad de pacientes en estado ${i} es de ${contadorEstado[i].length}`);
    }


    //Guardar uge disponibles

    function uge(parametro) {
        var tipo = [];
        parametro.forEach(item => {
            if (!tipo.includes(item.uge.nombre)) {
                tipo.push(item.uge.nombre);
            }
        })
        return tipo;
    }
    
    let ugeContadora = uge(data);

    //Funcion contadora de uge

    let contadorUge = {};
    ugeContadora.forEach(item => {
        contadorUge[item] = data.filter(x => x.uge.nombre === item);
    })
    for (let i in contadorUge) {
        console.log(`La cantidad de pacientes en uge ${i} es de ${contadorUge[i].length}`);
    }

    //Guardar tipo de internacion disponibles

    function internacion(parametro) {
        var tipo = [];
        parametro.forEach(item => {
            if (!tipo.includes(item.tipoInternacion.nombre)) {
                tipo.push(item.tipoInternacion.nombre);
            }
        })
        return tipo;
    }
    
    let internacionContadora = internacion(data);

    //Funcion contadora de tipo de internacion

    let contadorInternacion = {};
    internacionContadora.forEach(item => {
        contadorInternacion[item] = data.filter(x => x.tipoInternacion.nombre === item);
    })
    for (let i in contadorInternacion) {
        console.log(`La cantidad de pacientes en tipo de internacion ${i} es de ${contadorInternacion[i].length}`);
    }
}