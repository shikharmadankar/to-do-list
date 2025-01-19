import React ,{useState}from "react";
import "./Hero.css";
import Delete from "../../Images/delete.png";



const Hero = () => {

  const [task, setTask] = useState(""); // State to manage textarea value

  const handleClear = () => {
    setTask(""); // Clear the textarea by resetting the state
  };

 
  return (

    <div className="hero">
      <div className="left-content">
        <p>Add Task :- </p>
        <div className="task">
        <textarea
            placeholder="Enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)} // Update state on input change
          ></textarea>
          <img src={Delete} alt="" />
        </div>

        <div className="options">
          <button className="btn-1">Save</button>
          <button className="btn-2" onClick={handleClear}>Clear</button>
          <button className="btn-3">Add</button>
        </div>
      </div>

      <div className="right-container">
        <p>Schedule :-</p>

        <div className="table">

          <div className="date">
            <p>Date </p>
            <input type="date" />
            <input type="date" />
            <input type="date" />
            <input type="date" />
          </div>

          <div className="task">
          <p> Task </p>
            <input type="text" placeholder="Enter task" />
            <input type="text" placeholder="Enter task" />
            <input type="text" placeholder="Enter task" />
            <input type="text" placeholder="Enter task" />
          </div>


          <div className="remark">
            <p> Remark </p>
            <input type="checkbox" ></input>
            <input type="checkbox" ></input>
            <input type="checkbox" ></input>
            <input type="checkbox" ></input>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;

