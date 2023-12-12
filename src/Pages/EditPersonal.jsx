import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditPersonal() {
  const [income, setIncome] = useState("");
  const [outcome, setOutcome] = useState("");
  const [inDate, setInDate] = useState("");
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (id, e) => {
    e.preventDefault();

    const storedToken = localStorage.getItem("authToken");
    axios
      .put("http://localhost:3000/personal/" + id, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setIncome("");
        setOutcome("");
        setInDate("");
        setTitle("");
        navigate("/personal");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="inputs-container">
      <form onSubmit={handleFormSubmit}>
        <div>
          <h1>Edit an existing expense</h1>
          <label>Title</label>
          <input
            className="inputs"
            type="text"
            placeholder="enter the title"
            value={title}
            required={true}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label>income</label>
          <input
            className="inputs"
            type="number"
            placeholder="00.00"
            value={income}
            onChange={(e) => {
              setIncome(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Outcome</label>
          <input
            className="inputs"
            type="number"
            value={outcome}
            onChange={(e) => {
              setOutcome(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            className="inputs"
            type="date"
            value={inDate}
            onChange={(e) => {
              setInDate(e.target.value);
            }}
          />
        </div>
        <div>
          <br></br>
          <button
            type="submit"
            className="addBtn"
            onChange={(e) => handleFormSubmit(item._id, e)}
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
export default EditPersonal;
