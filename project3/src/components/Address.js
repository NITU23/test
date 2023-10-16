import React from 'react'

const Address = () => {
  return (
    <div>
      <div className="row mt-3 mx-5" >
        <div className="col-md-9 justify-content-center">
          <div className="card card-custom pb-4">
            <div className="card-body mt-0 mx-5">
              <div className="text-center mb-3 pb-2 mt-3">
                <h4 style={{ color: '#495057' }}>Delivery Address</h4>
              </div>
              <form className="mb-0">
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input  required type="text" id="form9Example1" className="form-control input-custom" />
                      <label className="form-label" for="form9Example1">First name</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input required type="text" id="form9Example2" className="form-control input-custom" />
                      <label className="form-label" for="form9Example2">Last name</label>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input required type="text" id="form9Example3" className="form-control input-custom" />
                      <label className="form-label" for="form9Example3">City</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input required type="text" id="form9Example4" className="form-control input-custom" />
                      <label className="form-label" for="form9Example4">Zip</label>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input  required type="text" id="form9Example6" className="form-control input-custom" />
                      <label className="form-label" for="form9Example6">Address</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input required type="email" id="typeEmail" className="form-control input-custom" />
                      <label className="form-label" for="typeEmail">Email</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input required type="phone" id="typephone" className="form-control input-custom" />
                      <label className="form-label" for="typePhone">Phone</label>
                    </div>
                  </div>
                </div>

                <div className="float-end ">
                  <button type="submit" className="btn btn-primary btn-rounded"
                    style={{ background: '#0062CC ' }}>Add Address</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address