// FeedbackForm.js
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';

const StarRating = ({ value, onChange }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="flex items-center space-x-1">
      {stars.map((star) => (
        <FaStar
          key={star}
          className={`cursor-pointer ${star <= value ? 'text-yellow-500' : 'text-gray-300'
            } text-xl`}
          onClick={() => onChange(star)}
        />
      ))}
    </div>
  );
};

const FeedbackForm = ({ roomId }) => {
  const [formData, setFormData] = useState({
    feedbackType: 'General',
    comments: '',
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRatingChange = (value) => {
    setFormData({
      ...formData,
      rating: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:4000/api/v1/feedback/create/${roomId}`, {
        type: formData.feedbackType,
        message: formData.comments,
        rating: formData.rating,
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth')}`
        }
      });


      console.log('Feedback submitted:', response.data.feedback);

      if (response.status === 200) {
        toast.success('Feedback submitted successfully!');
      }

      // You can add additional logic here, such as resetting the form or navigating to another page.
    } catch (error) {
      console.error('Error submitting feedback:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="min-w-fit mx-auto mt-8 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex">
          <label className="block text-base font-semibold">For:</label>
          <label className='block text-base font-bold' >Wall Mounting</label>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Feedback Type:</label>
          <select
            name="feedbackType"
            value={formData.feedbackType}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="general">General</option>
            <option value="bug">Bug Report</option>
            <option value="feature">Feature Request</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Rating:</label>
          <StarRating value={formData.rating} onChange={handleRatingChange} />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Comments:</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
