import { useEffect, useState } from "react";
import { GetRestaurantPicker } from "../services/services";

const RestaurantPickerComponent = () => {
  const [userChoice, setUserChoice] = useState("");
  const [optionCounter, setOptionCounter] = useState(0);
  const [cpuResponse, setCpuResponse] = useState(
    "Are you hungry? What do you feel like eating?"
  );
  const [responseCounter, setResponseCounter] = useState(0);
  const [buttonCounter, setButtonCounter] = useState(0);

  useEffect(() => {
    if (buttonCounter !== 0) {
      if (responseCounter === 0) {
        switch (buttonCounter) {
          case 1:
            setUserChoice("chicken");
            break;
          case 2:
            setUserChoice("beef");
            break;
          default:
            setUserChoice("seafood");
            break;
        }
      }
      if (responseCounter > 0) {
        switch (buttonCounter) {
          case 1:
            setResponseCounter(1);
            setResponse();
            break;
          case 2:
            setResponseCounter(2);
            break;
          default:
            setResponseCounter(0);
            setOptionCounter(0)
            setUserChoice('')
            break;
        }
      }
      setButtonCounter(0);
    }
  }, [buttonCounter]);

  useEffect(() => {
    if (userChoice !== "") {
      setResponseCounter(1);
      setOptionCounter(1);
    }
  }, [userChoice]);

  useEffect(() => {
      setResponse();
  }, [responseCounter]);

  const setResponse = async () => {
    if (responseCounter === 0) {
      setCpuResponse("Are you hungry? What do you feel like eating?");
    } else if (responseCounter === 1) {
      setCpuResponse(`${await GetRestaurantPicker(userChoice)}`);
    } else {
      setCpuResponse("Glad I can Be of Service");
    }
  };

  const button1Options = ["Chicken", "No, give me something else"];

  const button2Options = ["Beef", "Sure, sounds good"];

  const button3Options = ["Seafood", "I want to go back."];

  return (
    <>
      <section className="flex flex-col items-center justify-center px-15 md:px-55 lg:py-0 lg:pt-20 lg:items-start lg:pl-50 2xl:pl-40 2xl:pr-90 bg-[url(../assets/img/pipboy-man.png)] bg-no-repeat bg-center bg-[330px,430px] lg:bg-none">
        <ul className="text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] text-[#00FF2C] self-start">
          <li id="pipboyResponse">PipBoy: {cpuResponse}</li>
        </ul>
        <div id="optionsContainer" className="flex flex-col self-start">
          <button
            id="option1"
            className="inline border-1 border-[#00FF2C] text-[2rem] text-[#00FF2C] w-[300px] lg:w-[620px] xl:w-[800px] 2xl:w-[940px] p-2 bg-[rgb(0,255,44,0.3)] rounded-[30px] mt-7 text-start pl-5"
            onClick={() => setButtonCounter(1)}
          >
            {button1Options[optionCounter]}
          </button>
          <button
            id="option2"
            className="inline border-1 border-[#00FF2C] text-[2rem] text-[#00FF2C] 2xl:w-[940px] p-2 bg-[rgb(0,255,44,0.3)] rounded-[30px] mt-7 text-start pl-5"
            onClick={() => setButtonCounter(2)}
          >
            {button2Options[optionCounter]}
          </button>
          <button
            id="option3"
            className="inline border-1 border-[#00FF2C] text-[2rem] text-[#00FF2C] 2xl:w-[940px] p-2 bg-[rgb(0,255,44,0.3)] rounded-[30px] mt-7 text-start pl-5"
            onClick={() => setButtonCounter(3)}
          >
            {button3Options[optionCounter]}
          </button>
        </div>
      </section>
    </>
  );
};

export default RestaurantPickerComponent;
