import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div>
       <section class="vh-100 section" style={{ backgroundColor: '#508bfc' }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                <div class="card-body p-5 text-center">

                  <h3 class="mb-5">Sign Up</h3>

                  <div class="form-outline mb-4">
                    <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
                    <label class="form-label" for="typeEmailX-2">Email</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
                    <label class="form-label" for="typePasswordX-2">Password</label>
                  </div>

                  <button class="btn btn-primary btn-lg btn-block" type="submit">Sign Up</button>

                  <hr class="my-4" />
                 <h5>Already have a account? Click to <Link to='/login'><span>Login</span></Link> </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> </div>
  )
}

export default Signup