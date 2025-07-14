import React from 'react'
import Navigation from './Navigation'

const PhotoNav = () => {
  return (
    <div>
      <Navigation />

       <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.pinimg.com/736x/54/94/64/54946459b88855df822150ad8e01598d.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/736x/9e/35/a7/9e35a72778b3750cd959ba7319940afe.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/736x/11/a0/13/11a013cfeac023f5e970865b70c68275.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
<div className="container">
  <div className="row g-3 p-5">
    <div className="col col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

        <div class="card" >
  <img src="https://i.pinimg.com/736x/48/8d/e3/488de33b52ccf5c69bfae3185a34886c.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <a href="#" class="btn btn-primary">Download Image</a>
  </div>
</div>


    </div>
    <div className="col col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

    <div class="card" >
  <img src="https://i.pinimg.com/736x/b4/8e/e7/b48ee735a798f8dd1e72cf645ef29062.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <a href="#" class="btn btn-primary">Download Image</a>
  </div>
</div>
    </div>
    <div className="col col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

<div class="card" >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UGUf733Bs2DTFnraa6XJ6g1Vj_yXT9hsIp8VkncoQCpg1LI4XtReMU0CteaoAu-crqA&usqp=CAU" class="card-img-top" alt="..."/>
  <div class="card-body">
    <a href="#" class="btn btn-primary">Download Image</a>
  </div>
</div>



  <div className="row g-3 p-5">
    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.pinimg.com/736x/54/94/64/54946459b88855df822150ad8e01598d.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/736x/9e/35/a7/9e35a72778b3750cd959ba7319940afe.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/736x/11/a0/13/11a013cfeac023f5e970865b70c68275.jpg" class="d-block w-100" alt="..."/>
      
    </div>
  </div>
</div>
</div>
</div>



    </div>
    
  </div>
</div>


    </div>
  )
}

export default PhotoNav