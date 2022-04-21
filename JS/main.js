
// Slider
$(document).ready(function(){$('.bxslider').bxSlider({
    mode:"fade",
    captions: false,
    responsive:true,
    slideWidth: 1200,
    pager:true});
//Posts
var posts= [{title: "Prueba de titulo 1", 
            date:'Publicado el '+ moment().date() + " de " + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content:'There is no one who loves pain itself,who seeks after it and wants to have it, simply because it is pain ...Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain. '},
            {title: "Prueba de titulo 2", 
            date:'Publicado el '+ moment().date() + " de " + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content:'There is no one who loves pain itself,who seeks after it and wants to have it, simply because it is pain ...Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain. '},
            {title: "Prueba de titulo 3", 
            date: 'Publicado el '+ moment().date() + " de " + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content:'There is no one who loves pain itself,who seeks after it and wants to have it, simply because it is pain ...Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain. '},
            {title: "Prueba de titulo 4", 
            date:'Publicado el '+ moment().date() + " de " + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content:'There is no one who loves pain itself,who seeks after it and wants to have it, simply because it is pain ...Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain. '}];

//Articulos 

posts.forEach((item,index) => {var post=`
<h2>
${item.title}
</h2>
<span class= "date">
${item.date}
</span>
<p>
${item.content}
</p>
<a href= "#" class="button-more">
 Leer m&aacute;s...
</a> 
</article>`;
$("#posts").append(post);
});
//Selector de tema
var theme= $("#theme");
$("#to-green").click(function(){theme.attr('href','CSS/green.css');});
$("#to-red").click(function(){theme.attr('href','CSS/red.css');});
$("#to-blue").click(function(){theme.attr('href','CSS/blue.css');});
});
//Scroll automático
$(".subir").click(function(e){e.preventDefault();
$('html,body').animate({scrollTop:0},500)});









