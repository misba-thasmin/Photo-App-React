import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">GALAXY ALBUM</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="http://localhost:3000/Home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="http://localhost:3000/Add">ADD</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="http://localhost:3000/Search">Search</Link>

        </li>
        <li class="nav-item">
          <Link class="nav-link" to="http://localhost:3000/Delete">Delete</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="http://localhost:3000/View">View</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navigation