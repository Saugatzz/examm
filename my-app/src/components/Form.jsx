import React, { useState } from "react";

const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    username: "",
    password: "",
  });

  const totalSteps = 4;
  const progressPercentage = (currentStep / (totalSteps - 1)) * 100;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <div className="multi-stepform">
      <div className="progressbar">
        <div
          className="progress"
          id="progress"
          style={{ width: `${progressPercentage}%` }}
        ></div>
        {[0, 1, 2, 3].map((step) => (
          <div
            key={step}
            className={`progress-step ${step <= currentStep ? "progress-step-active" : ""}`}
          ></div>
        ))}
      </div>
      <form onSubmit={handleSubmit} id="form">
        {/* Step 1: Name & Email */}
        {currentStep === 0 && (
          <div className="form-step form-step-active">
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="btns-group">
              <button type="button" className="btn-next" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Age & Phone */}
        {currentStep === 1 && (
          <div className="form-step form-step-active">
            <div className="input-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                value={formData.age}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="btns-group">
              <button
                type="button"
                className="btn-prev"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button type="button" className="btn-next" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Username & Password */}
        {currentStep === 2 && (
          <div className="form-step form-step-active">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="btns-group">
              <button
                type="button"
                className="btn-prev"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button type="button" className="btn-next" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Review */}
        {currentStep === 3 && (
          <div className="form-step form-step-active">
            <h3>Review Your Information</h3>
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Age:</strong> {formData.age}
            </p>
            <p>
              <strong>Phone:</strong> {formData.phone}
            </p>
            <p>
              <strong>Username:</strong> {formData.username}
            </p>
            <div className="btns-group">
              <button
                type="button"
                className="btn-prev"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button type="submit" className="btn-next">
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
