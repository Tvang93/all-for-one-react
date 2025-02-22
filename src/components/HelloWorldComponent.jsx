import { useState } from "react";
import { GetHelloWorld } from "../services/DataServices";
import pipBoy from "../assets/pipboy-man.png";

const HelloWorldComponent = () => {
  const [response, setResponse] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);

  const getInputValue = async (e) => {
    if (e.target.value.trim(" ") != "") {
      if (e.key === "Enter") {
        setResponse(await GetHelloWorld(e.target.value));
        e.target.value = "";
      }
    }
  };

  const handleFocus = () => {
    setIsInputActive(true);
  };

  const handleBlur = () => {
    setIsInputActive(false);
  };

  const activeInput = () => {
    setResponse("");
  };

  return (
    <section className="flex flex-col items-center justify-center px-[60px] py-48 sm:px-[220px] lg:py-0 lg:pt-20 lg:items-start lg:pl-[250px] xl:pl-[350px] 2xl:pl-[400px] bg-[url(./assets/pipboy-man.png)] bg-no-repeat bg-center bg-[330px,430px] lg:bg-none">
      <ul className="text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] text-[#00FF2C] self-start">
        <li>PipBoy: What is your name?</li>
      </ul>
      <div className="flex flex-col text-[#00FF2C] self-start">
        <input
          id="inputField"
          className="inline border-2 border-[#00FF2C] bg-transparent text-[2rem] lg:text-[3.5rem] xl:text-[4rem] text-[#00FF2C] w-[300px] lg:w-[750px] 2xl:w-[940px]"
          type="text"
          placeholder="Please type name in here."
          onKeyDown={getInputValue}
          onClick={activeInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {isInputActive && (
          <h3 id="inputDirections" className="lg:text-lg">
            Please Type In Your Name Then Press Enter.
          </h3>
        )}
      </div>
      {response !== "" && (
        <div className="text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] text-[#00FF2C] self-start">
          <p>PipBoy: {response}</p>
        </div>
      )}
    </section>
  );
};

export default HelloWorldComponent;
