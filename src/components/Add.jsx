import React from 'react'
import Navigation from './Navigation'

const Add = () => {
  return (
    <div>
        <Navigation />
<div className="container">
    <div className="row">

        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3 p-5">
                <h1>Galaxy Album</h1>
                <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label className="form-label">Image ID</label>
                <input type="text" className="form-control" />

                </div>
                <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    
                    <label className="form-label">ID</label>
                    <input type="text" className="form-control" />


                </div>
                <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label className="form-label">Title</label>
                    <textarea name="" id="" className="form-control"></textarea>

                </div>
                <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label className="form-label">URL</label>
                    <input type="text" className="form-control" />

                </div>
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-primary">SUBMIT</button>

                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Add