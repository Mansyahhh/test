'use client';
import layout from '@/app/layout';
import React from 'react';
import 'tailwindcss/tailwind.css';

const LoginPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Logic untuk menangani login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input type="password" id="password" name="password" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
