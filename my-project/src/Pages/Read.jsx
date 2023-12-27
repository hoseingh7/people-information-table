import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Read = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded ">
        <h3 className="">اطلاعات کاربر</h3>
        <div className="mb-2">
          <strong>نام:{data.name}</strong>
        </div>
        <div className="mb-2">
          <strong>ایمیل:{data.email}</strong>
        </div>
        <div className="mb-3">
          <strong>تلفن:{data.phone}</strong>
        </div>
        <Link
          to={`/update/${id}`}
          className="btn btn-success">
          ویرایش
        </Link>
        <Link
          to="/"
          className="btn btn-primary ms-3">
          {" "}
          بازگشت
        </Link>
      </div>
    </div>
  );
};

export default Read;
