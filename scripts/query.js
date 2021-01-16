
// caja de busqueda
    let search = document.getElementById('search-tracks');

// contenedor en donde se mostraran los resultador 
    let containerAlbums = document.getElementById('albumns-music');

// boton para buscar 
    let searchButton = document.getElementById('search-icon');

//Elemento 'audio' en donde se va a reproducir las cancion selecionada
    let elementaudio = document.getElementById('music-audio');
    


 //---------------
    search.addEventListener('keydown',(e)=>{
        e.key == 'Enter' ? searchButton.click() : null
    })



searchButton.addEventListener('click',()=>{
   
    //------Eliminar resultados existentes---------
    if(containerAlbums.children.length > 0 ){

        Array.from(containerAlbums.children).map((e)=>{
            containerAlbums.removeChild(e)
        })        
    }


    //------Obtenemos el valor a buscar---------
    valueSearch = search.value


    //------Hacemos la peticion con la API fetch---------
    if(valueSearch !== ''){
        fetch(`https://api.deezer.com/search?q=${valueSearch}`)
        .then(res=> res.json())
        .then(res=> showtrackScreen(res))
    }

})

