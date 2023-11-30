import React from 'react'
 
const NotFoundPage = () => {
   
    return (
        <div className='container d-flex bg-light mt-4 rounded-3 justify-content-around'>
            <div className="image-side">
                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/search-result-not-found-4721381-3927962.png" alt="" />
            </div>
            <div className="text-side   w-50">
                <h1> Page Not Found </h1>
                <p> Seems like you have lost your ways here <br /> Please get back to home page  </p>
                <button className='btn btn-success rouned'>Home Page </button>
                <img className='img-fluid' src="https://lux-case.dk/media/catalog/product/cache/473e2072a4aa8dcff30c6c0e89195f31/l/c/lcw01-94-101-4.jpg" alt="This is the Apple Watch" />
            </div>


        </div>
    )
}

export default NotFoundPage