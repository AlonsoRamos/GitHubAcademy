//Create a JSON Object my products information
$(document).ready(function() {
    $("#DynamicHTML").append(buildMyProduct(MyCatalogData));
});

//Dynamic build your collection
function buildMyProduct(obj) {
    var html = "";
    $.each(obj, function(element, object) {
        html += "<div class='col-md-2 thumbnail'>";
        html += "<div><a href='Detail2.html?id=" + object.id + "'>" + object.title + "</a></div>";
        html += "<div><img class='Catalog' src='" + object.imgUrl + "' /></div>";
        html += "<div>" + object.description + "</div></div>";
    });
    return html;
}