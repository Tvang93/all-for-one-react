import houseIcon from '../assets/house.svg'
import hamburgerIcon from '../assets/bars-solid.svg'
import arrowIcon from '../assets/arrow-right-solid.svg'
import { NavLink } from 'react-router-dom';


const Navbar1Component = () => {
  return (
    <header className="flex">
      <div>
        <button
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          className="inline-flex pt-[28px] pl-[20px] p-2 rounded-lg lg:hidden"
          type="button"
        >
          <img src={hamburgerIcon} alt="hamburger dropdown icon"/>
        </button>
      </div>
      <div className="pt-[20px] pl-[20px] pr-[20px] lg:pr-0 lg:border-b-1 border-b-[#00FF2C] grow-0 shrink-0">
          <img src={houseIcon} alt="house icon"/>
      </div>
      <div className="grow-1 lg:flex hidden">
        <div className="border-b-[#00FF2C] border-b-1 grow-1"></div>
        <NavLink
          to='./HelloWorld'
          id="helloWorldLink"
          className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 grow-0 mt-10"
        >
        Hello World
        </NavLink>
        <NavLink
        to='./Magic8Ball'
          id="magic8BallLink"
          className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 grow-0 mt-10 hidden"
        >
        Magic 8 Ball
        </NavLink>
        <div className="border-b-[#00FF2C] border-b-1 grow-1"></div>
        <NavLink
          to='./AskingQuestions'
          id="askingQuestionsLink"
          className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 grow-0 mt-10"
        >
        Asking Questions
        </NavLink>
        <NavLink
          to='./RestaurantPicker'
          id="restaurantLink"
          className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 grow-0 mt-10 hidden"
        >
        Restaurant Picker
        </NavLink>
        <div className="border-b-[#00FF2C] border-b-1 grow-1"></div>
        <NavLink
          to='./Add2Numbers'
          id="add2NumLink"
          className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 grow-0 mt-10"
        >
        Adding 2 Numbers
        </NavLink>
        <NavLink
          to='./ReverseItAlphanumerical'
          id="reverseItANLink"
          className="font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 grow-0 mt-10 hidden"
        >
            <h1 className="text-[14px]">Reverse It</h1>
            <h2 className="text-[10px]">(AlphaNumerical)</h2>
        </NavLink>
        <div className="border-b-[#00FF2C] border-b-1 grow-1"></div>
        <NavLink
          to='./OddOrEven'
          id="oddOrEvenLink"
          className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 grow-0 mt-10"
        >
        Odd Or Even
        </NavLink>
        <NavLink
          to='./ReverseItNumbersOnly'
          id="reverseItNOLink"
          className="font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 grow-0 mt-10 hidden"
        >
            <h1 className="text-[14px]">Reverse It</h1>
            <h2 className="text-[10px]">(Numbers Only)</h2>
        </NavLink>
        <div className="border-b-[#00FF2C] border-b-1 grow-1"></div>
        <NavLink
          to='./MadLib'
          id="madLibLink"
          className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 grow-0 mt-10"
        >
            MadLib
        </NavLink>
        <NavLink
          to='./GreaterThanLessThan'
          id="greaterLessThanLink"
          className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 grow-0 mt-10 hidden"
        >
            Greater/Less Than
        </NavLink>
        <div className="border-b-[#00FF2C] border-b-1 grow-1"></div>
      </div>
      <div className="pt-[20px] pr-[20px] border-b-[#00FF2C] border-b-1 grow-0 shrink-0 lg:block hidden">
        <img src={arrowIcon} alt="arrow icon"/>
      </div>
    </header>
  );
};

export default Navbar1Component;
