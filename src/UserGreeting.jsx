import React from "react";

const UserGreeting = (props) => {
  const welcomeMessage = (
    <div className="welcomeMessage">
      <h1>Welcome</h1>
      <p>{props.username}</p>
    </div>
  );

  const loginPrompt = (
    <div className="loginPrompt">
      <h1>Please Log in</h1>
      <p>{props.username}</p>
    </div>
  );

  return <>{props.isLoggedIn ? welcomeMessage : loginPrompt}</>;
};

export default UserGreeting;
