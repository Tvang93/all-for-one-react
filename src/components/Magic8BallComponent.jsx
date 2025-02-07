import { useState } from "react";
import { GetMagic8Ball } from "../services/services";
import pipBoy from "../assets/pipboy-man.png";

const Magic8BallComponent = () => {
  const [response, setResponse] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);

  const getInputValue = async (e) => {
    if (e.target.value.trim(" ") != "") {
      if (e.key === "Enter") {
        setResponse(await GetMagic8Ball());
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
      <section className="flex flex-col items-center justify-center px-15 py-10 md:px-55 lg:py-0 lg:pt-20 lg:items-start lg:pl-50 2xl:pl-40 2xl:pr-90 bg-[url(./assets/pipboy-man.png)] bg-no-repeat bg-center bg-[330px,430px] lg:bg-none">
        <ul className="text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] text-[#00FF2C] self-start">
          <li>PipBoy: I can tell your fortune, please ask me a question.</li>
        </ul>
        <div
          id="inputContainer"
          className="flex flex-col text-[#00FF2C] mt-7 self-start"
        >
          <textarea
            id="inputField"
            className="inline border-1 border-[#00FF2C] text-[2rem] text-[#00FF2C] w-[300px] h-[150px] lg:w-[750px] xl:w-[940px] bg-transparent"
            type="text"
            rows="2"
            placeholder="Please type question in here."
            onKeyDown={getInputValue}
            onClick={activeInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {isInputActive && (
            <h3 id="inputDirections" className="lg:text-lg">
              Please Type In Your Question Then Press Enter.
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

export default Magic8BallComponent;
