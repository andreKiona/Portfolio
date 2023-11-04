import React from 'react'
import { useNavigate } from "react-router-dom";

function Projectitem({image, name, id}) {
  const navigate = useNavigate();

  console.log("Image URL: ", image);
  console.log("Project Name: ", name);
  console.log("Project ID: ", id);

  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default Projectitem;
