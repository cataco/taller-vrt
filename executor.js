const { exec } = require("child_process");

(function () {
  document.getElementById("run1").onclick = runVRT;

})();
function runVRT() {
  
  setTimeout(function () {
    document.getElementById("#img1").src = 'cypress/screenshots/screenshots.spec.js/image1.png';
    document.getElementById("#img2").src = 'cypress/screenshots/screenshots.spec.js/image2.png';
    resemble('image1.png').compareTo('image2.png').onComplete(function (data) {
      console.log(data);
      var response = JSON.stringify(data);
      document.getElementById("#resultados").value = response;
    });
  }, 5000);
}