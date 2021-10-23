var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        consume_xml();
    }
};
xhttp.open("GET", "https://www.cnnindonesia.com/nasional/rss", true);
xhttp.send();


function consume_xml() {
var xmlDoc = xhttp.responseXML;
var berita = xmlDoc.getElementsByTagName('item');

    for (var i = 0; i < 7; i+=3) {
        document.getElementsByClassName("card-text")[i].innerHTML = berita[i].getElementsByTagName("title")[0].childNodes[0].data;

        var link = document.getElementsByClassName("btn btn-info")[i];
        var att = document.createAttribute("href");
        att.value = berita[i].getElementsByTagName("link")[0].innerHTML;
        link.setAttributeNode(att);

        var ggg = document.getElementsByClassName("card-img-top")[i];
        var gbr = document.createAttribute("src");
        gbr.value = berita[i].getElementsByTagName("enclosure")[0].getAttribute("url");
        ggg.setAttributeNode(gbr);
    }
}