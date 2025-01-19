import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="detail">
        <div className="head">
          <h1>About Us </h1>
        </div>

        <div className="main">
          <div className="left">
            <h1>Key Feature</h1>
            <ul>
              <li>
                Task Prioritization: Organize tasks by urgency, importance, or
                custom categories.
              </li>
              <li>
                Collaboration: Share tasks and projects with your team and stay
                in sync.
              </li>
              <li>
                Customizable Workflows: Create task boards, timelines, or lists
                tailored to your work style.
              </li>
              <li>
                Progress Tracking: Visualize progress with intuitive charts and
                analytics.
              </li>
              <li>
                Reminders & Notifications: Never miss a deadline with timely
                alerts.
              </li>
            </ul>
          </div>

          <div className="right">
            <h1>Our Mission</h1>
            <p>
              At TaskFlow, our mission is simple: To empower individuals and
              teams to accomplish more with less stress. We understand the
              challenges of juggling multiple tasks, deadlines, and
              responsibilities. That’s why we’ve built a platform that
              simplifies task management and encourages collaboration while
              keeping you motivated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
