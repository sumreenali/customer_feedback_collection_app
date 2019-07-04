import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

const Dashboard = () => {
  return (
    <div className="container">
      <h3 style={{ fontWeight:500, color:'#552fb6' }} >Recent Survey List </h3>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons" style={{ fontSize:32 }}> + </i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
