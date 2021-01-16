
function playMusic(){

    //--------- Obtenemos todos los tracks que se han renderizado en pantalla ---------
let array = Array.from(containerAlbums.children)

      //--------- recorremos cada track para saber en que botton 'Play' se hizo click ---------
    for(item in array){

        buttonplaytrack = array[item].children[2].children[0]

        buttonplaytrack.addEventListener('click',(e)=>{


            //--------- obtenemos el .mp3 del track seleccionado ---------
            audio = (e.target).parentElement.parentElement.children[3]
            audio = audio.getAttribute('src')

             //--------- obtenemos el img del track seleccionado ---------
             img = (e.target).parentElement.parentElement.children[0].children[0]
             img = img.getAttribute('src')

            //--------- obtenemos el titulo del track seleccionado ---------
            title = (e.target).parentElement.parentElement.children[1].children[0]
            title = title.textContent

             //--------- obtenemos el artista del track seleccionado ---------
             artist = (e.target).parentElement.parentElement.children[1].children[1]
             artist = artist.textContent

            //--------- lo reproducimos en el elemento audio general ---------
            elementaudio.setAttribute('src',audio)
            elementaudio.play()


            let folderPlayer = document.getElementById('album-player-reproduc');
            let titleTrack = document.querySelector('.title-song')
            let artistTrack = document.querySelector('.artist-song') 
        
            folderPlayer.setAttribute('src',img)
            titleTrack.textContent = title
            artistTrack.textContent = artist

        })

    }

   
}