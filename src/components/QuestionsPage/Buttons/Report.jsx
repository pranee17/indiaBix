import React, { useState } from 'react';
import { ReportForm } from '../styledComponents';

const Report = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };

  return (
    <ReportForm>
      <h3>Report</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea 
            name="comments" 
            id="comments" 
            value={formData.comments} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </ReportForm>
  );
};

export default Report;
