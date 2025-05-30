import React, { useState } from 'react';
import { login } from '../api/auth';



export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    console.log('Login data is valid:', formData);
  
    const handleSubmit = async e => {
  e.preventDefault();

  try {
    const data = await login(formData); 
    localStorage.setItem('token', data.token); 
    localStorage.setItem('user', JSON.stringify(data.user)); 
    alert('Login successful!');
  } catch (err) {
    alert(err.message);
  }
};




  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Login</h2>

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="block w-full mb-1 border px-2 py-1"
        placeholder="example@mail.com"
      />
      {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        className="block w-full mb-1 border px-2 py-1"
        placeholder="Your password"
      />
      {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}

      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-2">
        Login
      </button>
    </form>
  );
}
