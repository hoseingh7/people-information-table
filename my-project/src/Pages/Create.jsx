import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Create = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded  ">
        <h1 className="pb-3"> کاربر جدید </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2 ">
            <label htmlFor="name ">نام:</label>
            <input
              type="text"
              className="form-control"
              placeholder=" نام را وارد کنید"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email "> ایمیل:</label>
            <input
              type="email"
              className="form-control"
              placeholder=" ایمیل را وارد کنید "
              aria-describedby="emailHelp"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">تلفن:</label>
            <input
              type="text "
              name="phone"
              className="form-control"
              placeholder="شماره تلفن همراه خود را وارد کنید "
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <button className="btn btn-success">ذخیره</button>
          <Link
            to="/"
            className="btn btn-primary ms-3">
            بازگشت
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Create;
