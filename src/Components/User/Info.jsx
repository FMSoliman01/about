import React from 'react'

function Info() {
  return (
    <div className="" id="account-info">
    <div className="card-body  pb-2 ">
      <div className="form-group">
        <label className="form-label">Bio</label>
        <textarea className="form-control" rows={3} defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus."} />
      </div>
      <div className="form-group">
        <label className="form-label">Birthday</label>
        <input type="date" className="form-control" defaultValue="May 3, 1995" />
      </div>
      <div className="form-group m-0">
        <div><label className="form-label me-5">Country </label>
        <select className="custom-select me-5">
          <option>USA</option>
          <option >Canada</option>
          <option selected>Egypt</option>
          <option>UK</option>
          <option>Germany</option>
          <option>France</option>
        </select>

        <label className="form-label me-5">City</label>
        {/* <input type='text' className='form-control' name='city' defaultValue='your city'/> */}
        <select className="custom-select">
          <option>Cairo</option>
          <option >Canada</option>
          <option selected>Aswan</option>
          <option>UK</option>
          <option>Germany</option>
          <option>France</option>
        </select>
      </div>
        
        
      </div>
    </div>
    <hr className="border-light m-0" />
    <div className="card-body pb-2">
      {/* <h6 className="mb-2">Contacts</h6> */}
      <div className="form-group">
        <label className="form-label">Phone</label>
        <input type="text" className="form-control" defaultValue="+0 (123) 456 7891" />
      </div>
      {/* <div className="form-group">
        <label className="form-label">Website</label>
        <input type="text" className="form-control" defaultValue />
      </div> */}
    </div>
  </div>
  )
}

export default Info