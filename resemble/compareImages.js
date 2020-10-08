
//var resemble = require('../resemble.js');
(function () {
  document.getElementById("run1").onclick = compareImagesCreateAccount;
  document.getElementById("run2").onclick = compareImagesNewHabit;
  document.getElementById("run3").onclick = compareImagesCreateDaily;

})();
function compareImagesCreateAccount() {
  var response;
  resemble('createAccountBefore.png').compareTo('createAccountAfter.png').ignoreLess().onComplete(function (data) {
    console.log(data);
    response = 'COMPARAR IMAGENES DE PRUEBA DE CREAR CUENTAS: \n' + JSON.stringify(data);
    document.getElementById("resultados").value = response;
  });

}

function compareImagesNewHabit() {
  var response;
  resemble('newHabitBefore.png').compareTo('newHabitAfter.png').ignoreLess().onComplete(function (data) {
    console.log(data);
    response = 'COMPARAR IMAGENES DE PRUEBA DE CREAR HABITO: \n' + JSON.stringify(data);
    document.getElementById("resultados").value = response;
  });

  
}

function compareImagesCreateDaily() {
  var response;
  resemble('newDailyBefore.png').compareTo('newDailyAfter.png').ignoreLess().onComplete(function (data) {
    console.log(data);
    response = 'COMPARAR IMAGENES DE PRUEBA DE CREAR TAREA DIARIA: \n' + JSON.stringify(data);
    document.getElementById("resultados").value = response;
  });
  
}

