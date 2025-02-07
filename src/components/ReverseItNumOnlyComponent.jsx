import { useState } from "react";
import { GetReverseItNO } from "../services/services";

const ReverseItNumOnlyComponent = () => {
  const [response, setResponse] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);

  const getInputValue = async (e) => {
    if (e.target.value.trim(" ") != "") {
      if (e.key === "Enter") {
        setResponse(await GetReverseItNO(e.target.value));
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
      <section className="flex flex-col items-center justify-center px-15 py-45 md:px-55 lg:py-0 lg:pt-20 lg:items-start lg:pl-50 2xl:pl-40 2xl:pr-90 bg-[url(../assets/img/pipboy-man.png)] bg-no-repeat bg-center bg-[330px,430px] lg:bg-none">
        <ul className="text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] text-[#00FF2C] self-start">
          <li>PipBoy: I can calculate any number and put it in reverse.</li>
        </ul>
        <div
          id="inputContainer"
          className="flex flex-col text-[#00FF2C] self-start"
        >
          <input
            id="inputField"
            className="inline border-1 border-[#00FF2C] text-[2rem] lg:text-[3.5rem] xl:text-[4rem] text-[#00FF2C] w-[300px] lg:w-[750px] xl:w-[940px] bg-transparent"
            type="number"
            placeholder="Please type number in here."
            onKeyDown={getInputValue}
            onClick={activeInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {isInputActive && (
            <h3 id="inputDirections" className="lg:text-lg">
              Please Type In A Number Then Press Enter.
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

export default ReverseItNumOnlyComponent;
