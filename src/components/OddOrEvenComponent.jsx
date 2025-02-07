import { useState } from "react";
import { GetOddOrEven } from "../services/DataServices";
import pipBoy from "../assets/pipboy-man.png";

const OddOrEvenComponent = () => {
  const [response, setResponse] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);

  const getInputValue = async (e) => {
    if (e.target.value.trim(" ") != "") {
      if (e.key === "Enter") {
        setResponse(await GetOddOrEven(e.target.value));
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
    <>
      <section className="flex flex-col items-center justify-center px-[60px] py-[180px] sm:px-[220px] lg:py-0 lg:pt-20 lg:items-start lg:pl-[250px] xl:pl-[350px] 2xl:pl-[400px] bg-[url(./assets/pipboy-man.png)] bg-no-repeat bg-center bg-[330px,430px] lg:bg-none">
        <ul className="text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] text-[#00FF2C] self-start">
          <li>PipBoy: I can tell you if a number is odd or even.</li>
        </ul>
        <div
          id="inputContainer"
          className="flex flex-col text-[4rem] text-[#00FF2C] self-start"
        >
          <input
            id="inputField"
            className="inline border-2 border-[#00FF2C] text-[2rem] lg:text-[3.5rem] xl:text-[4rem] text-[#00FF2C] w-[300px] lg:w-[750px] 2xl:w-[940px] bg-transparent"
            type="number"
            placeholder="Please type number in here."
            maxLength="25"
            onKeyDown={getInputValue}
            onClick={activeInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {isInputActive && (
            <h3 id="inputDirections" className="lg:text-lg">
              Please Type In Your Number Then Press Enter.
            </h3>
          )}
        </div>
        {response !== "" && (
          <div className="text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] text-[#00FF2C] self-start">
            <p>PipBoy: {response}</p>
          </div>
        )}
      </section>
    </>
  );
};

export default OddOrEvenComponent;
