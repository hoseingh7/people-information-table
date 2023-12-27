import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Update = () => {
  // const [data, setData] = useState([]);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:3000/users/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded  ">
        <h1 className="pb-4 pl-5 text-[30px]"> ویرایش اطلاعات </h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2 ">
            <label htmlFor="name ">نام:</label>
            <input
              type="text"
              className="form-control"
              placeholder=" نام را وارد کنید"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email "> ایمیل:</label>
            <input
              type="email"
              className="form-control"
              placeholder="ایمیل را وارد کنید "
              aria-describedby="emailHelp"
              value={values.email}
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
              value={values.phone}
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

export default Update;
