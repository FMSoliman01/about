import React from 'react'
import { Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './User.scss'
import General from './General'
import UserBar from './UserBar';
import ChangePass from './ChangePass';
import SocialLinks from './SocialLinks';
import Connection from './Connection';
import Info from './Info';
import Notification from './Notification'
function UserProfile() {
  return (
    <>
    
    <div className="container light-style flex-grow-1  container-p-y  py-2 bachground ">
     <div className="card overflow-hidden ">
    <div className="row no-gutters row-bordered row-border-light    ">
    <UserBar/>
    <div className="col-md-9">
        <div className="tab-content">
    <Routes>  
    <Route path="/" element={<General/>} />
    <Route path="general" element={<General/>} />
    <Route path="change-password" element={<ChangePass/>} />  
    <Route path="info" element={<Info/>} />
    <Route path="social-links" element={<SocialLinks/>} />
    <Route path="connections" element={<Connection/>} />
    {/* <Route path="/notifications" element={<Notification/>} /> */}

    </Routes>
        
      </div>
      </div>
        </div>
        </div>
        <div className="text-right mt-3">
           <button type="button" className="btn btn-dark">Save changes</button>&nbsp;
           <button type="button" className="btn btn-default">Cancel</button>
          </div>
          </div>
        </>
  )
}

export default UserProfile