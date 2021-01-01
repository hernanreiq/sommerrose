(function(){
    /* VARIABLES PARA HACER EL PEDIDO*/
    var tipo_sombrero = document.getElementById('tipo-sombrero');
    var imagen_sombrero = document.getElementById('imagen-sombrero');
    var cantidad = document.getElementById('cantidad');
    var nombre = document.getElementById('nombre');
    var sexo = document.getElementById('sexo');
    var regalo = document.getElementById('regalo');
    var boton_pedir = document.getElementById('pedir');
    var boton_coordinar = document.getElementById('coordinar');
    
    /* RESULTADOS DE LO QUE SELECCIONO EL USUARIO */
    var pagina_principal = document.getElementById('pagina-principal');
    var pagina_secundaria = document.getElementById('pagina-secundaria');
    var boton_cancelar = document.getElementById('cancelar');
    var resultado_tipo = document.getElementById('resultado-tipo');
    var resultado_imagen = document.getElementById('resultado-imagen');
    var resultado_cantidad = document.getElementById('resultado-cantidad');
    var resultado_nombre = document.getElementById('resultado-nombre');
    var resultado_sexo = document.getElementById('resultado-sexo');
    var resultado_regalo = document.getElementById('resultado-regalo');

    /*CAMBIAR IMAGEN MOSTRADA*/
    tipo_sombrero.addEventListener('change', function(){
        imagen_sombrero.src = "img/" + tipo_sombrero.value + ".jpg";
    });

    /* HACER UN PEDIDO */
    boton_pedir.addEventListener('click', function(){
        pagina_principal.style.display = "none";
        pagina_secundaria.style.display = "block";
        resultado_tipo.innerText = (tipo_sombrero.options[tipo_sombrero.selectedIndex]).innerText;
        resultado_imagen.src = "img/" + tipo_sombrero.value + ".jpg";
        resultado_cantidad.innerText = cantidad.value;
        if (nombre.value == ""){
            resultado_nombre.innerText = "";
        } else {
            resultado_nombre.innerText = nombre.value;
        }
        resultado_sexo.innerText = (sexo.options[sexo.selectedIndex]).innerText;
        resultado_regalo.innerText = (regalo.options[regalo.selectedIndex]).innerText.toLowerCase();
    });

    /* CAMBIAR LOS DATOS - CANCELAR */
    boton_cancelar.addEventListener('click', function(){
        pagina_principal.style.display = "block";
        pagina_secundaria.style.display = "none";
    });

    /* CLIC EN COORDINAR */
    boton_coordinar.addEventListener('click', function(){
        if (resultado_nombre.innerText == ""){
            var nombre_mostrar = "Prefiero no decirlo";
        } else {
            var nombre_mostrar = resultado_nombre.innerText;
        }

        var url = "https://api.whatsapp.com/send?phone=18297934261&text=*_Sommer Rose RD_*%0A*Mi nombre*%0A" + nombre_mostrar + "%0A*Mi sexo*%0A" + resultado_sexo.innerText + "%0A*Quiero que pinten para mi*%0A" + resultado_cantidad.innerText + " del producto " + resultado_tipo.innerText + "%0A*Este pedido es*%0A" + resultado_regalo.innerText;
        window.open(url);
    });
}());