import React, { useState } from 'react';
import { signup } from '../api/auth';



export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (formData.name.length < 20 || formData.name.length > 60) {
      newErrors.name = 'Name must be between 20 and 60 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }


    if (formData.address.length > 400) {
      newErrors.address = 'Address cannot exceed 400 characters.';
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be 8-16 chars, include at least one uppercase letter and one special character.';
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

    console.log('Signup data is valid:', formData);

    const handleSubmit = async e => {
  e.preventDefault();

  try {
    const res = await signup(formData); 
    alert('Signup successful! Please login.');
  } catch (err) {
    alert(err.message);
  }
};



  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Signup</h2>

      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="block w-full mb-1 border px-2 py-1"
        placeholder="20-60 chars"
      />
      {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

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

      <label>Address</label>
      <textarea
        name="address"
        value={formData.address}
        onChange={handleChange}
        maxLength={400}
        required
        className="block w-full mb-1 border px-2 py-1"
        placeholder="Max 400 characters"
      />
      {errors.address && <p className="text-red-600 text-sm">{errors.address}</p>}

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        className="block w-full mb-1 border px-2 py-1"
        placeholder="8-16 chars, 1 uppercase, 1 special char"
      />
      {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
        Sign Up
      </button>
    </form>
  );
}
