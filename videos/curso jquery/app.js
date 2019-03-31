$(document).ready(function () {
    //$ = Indica que se va a empeazr a trabajar con jquery
    // console.log('this app is working') // codigo javascript, tambien funciona con jquery


    //Example number 1
    // $('h1').html('new text changed for h1 the html') // cambia todos los textos h1 en el index
    //$('.display-4').html('from class')  // cambia el texto de un h1 pero las que tienen ese nombre de clase en este caso .display-4
    $('#idh1').html('change label where id is idh1 ')// cambia los textos de los h1 con ese id

    //Example number 2
    // document.querySelector('h1').innerHTML = 'form from h1 javascript'; // forma desde javascript
    // document.querySelector('.display-3').innerHTML = 'form from class javascript';
    document.querySelector('#idh2').innerHTML = 'form from id javascript';

    //Example number 3
    //$('.container h1:first').html('change text from container and label h1'); // forma de seleccionar desde container y cada uno se sus h1
    //$('.container h1:last').html('change text from container and label h1'); 

    //Example number 4  
    $('#idh3').addClass('text-danger'); // agregando clases en este caso el text-danger = texto rojo
    $('#idh3').removeClass('display-4');// removiendo clases ya asignadas en este caso display-4 que esta asignada en el index

    //Example number 5
    $('#content3').append('<h1>This text is  from jquery with .append for the end</h1>');// agregando elementos a un div con id al final con append
    $('#content3').prepend('<h1>This text is  from jquery with .append for the start</h1>');// agregando elementos a un div con id al inicio prepend

    //Example number 6
    $('#colorBlue').css({ color: 'blue', background: 'black', padding: '20px' }); //Agregando propiedades css por jquer
    $('#colorRed').remove(); // removiendo clases css con remove NO aparece en el inspector de elementos
    $('#colorGreen').hide();  // removiendo clases css con remove SI aparece en el inspector de elementos
    $('img').attr('src', 'https://i.blogs.es/f14ba6/vengadores-endgame/1366_2000.jpg'); // agregando imagen desde jquery con attr, solo para img 
    $('img:last').attr("width", "500px"); //cambiando dimenciones a la ultima imagen

    //Example number 7
    var paragraph = $('#result p');  // en esta variable estaria guardado el aprrafo
    $('#btnAdd').click(function () { //detecta el click y dispara un evento en este caso agrandar texto, en este caso agrega con addclass
        paragraph.addClass('display-4');
    })
    $('#btnRemove').click(function () {  // remueve la clase antes puesta 
        paragraph.removeClass('display-4');
    })
    $('#bntToggle1').click(function () {  // remueve la clase antes puesta 
        paragraph.toggleClass('display-4');
    })

    //Example number 8
    $('#Formulario').submit(function(event){
        event.preventDefault(); // prevenir lo que viene por defecto en el navegador ejemplo el metodo get
        var TextUser =$('#Nombre').val();
        alert(TextUser).val;
          })


    //Example number 9
    var result1 = $('#result2');  // en esta variable estaria guardado el aprrafo
    $('#btnShow').click(function () { //detecta el click y dispara un evento en este caso agrandar texto, en este caso agrega con addclass
        result1.show(1000); // el hide se calcula en milisegundos 
    })
    $('#btnHide').click(function () {  //Muestra con el show de una forma dinamica 
        result1.hide(1000); 
    })
    $('#btnToggle').click(function () {  // muestra y oculta
        result1.toggle(1000); 
    })


    //Example number 10
    //var result = $('#result2');  // en esta variable estaria guardado el aprrafo    
    $('#btnFadeIn').click(function () { //detecta el click y dispara un evento en este caso agrandar texto, en este caso agrega con addclass
        result1.fadeIn(1000); // el hide se calcula en milisegundos, s epuede usar 'fast', 'slow'
    })
    $('#btnFadeOut').click(function () {  //Muestra con el show de una forma dinamica 
        result1.fadeOut(1000); 
    })
    $('#btnFadeToggle').click(function () {  //Muestra con el show de una forma dinamica 
        result1.fadeToggle(1000); 
    })
    
   
    //Example number 11
    var result3 = $('#result3');  // en esta variable estaria guardado el aprrafo
    $('#btnAnimation').click(function () { //detecta el click y dispara un evento en este caso agrandar texto, en este caso agrega con addclass
        result3.animate({
            left: '600px',
            opacity: '0.5',
            height: '+=150px',
            width: '+=150px'
        }, 5000, function () {
            result3.animate({
                left: '130px',
                opacity: '1',
                height: '-=150px',
                width: '-=150px'
            }, 1000)

    }); // el animate se calcula en milisegundos, s epuede usar 'fast', 'slow'
       }) 
 



});