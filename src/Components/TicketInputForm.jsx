import React from "react";
import { useForm } from "react-hook-form";
import '../index.css'
const TicketInputForm = ({ onGenerateTicket }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onGenerateTicket(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2 className="form-title">Enter Your Details</h2>

      <div className="input-group">
        <label>Full Name</label>
        <input {...register("fullName", { required: "Full Name is required" })} />
        {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}
      </div>

      <div className="input-group">
        <label>Email Address</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
          })}
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>

      <div className="input-group">
        <label>Avatar URL</label>
        <input type="url" {...register("avatar", { required: "Avatar URL is required" })} />
        {errors.avatar && <p className="error-message">{errors.avatar.message}</p>}
      </div>

      <button type="submit" className="submit-btn">Generate Ticket</button>
    </form>
  );
};

export default TicketInputForm;