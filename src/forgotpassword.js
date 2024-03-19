import React, { useState } from 'react';
import './forgotpassword.css';

function ForgotPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');

  const checkPasswordStrength = (password) => {
    let strength = 'weak';
    if (password.length > 5 && /\d/.test(password)) strength = 'medium';
    if (password.length > 6 && /[^\w\s]/gi.test(password)) strength = 'strong';
    return strength;
  };

  const passwordsMatch = password && confirmPassword && password === confirmPassword;
  const passwordStrength = checkPasswordStrength(password);

  return (
    <div id="box">
      <h1>Change Password <span>choose a good one!</span></h1>
      <form id="myform-search" autoComplete="off">
        <p>
          <input
            type={passwordType}
            placeholder="Enter Password"
            id="p"
            className="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          
          {/* Button with aria-label for accessibility but no visible text */}
          <button 
            type="button" 
            className="unmask" 
            onClick={() => setPasswordType(passwordType === 'password' ? 'text' : 'password')}
            aria-label={passwordType === 'password' ? 'Show password' : 'Hide password'}
          >
          </button>
        </p>
        <p>
          <input
            type="password"
            placeholder="Confirm Password"
            id="p-c"
            className="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <button type="button" onclick="">Update</button>
          <div id="strong" className={passwordStrength}><span>{passwordStrength}</span></div>
          <div id="valid">{passwordsMatch ? 'Passwords Match' : "Passwords Don't Match"}</div>
          <small>Must be 6+ characters long and contain at least 1 upper case letter, 1 number, 1 special character</small>
        </p>
      </form>
    </div>
  );
}

export default ForgotPassword;