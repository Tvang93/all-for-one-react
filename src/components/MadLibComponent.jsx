import { useEffect, useState } from "react";
import { GetMadLib } from "../services/DataServices";
import pipBoy from "../assets/pipboy-man.png";

const MadLibComponent = () => {
  const [entryArray, setEntryArray] = useState([]);
  const [cpuResponse, setCpuResponse] = useState("");
  const [counter, setCounter] = useState(0);
  const [entryPrompts, setEntryPrompts] = useState("Type in an animal");

  const entryPromtsArray = [
    "Type in an animal",
    "Type in a type of container",
    "Type in your least favorite color",
    "Type in a type of material that covers animals",
    "Type in a verb or action",
    "Type in your favorite material object or thing",
    "Type in your favorite food",
    "Type in something you want to do but never have",
    "Type in a way to change your appearance",
    "Type in your favorite color",
  ];

  const getEntries = (e) => {
    if (e.target.value.trim(" ") != "") {
      if (e.key === "Enter") {
        setEntryArray((entry) => [...entry, e.target.value]);
        setCounter(counter + 1);
      }
    }
  };

  useEffect(() => {
    setEntryPrompts(entryPromtsArray[counter]);
  }, [counter]);

  useEffect(() => {
    if (entryArray.length > 9) {
      fetchMadLib();
      console.log(entryArray);
    }
  }, [entryArray]);

  const fetchMadLib = async () => {
    setCpuResponse(
      await GetMadLib(
        entryArray[0],
        entryArray[1],
        entryArray[2],
        entryArray[3],
        entryArray[4],
        entryArray[5],
        entryArray[6],
        entryArray[7],
        entryArray[8],
        entryArray[9]
      )
    );
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center px-[60px] py-[180px] sm:px-[220px] lg:py-0 lg:pt-20 lg:items-start llg:pl-[250px] xl:pl-[350px] 2xl:pl-[400px] bg-[url(./assets/pipboy-man.png)] bg-no-repeat bg-center bg-[330px,430px] lg:bg-none">
        {entryArray.length < 10 && (
          <>
            <ul className="text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] text-[#00FF2C] self-start">
              <li id="pipboyResponse">PipBoy: {entryPrompts}.</li>
            </ul>
            <div
              id="inputContainer"
              className="flex flex-col text-[4rem] text-[#00FF2C] self-start"
            >
              <input
                id="inputField"
                className="inline border-2 border-[#00FF2C] text-[2rem] lg:text-[3.5rem] xl:text-[4rem] text-[#00FF2C] w-[300px] lg:w-[750px] 2xl:w-[940px] bg-transparent"
                type="text"
                placeholder="Please type in here."
                onKeyDown={getEntries}
              />
            </div>
          </>
        )}

        {cpuResponse !== "" && (
          <div className="text-lg text-[#00FF2C] self-start">
            <p>PipBoy: {cpuResponse}</p>
          </div>
        )}
      </section>
    </>
  );
};

export default MadLibComponent;
