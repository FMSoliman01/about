import React from 'react'

function Connection() {
  return (
    <div className="" id="account-connections">
 
    <hr className="border-light m-0" />
    <div className="card-body">
      <h5 className="mb-2">
        <a href="" className="float-right text-muted text-tiny"><i className="ion ion-md-close" /> Remove</a>
        <i className="ion ion-logo-google text-google" />
        You are connected to Google:
      </h5>
      <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f9979498818e9c9595b994989095d79a9694">[email&nbsp;protected]</a>
    </div>
    <hr className="border-light m-0" />
    <div className="card-body">
      <button type="button" className="btn btn-facebook">Connect to
        <strong> Facebook</strong></button>
    </div>
   
    <div className="card-body">
      <button type="button" className="btn btn-instagram">Connect to
        <strong> Instagram</strong></button>
    </div>
    <hr className="border-light m-0" />
    <div className="card-body">
      <button type="button" className="btn btn-twitter px-4">Connect to
        <strong> Twitter</strong></button>
    </div>
  </div>
  )
}

export default Connection