import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState(0);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/techwithchhotu")
  //       .then((response) => response.json())
  //       .then((res_data) => {
  //         setData(res_data);
  //         console.log("data", data);
  //       });
  //   });
  return (
    <div className="bg-gray-500 flex justify-center m-10 ml-40 mr-40">
      <p>Github followers: {data.followers}</p>
      <img
        src={data.avatar_url}
        alt="github profile"
        className="rounded-full"
      />
    </div>
  );
}

export default Github;
export const GithubInfo = async () => {
  const resData = await fetch("https://api.github.com/users/techwithchhotu"); //fetching the github user
  return resData.json();
};
