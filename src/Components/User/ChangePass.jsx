import React, { useState } from 'react';

function ChangePass() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
};
  return (
    <div className="" id="account-change-password">
   <div className="card-body pb-2">
            <div className="form-group">
                <label className="form-label">Current password</label>
                <div className="input-group ">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        className="form-control myinput" 
                        placeholder="Enter your current password" 
                    />
                    <div className="input-group-append">
                        <button 
                            className="btn btn-outline-secondary eye" 
                            type="button" 
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                        </button>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label className="form-label">New password</label>
                <div className="input-group">
                <input 
                        type={showPassword ? "text" : "password"} 
                        className="form-control myinput" 
                        placeholder="Enter your New password" 
                    />
                <div className="input-group-append">
                        <button 
                            className="btn btn-outline-secondary eye" 
                            type="button" 
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                        </button>
                    </div>
            </div>
            </div>
            <div className="form-group">
                <label className="form-label">Repeat new password</label>
                <div className="input-group">
                <input 
                        type={showPassword ? "text" : "password"} 
                        className="form-control myinput" 
                        placeholder="Enter your current password" 
                    />
                    <div className="input-group-append">
                        <button 
                            className="btn btn-outline-secondary eye" 
                            type="button" 
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                        </button>
                    </div> 
                    </div>
            </div>
        </div>
        </div>
    )
    }


export default ChangePass;