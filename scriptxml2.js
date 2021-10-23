var xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        consume_xml2();
    }
};
xhttp2.open("GET", "https://www.cnnindonesia.com/ekonomi/rss", true);
xhttp2.send();


function consume_xml2() {
var xmlDoc2 = xhttp2.responseXML;
var berita2 = xmlDoc2.getElementsByTagName('item');
    for (var i = 1; i < 8; i+=3) {
        document.getElementsByClassName("card-text")[i].innerHTML = berita2[i].getElementsByTagName("title")[0].childNodes[0].data;

        var link2 = document.getElementsByClassName("btn btn-info")[i];
        var att2 = document.createAttribute("href");
        att2.value = berita2[i].getElementsByTagName("link")[0].innerHTML;
        link2.setAttributeNode(att2);

        var ggg2 = document.getElementsByClassName("card-img-top")[i];
        var gbr2 = document.createAttribute("src");
        gbr2.value = berita2[i].getElementsByTagName("enclosure")[0].getAttribute("url");
        ggg2.setAttributeNode(gbr2);
    }
}