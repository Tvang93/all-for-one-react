import { useEffect, useState } from "react";
import { GetAskingQuestions } from "../services/services";

const AskingQuestionsComponent = () => {
    const [userName, setUserName] = useState("");
    const [userTime, setUserTime] = useState("");
    const [cpuResponse, setCpuResponse] = useState('');

    const [isInput1Active, setIsInput1Active] = useState(false);
    const [isInput2Active, setIsInput2Active] = useState(false);

    let isNameSaved = userName.trim('') !== ""
    const getUserName = async(e) => {
        if (e.target.value.trim(" ") != "") {
            if(e.key === "Enter") {
                setUserName(e.target.value);
            }
        }
    }

    const getUserTime = async(e) => {
        if (e.target.value.trim(" ") != "") {
            if(e.key === "Enter") {
                setUserTime(e.target.value);
            }
        }
    }

    useEffect(() => {
        if(userTime !== "" && userName.trim(" ") !== ''){
            fetchAskingQuestions(userName, userTime)
        }
    }, [userName, userTime])

    const fetchAskingQuestions = async(a,b) => {
        setCpuResponse(await GetAskingQuestions(a,b))
    }

//   const getInput1Value = async (e) => {
//     if (e.target.value.trim(" ") != "") {
//       if (e.key === "Enter") {
//         await setResponse(e.target.value);

//         console.log(response)
        
//       }
//     }
//   };

//   const getInput2Value = async (e) => {
//     if (e.target.value.trim(" ") != "") {
//       if (e.key === "Enter") {
//         console.log(response)
//         console.log(response2)
//         setPipboy(await GetAskingQuestions(response, await setResponse2(e.target.value)))
//       }
//     }
//   };

  const handleFocus1 = () => {
    setIsInput1Active(true);
  };

  const handleBlur1 = () => {
    setIsInput1Active(false);
  };

  const handleFocus2 = () => {
    setIsInput2Active(true);
  };

  const handleBlur2 = () => {
    setIsInput2Active(false);
  };

  return (
    <section className="flex flex-col items-center justify-center px-15 py-40 sm:px-55 lg:py-0 lg:pt-20 lg:items-start lg:pl-50 2xl:pl-100 bg-[url(../assets/img/pipboy-man.png)] bg-no-repeat bg-center bg-[330px,430px] lg:bg-none">
      <ul className="text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] text-[#00FF2C] self-start">
        <li>PipBoy: What is your name?</li>
      </ul>
      <div className="flex flex-col text-[#00FF2C] self-start">
        <input
          id="inputField"
          className="inline border-1 border-[#00FF2C] bg-transparent text-[2rem] lg:text-[3.5rem] xl:text-[4rem] text-[#00FF2C] w-[300px] lg:w-[750px] xl:w-[940px]"
          type="text"
          placeholder="Please type name in here."
          onKeyDown={getUserName}
          onFocus={handleFocus1}
          onBlur={handleBlur1}
        />
        {
          isInput1Active && 
          <h3 id="inputDirections" className="lg:text-lg">
            Please Type In Your Name Then Press Enter.
          </h3>
        }
      </div>
      {isNameSaved && 
        <div>
          <ul className="text-[4rem] text-[#00FF2C]">
            <li
              id="pipboyResponse1"
              className="text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] text-[#00FF2C] self-start "
            >
              PipBoy: What hour did you wake up?
            </li>
          </ul>
          <div id="input2Container" className="flex-col text-[#00FF2C] ">
            <input
              id="inputField2"
              className="inline border-1 border-[#00FF2C] text-[2rem] lg:text-[3.5rem] xl:text-[4rem] text-[#00FF2C] w-[300px] lg:w-[750px] xl:w-[940px]"
              type="number"
              placeholder="Please type hour in here."
              maxLength="2"
              onKeyDown={getUserTime}
              onFocus={handleFocus2}
              onBlur={handleBlur2}
            />
            {
              isInput2Active &&
              <h3 id="input2Directions" className="lg:text-lg ">
              Please Type In The Time You Awoke Then Press Enter.
              </h3>  
            }
          </div>
        </div>
      }
      {
        cpuResponse !== '' &&
        <div className="text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] text-[#00FF2C] self-start">
          <p>PipBoy: {cpuResponse}</p>
        </div>
      }
    </section>
  );
};

export default AskingQuestionsComponent;
