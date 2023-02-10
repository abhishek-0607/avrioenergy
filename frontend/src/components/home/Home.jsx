import axios from "axios";
import React, { useState } from "react";

const Home = () => {
  const [file, setFile] = useState(null);
  console.log(file);

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file, file.name);
    const res = await axios.post(
      "http://localhost:3000/api/users/importfile",
      formData
    );
    if (res.status === 200) {
      alert("file uploaded Successfully!!!");
    } else {
      console.log(res);
      const err = await res.json();
      alert(err.message);
    }
  };
  return (
    <div className="home">
      <div className="input-group mb-3 mt-3">
        <input
          type="file"
          name="file"
          className="form-control"
          id="inputGroupFile02"
          onChange={(e) => {
            console.log(e.target.files);
            setFile(e.target.files[0]);
          }}
        />
        <button onClick={() => uploadFile()} className="input-group-text">
          Upload CSV file for Users
        </button>
      </div>
    </div>
  );
};

export default Home;
