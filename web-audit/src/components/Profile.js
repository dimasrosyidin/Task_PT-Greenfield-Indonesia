import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Profile() {
  const [profile, setProfile] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    photo: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const navigate = useNavigate();

  // Fetch user profile data on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/profile'); // Ganti dengan endpoint API Anda
        setProfile(response.data);
        setPreviewPhoto(response.data.photo); // Set initial photo preview
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };
    fetchProfile();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  // Handle photo change
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewPhoto(reader.result);
      };
      reader.readAsDataURL(file);
      setProfile((prev) => ({ ...prev, photo: file }));
    }
  };

  // Save profile changes
  const handleSave = async () => {
    const formData = new FormData();
    formData.append('name', profile.name);
    formData.append('username', profile.username);
    formData.append('email', profile.email);
    formData.append('password', profile.password);
    if (profile.photo instanceof File) {
      formData.append('photo', profile.photo);
    }

    try {
      await axios.put('/api/profile', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update profile:', error);
      alert('Failed to update profile.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-600 text-white flex flex-col items-center">
      {/* Header */}
      <nav className="flex justify-between items-center px-8 py-4 bg-blue-800 shadow-md w-full">
        <div className="text-2xl font-bold">Greenfields</div>
        <ul className="flex space-x-6 text-sm">
          <li>
            <a href="main-menu" className="hover:text-orange-400">Home</a>
          </li>
          <li>
            <a href="https://greenfieldsdairy.com/tentang-greenfields" className="hover:text-orange-400">About Us</a>
          </li>
          <li>
            <a href="login" className="hover:text-orange-400">Logout</a>
          </li>
        </ul>
      </nav>

      {/* Back Button at Bottom Left of Header */}
      <div className="absolute bottom-4 left-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-white hover:text-blue-900 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.707-8.707a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L9 11.414l-1.293 1.293a1 1 0 01-1.414-1.414l3-3z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>
      </div>

      {/* Profile Section */}
      <div className="w-full max-w-3xl bg-white text-gray-800 rounded-lg shadow-md mt-20 p-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">My Profile</h1>
        <div className="space-y-4">
          {/* Profile Photo */}
          <div className="flex flex-col items-center">
            <img
              src={previewPhoto || '/default-profile.png'} // Default photo if none is uploaded
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border border-gray-300"
            />
            {isEditing && (
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="mt-2 text-sm text-gray-700"
              />
            )}
          </div>

          {/* Name */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full p-2 border ${isEditing ? 'border-blue-500' : 'border-gray-300'} rounded focus:outline-none`}
            />
          </div>

          {/* Username */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full p-2 border ${isEditing ? 'border-blue-500' : 'border-gray-300'} rounded focus:outline-none`}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full p-2 border ${isEditing ? 'border-blue-500' : 'border-gray-300'} rounded focus:outline-none`}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={profile.password}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full p-2 border ${isEditing ? 'border-blue-500' : 'border-gray-300'} rounded focus:outline-none`}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-6 space-x-4">
          {isEditing ? (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                Save
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 py-6 text-center text-sm text-gray-300 mt-auto w-full">
        &copy; 2025 Dimas Rosyidin | Greenfields | Designed for User Management System
      </footer>
    </div>
  );
}

export default Profile;
