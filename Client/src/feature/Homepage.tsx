import React from "react";
import { Button } from "semantic-ui-react";
import { toast } from "react-toastify";

const Homepage: React.FC = () => {
  const notify = () => toast("Wow so easy !");
  return (
    <>
      <Button onClick={notify}>Click Here</Button>
    </>
  );
};

export default Homepage;
