function validarDatos(){
    window.event.preventDefault();
   
    if(document.form.nombre.value ==""){
      alert("Campo Nombre es obligatorio")
      document.form.nombre.focus();
    }
    else if (document.form.email.value == ""){
      alert("Campo Email es obligatorio")
      document.form.email.focus();
      }else if (document.form.email.value.indexOf("@")==-1 && document.formulario.email.value.indexOf(".") == -1){
        alert("El Email es invalido")
        document.form.email.focus();
  
    }else if  (document.form.asunto.value == ""){
      alert("Campo Asunto es obligatorio")
      document.form.asunto.focus();

    }else if  (document.form.mensaje.value == ""){
    alert("Campo Mensaje es obligatorio")
    document.form.mensaje.focus();
    }else{
      document.form.reset()
      }
  }
  

  document.querySelector("form").addEventListener("submit", validarDatos);
  
