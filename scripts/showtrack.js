

const showtrackScreen=(music)=>{
   
    //------Eliminamos tracks repetidos (el JSON viene con canciones duplicadas)---------
    let hash = {};
    newMusicArray = (music.data).filter(function(current) {
    let exists = !hash[current.title];
    hash[current.title] = true;
    return exists;
    });

    //--------- El nuevo array sin objetos duplicados lo guardamos en un variable---------
    let tracks = newMusicArray



  //--------- recorremos cada track y lo imprimimos en pantalla---------

    let img,title,artist,song;

    tracks.map((track)=>{
        
        //---------datos del track---------
        img = track.album.cover_xl
        title = track.title
        artist = track.artist.name
        song = track.preview


        let fragmentALbums = document.createDocumentFragment();

        //---------item track---------
        let itemAlbum = document.createElement('div');
        itemAlbum.classList.add('album-music-item');
    

        //---------cover del track---------
        let coverAlbum = document.createElement('div');
        coverAlbum.classList.add('album-music-cover');

        let imgAlbum = document.createElement('img');
        imgAlbum.setAttribute('src', img);

        coverAlbum.appendChild(imgAlbum);



        //---------titulo y artista del track---------
        let descriptionMusic = document.createElement('div');
        descriptionMusic.classList.add('album-description-result')
        
        //---------titulo---------
        let titleAlbum = document.createElement('p');
        titleAlbum.classList.add('album-title')
        titleAlbum.textContent =  title;


        //---------artista---------
        let artistAlbum = document.createElement('p');
        artistAlbum.classList.add('album-artist');
        artistAlbum.textContent = artist;
    
        descriptionMusic.appendChild(titleAlbum)
        descriptionMusic.appendChild(artistAlbum)


         //--------- boton play , boton opciones ---------
        let optionsMusic = document.createElement('div');
        optionsMusic.classList.add('album-option-result');

        let play = document.createElement('i');
        play.classList.add('fas' ,'fa-play', 'button-play-cover');
    
        let options = document.createElement('i');
        options.classList.add('fas', 'fa-ellipsis-v', 'button-options-cover');


        optionsMusic.appendChild(play)
        optionsMusic.appendChild(options)

         
        //--------- audio del track ---------
        let audio  = document.createElement('audio')
        audio.setAttribute('src',song)


        //--------- guardamos todos los elementos dentro del fragment ---------
        fragmentALbums.appendChild(coverAlbum);
        fragmentALbums.appendChild(descriptionMusic);
        fragmentALbums.appendChild(optionsMusic);
        fragmentALbums.appendChild(audio);
    

        //------------------
        itemAlbum.appendChild(fragmentALbums);


         //---------Agregamos el item track a la pantalla---------
        containerAlbums.appendChild(itemAlbum);
    })


    playMusic(img,title,artist);

}
