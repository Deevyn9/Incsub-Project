import React from 'react';
import Eye from "./images/show.png";

const Form = () => {
    return (
        <div>
            <div className="form-side">
                <h6>Step 1 of 3 
                    <div className="dots">
                        <div className="dot first"></div>
                        <div className="dot"></div>    
                        <div className="dot"></div>
                    </div> 
                </h6>
                <div className="form">
                <form action="" >
                    <h1>Let's set up your account</h1>
                    <p>Already have an account <span className="sign" disabled="enabled" >Sign in</span></p>
                    <input type="text" name="Name" placeholder='Your Name' disabled="disabled" />
                    <input type="email" name="Email" placeholder='Email address' disabled="disabled" />
                    <select name="dropdown" disabled="disabled" >
                        <option >I would describe my user type as?</option>
                    </select>

                    <div className="container">
                        <input type="password" name="password" placeholder='Password' disabled="disabled" className='pass'  />
                        <img src={Eye} alt="" className='eye' />
                    </div>
                    <p className='minimum'>Minimum 8 characters</p>

                    <button>Next</button>
                </form>
                <p className='caution'>By clicking the "Next" button, you agree to creating a free account, and to <span className="toc">Terms of service</span> and <span className="toc">Privacy Policy</span></p>
                </div>
            </div>
        </div>
    )
}

export default Form;
