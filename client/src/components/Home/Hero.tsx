import { useEffect, useState } from "react";
import Button from "../Button";

const Hero = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [counter, setCounter] = useState(0);
  console.log("formVisible:", formVisible);
  console.log("counter:", counter);

  useEffect(()=> {
    setCounter(prevCounter => prevCounter + 1);
  }, [formVisible])

  return (
    <div>
      <Button
        variant="secondary"
        onClick={() => {
          setFormVisible(!formVisible);
        }}
      >
        {formVisible ? "Close Form" : "Open Form"}
      </Button>

      <form
        style={{
          display: formVisible ? "flex" : "none",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "5px",
          maxWidth: "300px",
        }}
      >
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <Button variant="primary">Submit</Button>
      </form>

      {
        <div>
          <h2>Counter: {counter}</h2>
        </div>
      }
    </div>
  );
};

export default Hero;
