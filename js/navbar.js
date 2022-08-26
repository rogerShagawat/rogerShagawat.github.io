var variable =
  "" +
  '<nav id="navbar">' +
  '  <a class="nav-elem" href="navbar.html">this the nav bar</a> | <a class="nav-elem" href="index.html">home</a> |' +
  "  <!-- link to a plain html of the navbar it would be funny -->" +
  '  <!-- <a class="nav-elem">lyrics</a> -->' +
  '  <a class="nav-elem" href="pomes.html">pomes</a> | <a class="nav-elem" href="links.html">links</a> |' +
  '  <a class="nav-elem" href="about.html">about</a> |' +
  '  <a class="nav-elem" href="reccomendations.html">reccomendations</a> |' +
  '  <a class="nav-elem" href="art.html">art</a> |' +
  '  <a class="nav-elem" href="terms.html">terms and conditions</a>' +
  '  <!-- <a class="nav-elem">cookies</a> -->' +
  '  <!-- <a class="nav-elem">blog</a> -->' +
  "</nav>" +
  '<hr />' +
  "";
document.write(variable);

/* const nav = document.querySelector('.navbar')
fetch('js/navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
}) */