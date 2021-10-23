var xhttp4 = new XMLHttpRequest();
xhttp4.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        consume_xml4();
    }
};
xhttp4.open("GET", "https://www.vice.com/id/rss?locale=id_id", true);
xhttp4.send();


function consume_xml4() {
var xmlDoc4 = xhttp4.responseXML;
var berita4 = xmlDoc4.getElementsByTagName('item');
    for (var i = 2; i < 9; i+=3) {
        document.getElementsByClassName("card-text")[i].innerHTML = berita4[i].getElementsByTagName("title")[0].childNodes[0].data;

        var link4 = document.getElementsByClassName("btn btn-info")[i];
        var att4 = document.createAttribute("href");
        att4.value = berita4[i].getElementsByTagName("link")[0].innerHTML;
        link4.setAttributeNode(att4);

        var ggg4 = document.getElementsByClassName("card-img-top")[i];
        var gbr4 = document.createAttribute("src");
        gbr4.value = berita4[i].getElementsByTagName("enclosure")[0].getAttribute("url");
        ggg4.setAttributeNode(gbr4);
    }
}