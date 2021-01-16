

window.addEventListener('DOMContentLoaded',()=>{
    fetch('https://api.deezer.com/search/artist?q=rock')
    .then(res => res.json())
    .then(res => bannerShow(res.data))
} )


function bannerShow(bannermusic){

    let containerBanner = document.querySelector('.container-banner')
    let bannerImg = document.getElementById('banner-img')
    let nameArtist = document.getElementById('banner-artist-name')
    let nameArtistdescription = document.getElementById('banner-artist-name-description')
    let fanDescription = document.getElementById('fan-description')

    total = bannermusic.length
    numberRandom = Math.floor(Math.random() * ((total+1)-1)+1);


    let img = bannermusic[numberRandom].picture_xl
    let name = bannermusic[numberRandom].name
    let fans = bannermusic[numberRandom].nb_fan

    containerBanner.style.backgroundImage = `url(${img})`
    bannerImg.setAttribute('src',img)
    nameArtist.textContent = name
    nameArtistdescription.textContent  = name
    fanDescription.textContent = fans
}