<template>
<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/3.jpeg" class="d-block w-100" alt="">
      <div class="carousel-caption d-none d-md-block">
        <h5>Aprende hoy</h5>
        <p>Los mejores cursos para ti</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/2.jpeg" class="d-block w-100" alt="">
      <div class="carousel-caption d-none d-md-block">
        <h5>Aprende hoy</h5>
        <p>Los mejores cursos para ti</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/4.jpeg" class="d-block w-100" alt="">
      <div class="carousel-caption d-none d-md-block">
        <h5>Aprende hoy</h5>
        <p>Los mejores cursos para ti</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>
    
    
    <script>


    export default {
    name: "Home-View",
      
    }
    
    </script>
    
    <style>
.carousel-item{
    height: 600px;
}
.carousel-item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.carousel-caption{
    background-color: rgba(0, 0, 0, 0.385);
    border-radius: 1rem;
    max-width: 500px;
    margin-inline: auto;
    margin-bottom: 150px;
}
.carousel-item h5{
    font-family: 'Montserrat', sans-serif;
    font-size: 42px;
}
.carousel-item p{
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
}
    .titulo{
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    }
    .subtitulo{
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    padding-inline: 15rem ;
    }
    </style>