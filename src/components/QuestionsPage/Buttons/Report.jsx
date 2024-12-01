import React from 'react';
import { useForm } from 'react-hook-form';
import { ReportForm } from '../styledComponents';

const Report = () => {
  const {
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted!");
  };

  return (
    <ReportForm>
      <h3>Report</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea
            {...register("comments", { required: "Comments are required" })}
          />
          {errors.comments && (
            <p style={{ color: 'red' }}>{errors.comments.message}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </ReportForm>
  );
};

export default Report;
