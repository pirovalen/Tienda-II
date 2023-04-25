<template>
 <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="../assets/3.jpeg" width="1200" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5>Aprende hoy</h5>
            <p>Los mejores cursos para ti</p>
        </div>
    </div>
    <div class="carousel-item">
        <img src="../assets/2.jpg" width="1200" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5>Aprende hoy</h5>
            <p>Los mejores cursos para ti</p>
        </div>
    </div>
    <div class="carousel-item">
        <img src="../assets/3.jpeg" width="1200" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5>Aprende hoy</h5>
            <p>Los mejores cursos para ti</p>
        </div>
    </div>
    </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
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
    </style>