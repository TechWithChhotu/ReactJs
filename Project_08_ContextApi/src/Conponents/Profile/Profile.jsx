import React, { useContext } from "react";
import userContext from "../../Context/UserContact";

function Profile() {
  const { user } = useContext(userContext);
  console.log("profile", user);

  return user && <div>{user.userName}</div>;
}

export default Profile;
