$(".Liste").hover(function(){
    $('#sous_liste').show();
},function(){
    $('#sous_liste').hide();
});

$(".Liste_voyage").hover(function(){
    $('#sous_liste_voyage').show();
},function(){
    $('#sous_liste_voyage').hide();
});

var album =     ['image/6.jpg',
                'image/7.jpg',
                'image/8.jpg',
                'image/9.jpg',
                'image/10.jpg',
                'image/11.jpg']

var gauche = document.getElementById('fleche_gauche')
var droite = document.getElementById('fleche_droite')
var image  = document.getElementById('images')

var i = 0

gauche.addEventListener('click', function(){

    i--

    if(i < 0){

        i = 5;

    }

    image.src = album[i]

})

droite.addEventListener('click', function(){

    i++

    if(i > 5){
        
        i = 0;

    }

    image.src = album[i]
})