$(document).ready(function () {
  // indicamos que se ejecuta la funcion a los 5 segundos de haberse
  // cargado la pagina
  setTimeout(clickbutton, 5000);

  function clickbutton() {
    // simulamos el click del mouse en el boton del formulario
    $("#action-button").click();
    alert("Aqui llega"); //Debugger
  }
  $("#action-button").on("click", function () {
    console.log("action button clicked");
  });
});
