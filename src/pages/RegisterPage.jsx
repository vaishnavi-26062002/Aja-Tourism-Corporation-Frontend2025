import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    idType: "",
    idNumber: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // simple validation
    if (!form.name || !form.mobile || !form.email || !form.password || !form.dob) {
      alert("Please fill required fields.");
      return;
    }
    //Check password conformation
    if (form.password !== form.confirmPassword) {
      alert("Password do not macth.Please re-enter.");
      return;
    }
    if (!form.idType) {
      alert("Please select your Identity Proof (Aadhaar or Passport).");
      return;
    }
    if (form.idType === "Aadhar" && !/^\d{12}$/.test(form.idNumber)) {
      alert("Please enter a valid !12-digits Aadhar Number.")
      return;
    }
    if (form.idType === "Passport" && form.idNumber.length < 6) {
      alert("Please enter a calid Passport number(min 6 characters.");
      return;

    }

    alert(`Registered successfully! Welcome ${form.name}`);
    console.log(form);
  };

  return (

    <div className="page">

      <div className="register-page">
        <div className="form-container">
          <h2>Register Your Account </h2>


          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
            <input type="tel" name="mobile" placeholder="Mobile Number" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email ID" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
            <label>Date of Birth:</label>
            <input type="date" name="dob" onChange={handleChange} required />
            <select name="idType" onChange={handleChange} required>
              <option value="">select Identity Proof </option>
              <option value="aadhar">Aadhar</option>
              <option value="Passport">Passport</option>
            </select>
            <input type="text" name="idNumber" aria-placeholder="Identity Proof Number" onChange={handleChange} />
            <label className="file-upload">
              Upload Photo:
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </label>

            <button type="submit">Register Now</button>
            <p className="signin">
              Alredy Have an account? <a href="#">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );


};

export default Register;
