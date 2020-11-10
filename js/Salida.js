"use strict";
var forma = document.getElementById("forma"),
    txtClave = forma["clave"],
    txtNombre = forma["nombre"],
    txtTelefono = forma["telefono"],
    txtFecha = forma["fecha"], 
    salidaNombre = document.getElementById("salidaNombre"),
    salidaClave = document.getElementById("salidaClave"),
    salidaTelefono = document.getElementById("salidaTelefono"),
    salidaFecha = document.getElementById("salidaFecha");

forma.addEventListener("submit", procesa, false);

function procesa(){
    var fechaValueAsDate = txtFecha.valueAsDate,
            fecha = new Date(txtFecha.value);
     salidaFecha.textContent = "La fecha es:" + txtFecha.value; 
      salidaClave.textContent = "Su calve es: " + txtClave.value;
      salidaNombre.textContent = "Su nombre es: " + txtNombre.value;
      salidaTelefono.textContent = "Su telefono es: " + txtTelefono.value;
   
}
