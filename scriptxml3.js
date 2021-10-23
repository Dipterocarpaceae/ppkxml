var xhttp3 = new XMLHttpRequest();
xhttp3.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        consume_xml3();
    }
};
xhttp3.open("GET", "https://www.cnnindonesia.com/ekonomi/rss", true);
xhttp3.send();


function consume_xml3() {
var xmlDoc3 = xhttp3.responseXML;
var berita3 = xmlDoc3.getElementsByTagName('item');
    for (var i = 0; i < 3; i++) {
        document.getElementsByClassName("card-text")[i + 6].innerHTML = berita3[i].getElementsByTagName("title")[0].childNodes[0].data;

        var link3 = document.getElementsByClassName("btn btn-info")[i + 6];
        var att3 = document.createAttribute("href");
        att3.value = berita3[i].getElementsByTagName("link")[0].innerHTML;
        link3.setAttributeNode(att3);

        var ggg3 = document.getElementsByClassName("card-img-top")[i + 6];
        var gbr3 = document.createAttribute("src");
        gbr3.value = berita3[i].getElementsByTagName("enclosure")[0].getAttribute("url");
        ggg3.setAttributeNode(gbr3);
    }
}