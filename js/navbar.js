// document.write( '<nav id=\"navbar\">\n' );
// document.write( '<a class=\"nav-elem\" href=\"navbar.html\">this is the nav bar</a> | <a class=\"nav-elem\" href=\"index.html\">home</a> |\n' );
// document.write( '<!-- link to a plain html of the navbar it would be funny -->\n' );
// document.write( '<!-- <a class=\"nav-elem\">lyrics</a> -->\n' );
// document.write( '<a class=\"nav-elem\" href=\"pomes.html\">pomes</a> | <a class=\"nav-elem\" href=\"links.html\">links</a> |\n' );
// document.write( '<a class=\"nav-elem\" href=\"about.html\">about</a> |\n' );
// document.write( '<a class=\"nav-elem\" href=\"reccomendations.html\">reccomendations</a> |\n' );
// document.write( '<a class=\"nav-elem\" href=\"terms.html\">art</a> |\n' );
// document.write( '<a class=\"nav-elem\" href=\"terms.html\">terms and conditions</a>\n' );
// document.write( '<!-- <a class=\"nav-elem\">cookies</a> -->\n' );
// document.write( '<!-- <a class=\"nav-elem\">blog</a> -->\n' );
// document.write( '</nav>' );

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

readTextFile('file://navbar.html');

// fetch("navbar.html")
//   .then((response) => response.html())
//   .then((data) => console.log(data));
