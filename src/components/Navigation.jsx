import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://images.scalebranding.com/6c127d2f-b0c6-487d-acf5-647d84768059.png" alt="Logo" width="50" height="30" class="d-inline-block align-text-right"/>
    </a>
    
    <Link class="navbar-brand" to="#">GALAXY ALBUM</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Add">ADD</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Search">Search</Link>

        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Delete">Delete</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/View">View</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navigation