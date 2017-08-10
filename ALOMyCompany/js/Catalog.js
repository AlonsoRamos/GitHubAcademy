//Create a JSON Object my products information

var myCatalog = 
   {    
    "MyCollection": {
        "Product1" : 
        {
          "id" : 0,
          "title" : "myTitle0",
          "description" : "myDescription",
          "imgUrl" : "../images/img01.jpg"
        },
        "Product2" : 
        {
          "id" : 1,
          "title" : "myTitle1",
          "description" : "myDescription",
          "imgUrl" : "../images/img02.jpg"
        },
        "Product3" : 
        {
          "id" : 2,
          "title" : "myTitle2",
          "description" : "myDescription",
          "imgUrl" : "../images/img03.jpg"
        }
    }
}  
		
$(document).ready(function () {
  //handler for .ready() called.
  //var test = myCatalog;
  //alert("Hello");

  //$(myCatalog.MyCollection).each(function (index){
    //console.log(index + ": " + $(this).text());
  //});
  $("#DynamicHTML").append(buildMyProduct());

});

function buildMyProduct()
{ 
  var html = "<div class='Catalog ProductItem'>";
  var html = html + "<div>" + myCatalog.MyCollection.Product1.title+"</div>"
  var html = html + "<div><img class= 'Catalog' src='" + myCatalog.MyCollection.Product1.imgUrl + "' /></div>";
  var html = html + "<div>"+ myCatalog.MyCollection.Product1.description+"</div>";
  //var html = + html + "<div>" + MyCatalog.MyCollection.Product1.title+"</div>";
  return html;
}