import React from 'react'
import { useState } from "react";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [errors, setErrors] = useState("");
  const [data, setData] = useState(null);
  const handleChange = (event) => {
    setUserName(event.target.value);
    // console.log("Target", event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName);
    if (ValidateInput()) {
      getrepo();
      async function getrepo() {
        let api = `https://api.github.com/users/${userName}/repos`;
        let response = await fetch(api);
        let data = await response.json();
        console.log("data", data);
        setData(data);
        setUserName("");
      }
    }
    function ValidateInput() {
      let errors = "";
      let isValid = true;

      if (!userName) {
        isValid = false;
        errors = "Please Enter UserName";
      }
      if (typeof userName !== undefined) {
        const re = /^[A-Za-z0-9-_.]+$/;
        if (userName.length < 6 || !re.test(userName)) {
          isValid = false;
          errors = "Please enter valid username.";
        }
      }
      setErrors(errors);
      setUserName("");
      return isValid;
    }
  };
  return (
    <div>
      {!data && (
        <form onSubmit={handleSubmit}>
          <div className="form-grp">
            <label for="userName">Enter GitHub UserName </label>
            <input
              name="userName"
              placeholder="Enter UserName"
              value={userName}
              onChange={handleChange}
            />
          </div>
          <input type="submit" value="submit" />
        </form>
      )}

      <div className="content">
        {data && (
          <>
            <table id="table_content">
              <thead className="header">
                <tr>
                  <th>RepoName</th>
                  <th>Language</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody className="tbody">
                {data.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.language}</td>
                      <td>{item.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
      <div>{errors ? <h2>{errors}</h2> : ""}</div>
    </div>
  );
}
