var variable =
  "" +
  '<nav id="navbar">' +
  '  <a class="nav-elem" href="navbar.html">this the nav bar</a> | <a class="nav-elem" href="index.html">home</a> |' +
  "  <!-- link to a plain html of the navbar it would be funny -->" +
  '  <!-- <a class="nav-elem">lyrics</a> -->' +
  '  <a class="nav-elem" href="pomes.html">pomes</a> | <a class="nav-elem" href="links.html">links</a> |' +
  '  <a class="nav-elem" href="about.html">about</a> |' +
  '  <a class="nav-elem" href="reccomendations.html">reccomendations</a> |' +
  '  <a class="nav-elem" href="terms.html">art</a> |' +
  '  <a class="nav-elem" href="terms.html">terms and conditions</a>' +
  '  <!-- <a class="nav-elem">cookies</a> -->' +
  '  <!-- <a class="nav-elem">blog</a> -->' +
  "</nav>" +
  "";
document.write(variable);

// function readTextFile(file) {
//   var rawFile = new XMLHttpRequest();
//   rawFile.open("GET", file, false);
//   rawFile.onreadystatechange = function () {
//     if (rawFile.readyState === 4) {
//       if (rawFile.status === 200 || rawFile.status == 0) {
//         var allText = rawFile.responseText;
//         alert(allText);
//       }
//     }
//   };
//   rawFile.send(null);
// }

// readTextFile("navbar.html");

// fetch("navbar.html")
//   .then((response) => response.html())
//   .then((data) => console.log(data));
