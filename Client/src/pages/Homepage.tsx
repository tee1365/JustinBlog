import React, { useEffect } from "react";

const Homepage: React.FC = () => {
  useEffect(() => {
    console.log("a");
  }, []);
  return (
    <div>
      <h2>homepage</h2>
    </div>
  );
};

export default Homepage;
