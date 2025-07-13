import React from 'react'
import Navigation from './Navigation'

const Delete = () => {
  return (
    <div>
        <Navigation />
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3 p-5">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="label form-label">Image Name</div>
                            <input type="text" className="form-control" />
                        </div>
                         <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <br></br><button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Delete