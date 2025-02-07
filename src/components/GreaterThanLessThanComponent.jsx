import { useEffect, useState } from "react";
import { GetGreaterThanLessThan } from "../services/DataServices";
import pipBoy from "../assets/pipboy-man.png";

const GreaterThanLessThanComponent = () => {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [cpuResponse, setCpuResponse] = useState("");

  const [isInput1Active, setIsInput1Active] = useState(false);
  const [isInput2Active, setIsInput2Active] = useState(false);

  const getFirstNum = async (e) => {
    if (e.target.value.trim(" ") != "") {
      if (e.key === "Enter") {
        setFirstNum(e.target.value);
      }
      console.log("work");
    }
  };

  const getSecondNum = async (e) => {
    if (e.target.value.trim(" ") != "") {
      if (e.key === "Enter") {
        setSecondNum(e.target.value);
        console.log("workss");
      }
    }
  };

  useEffect(() => {
    if (firstNum.trim(" ") !== "" && secondNum.trim(" ") !== "") {
      fetchData(firstNum, secondNum);
    }
  }, [firstNum, secondNum]);

  const fetchData = async (a, b) => {
    setCpuResponse(await GetGreaterThanLessThan(a, b));
  };

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
    <>
      <section className="flex flex-col items-center justify-center px-[60px] py-20 md:px-[220px] lg:py-0 lg:pt-20 lg:items-start lg:pl-[200px] 2xl:pl-40 2xl:pr-[360px] bg-[url(./assets/pipboy-man.png)] bg-no-repeat bg-center bg-[330px,430px] lg:bg-none">
        <ul className="text-[1.5rem] lg:text-[3.5rem] xl:text-[4rem] text-[#00FF2C] self-start">
          <li>
            PipBoy: I can tell you if one number is greater than or less than
            the other.
          </li>
        </ul>
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-20 mt-7 self-start">
          <div id="inputContainer" className="flex flex-col text-[#00FF2C]">
            <input
              id="inputField"
              className="inline border-2 border-[#00FF2C] text-[1.5rem] text-[#00FF2C] w-[250px] xl:w-[400px] bg-transparent"
              type="number"
              placeholder="First Number"
              maxLength="20"
              onKeyDown={getFirstNum}
              onFocus={handleFocus1}
              onBlur={handleBlur1}
            />
            {isInput1Active && (
              <h3 id="input2Directions" className="lg:text-lg">
                Please Type In Number Then Press Enter.
              </h3>
            )}
          </div>
          <div id="input2Container" className="flex flex-col text-[#00FF2C]">
            <input
              id="inputField2"
              className="inline border-2 border-[#00FF2C] text-[1.5rem] text-[#00FF2C] w-[250px] xl:w-[400px] bg-transparent"
              type="number"
              placeholder="Second Number"
              maxLength="20"
              onKeyDown={getSecondNum}
              onFocus={handleFocus2}
              onBlur={handleBlur2}
            />
            {isInput2Active && (
              <h3 id="input2Directions" className="lg:text-lg">
                Please Type In Number Then Press Enter.
              </h3>
            )}
          </div>
        </div>
        {cpuResponse !== "" && (
          <div className="text-[1.5rem] lg:text-[3.5rem] xl:text-[4rem] text-[#00FF2C] self-start">
            <p>PipBoy: {cpuResponse}</p>
          </div>
        )}
      </section>
    </>
  );
};

export default GreaterThanLessThanComponent;
