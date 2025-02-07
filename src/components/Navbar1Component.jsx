import { useEffect, useState } from "react";
import homeIcon from "../assets/home.png";
import hamburgerIcon from "../assets/more.png";
import arrowIcon from "../assets/next.png";
import { Link, NavLink } from "react-router-dom";

const Navbar1Component = () => {
  const [isNext, setIsNext] = useState(true);

  const Next = (e) => {
    if(isNext){
      e.target.className = "rotate-180";
    }else{
      e.target.className = "";
    }
    setIsNext(!isNext);
  };


  return (
    <header className="flex justify-between lg:justify-normal">
      <div>
        <button
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          className="inline-flex rounded-lg lg:hidden w-12"
          type="button"
        >
          <img src={hamburgerIcon} alt="hamburger dropdown icon" />
        </button>
      </div>
      <Link className="lg:py-5 lg:pl-5 lg:border-b-2 border-b-[#00FF2C] flex-grow-0 shrink-0 w-12 lg:w-[70px]" to="/">
        <img src={homeIcon} alt="hamburger dropdown icon" />
      </Link>
      {isNext ? (
        <div className="flex-grow lg:flex hidden">
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
          <NavLink
            to="/HelloWorld"
            id="helloWorldLink"
            className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 flex-grow-0 mt-10 px-4 pt-2"
          >
            Hello World
          </NavLink>
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
          <NavLink
            to="/AskingQuestions"
            id="askingQuestionsLink"
            className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 flex-grow-0 mt-10 px-4 pt-2"
          >
            Asking Questions
          </NavLink>
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
          <NavLink
            to="/Add2Numbers"
            id="add2NumLink"
            className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 flex-grow-0 mt-10 px-4 pt-2"
          >
            Adding 2 Numbers
          </NavLink>
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
          <NavLink
            to="/OddOrEven"
            id="oddOrEvenLink"
            className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 flex-grow-0 mt-10 px-4 pt-2"
          >
            Odd Or Even
          </NavLink>
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
          <NavLink
            to="/MadLib"
            id="madLibLink"
            className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 flex-grow-0 mt-10 px-4 pt-2"
          >
            MadLib
          </NavLink>
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
        </div>
      ) : (
        <div className="flex-grow lg:flex hidden">
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
          <NavLink
            to="/Magic8Ball"
            id="magic8BallLink"
            className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 flex-grow-0 mt-10 px-4 pt-2"
          >
            Magic 8 Ball
          </NavLink>
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
          <NavLink
            to="/RestaurantPicker"
            id="restaurantLink"
            className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 flex-grow-0 mt-10 px-4 pt-2"
          >
            Restaurant Picker
          </NavLink>
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
          <NavLink
            to="/ReverseItAlphanumerical"
            id="reverseItANLink"
            className="font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 flex-grow-0 mt-10 px-4 pt-2"
          >
            <h1 className="text-[14px]">Reverse It</h1>
            <h2 className="text-[10px]">(AlphaNumerical)</h2>
          </NavLink>
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
          <NavLink
            to="/ReverseItNumbersOnly"
            id="reverseItNOLink"
            className="font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 flex-grow-0 mt-10 px-4 pt-2"
          >
            <h1 className="text-[14px]">Reverse It</h1>
            <h2 className="text-[10px]">(Numbers Only)</h2>
          </NavLink>
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
          <NavLink
            to="/GreaterThanLessThan"
            id="greaterLessThanLink"
            className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 flex-grow-0 mt-10 px-4 pt-2"
          >
            Greater/Less Than
          </NavLink>
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
        </div>
      )}

      <div className="py-5 pr-5 border-b-[#00FF2C] border-b-2 flex-grow-0 shrink-0 lg:block hidden w-[70px]" onClick={Next}>
        <img src={arrowIcon} alt="arrow icon"/>
      </div>
    </header>
  );
};

export default Navbar1Component;
