import React, { useState } from 'react';
import './Sign_Up.css';

const Sign_Up = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? '' : 'Name is required';
    tempErrors.phone = formData.phone.length === 10 ? '' : 'Phone number must be 10 digits';
    tempErrors.email = /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Email is not valid';
    tempErrors.password = formData.password ? '' : 'Password is required';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form is valid');
      // Submit form data
    } else {
      console.log('Form is invalid');
    }
  };

  return (
    <div className="container">
      <div className="signup-grid">
        <div className="signup-text">
          <h1>Sign Up</h1>
        </div>
        <div className="signup-text1" style={{ textAlign: 'left' }}>
          Already a member? <span><a href="/login" style={{ color: '#2190FF' }}> Login</a></span>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required className="form-control" placeholder="Enter your name" aria-describedby="helpId" value={formData.name} onChange={handleChange} />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" name="phone" id="phone" required className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" value={formData.phone} onChange={handleChange} />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId" value={formData.email} onChange={handleChange} />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId" value={formData.password} onChange={handleChange} />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
              <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light" onClick={() => setFormData({ name: '', phone: '', email: '', password: '' })}>Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign_Up;