import React, { useEffect } from "react";
import Value from "../app/api/agent";

const Test: React.FC = () => {
  useEffect(() => {
    Value.getValue(1).then((data) => console.log(data));
  });
  return <div>test</div>;
};

export default Test;
