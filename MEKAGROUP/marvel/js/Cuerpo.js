
function Cargar(){
    $.getJSON("https://gateway.marvel.com/v1/public/comics?ts=1&format=comic&formatType=comic&dateDescriptor=thisMonth&orderBy=title&limit=20&offset=20&apikey=b5dd158dd0e856443db7fb726fbc6bc9&hash=80182fcb24c6426319114b9e34eafed6", function (data) {
    var cuerpo = '<div class="container">';
        cuerpo += '';
        cuerpo += ' <div class="row" id="Comics"> </div>';
        cuerpo += '</div>';
        jQuery.each(data, function (i, value) {
            if (i == "data") {
                jQuery.each(value, function (j, value1) {
                    if (j == "results") {
                        jQuery.each(value1, function (k, value2) {
                            cuerpo += '<div class="col-md-4">';
                            cuerpo += '     <div class= "card text-center">'
                            cuerpo += '       <div class= "card-header bg-dark textwhite text-white d-flex justify-content-between aling-items-center"> <br>'
                            cuerpo += '         <h7>' + value2.title + ' <br> <br>  PUBLICACION: ' + value2.dates[0].date.substr(0, 10) + '</h7> ';
                            cuerpo += '           <div class= "card-body">'
                            cuerpo += '           <a href="' + value2.urls[0].url + '">';
                            cuerpo += '            <img src="' + value2.thumbnail.path + '.' + value2.thumbnail.extension + '"widt="200" height="200"> </a> <br>';
                            cuerpo += '           </div>';
                            cuerpo += '       </div>';
                            cuerpo += '      <div class="card-body d-flex justify-content-between align-items-center">';
                            cuerpo += '        <button class="btn btn-dark"><i class="far fa-thumbs-up"></i><span class="badge badge-like" >0</span></button> <td style="right:inherit"> ';
                            cuerpo += '        <button  class="btn btn-dark"><i class="far fa-thumbs-down"></i><span class="badge badge-like" >0</span></button>';
                            cuerpo += '       </div>';
                            cuerpo += '    </div>';
                            cuerpo += '</div>';
                        });
                    }
                });
                $('#Comics').append(cuerpo);
                    $(".btn-dark").click(function() {
                        var badge = $(this).find('.badge');
                            count = Number(badge.text());
                            badge.text(count + 1);
                    });
            }
        });
    
    })
}





