import { useEffect, useState } from "react";
import homeIcon from "../assets/home.png";
import hamburgerIcon from "../assets/more.png";
import arrowIcon from "../assets/next.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import pipBoy from "../assets/pipboy-man.png";

const Navbar1Component = () => {
  const pageNames = [
    "/",
    "/HelloWorld",
    "/AskingQuestions",
    "/Adding2Numbers",
    "/OddOrEven",
    "/MadLib"
  ]

  const [isNext, setIsNext] = useState(true);
  const [isMore, setIsMore] = useState(false);
  const [isHomePage, setIsHomePage] = useState(useLocation().pathname == "/")
  const [isImgFlippable, setIsImgFlippable] = useState(false);
  const [flippedImg, setFlippedImg] = useState(pageNames.includes(useLocation().pathname))


  const NotHome1 = () => {
    setIsHomePage(false);
    setFlippedImg(false)
  }

  const NotHome2 = () => {
    setIsHomePage(false);
    setFlippedImg(true)
  }

  const HomePage = () => {
    setIsHomePage(true);
    setFlippedImg(true);
    setIsNext(true)
  }

  useEffect(() => {
    if(isHomePage){
      setIsImgFlippable(true)
      
    }else{
      setIsImgFlippable(false)
    }
  }, [isHomePage])

  const Next = (e) => {
    setIsNext(!isNext);
    if(isImgFlippable){
      setFlippedImg(!flippedImg)
    }
  };

  const More = () => {
    setIsMore(!isMore);
  };

  return (
    <header className="flex justify-between lg:justify-normal">
      <div>
        <button
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          className="inline-flex rounded-lg lg:hidden w-12"
          type="button"
          onClick={More}
        >
          <img src={hamburgerIcon} alt="hamburger dropdown icon" />
        </button>
      </div>
      <Link
        className="lg:py-5 lg:pl-5 lg:border-b-2 border-b-[#00FF2C] flex-grow-0 shrink-0 w-12 lg:w-[70px]"
        to="/"
        onClick={HomePage}
      >
        <img src={homeIcon} alt="hamburger dropdown icon" />
      </Link>
      {isNext ? (
        <div className="flex-grow lg:flex hidden">
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
          <NavLink
            to="/HelloWorld"
            id="helloWorldLink"
            className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 flex-grow-0 mt-10 px-4 pt-2"
            onClick={NotHome2}
          >
            Hello World
          </NavLink>
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
          <NavLink
            to="/AskingQuestions"
            id="askingQuestionsLink"
            className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 flex-grow-0 mt-10 px-4 pt-2"
            onClick={NotHome2}
          >
            Asking Questions
          </NavLink>
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
          <NavLink
            to="/Add2Numbers"
            id="add2NumLink"
            className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 flex-grow-0 mt-10 px-4 pt-2"
            onClick={NotHome2}
          >
            Adding 2 Numbers
          </NavLink>
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
          <NavLink
            to="/OddOrEven"
            id="oddOrEvenLink"
            className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 flex-grow-0 mt-10 px-4 pt-2"
            onClick={NotHome2}
          >
            Odd Or Even
          </NavLink>
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
          <NavLink
            to="/MadLib"
            id="madLibLink"
            className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 flex-grow-0 mt-10 px-4 pt-2"
            onClick={NotHome2}
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
            onClick={NotHome1}
          >
            Magic 8 Ball
          </NavLink>
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
          <NavLink
            to="/RestaurantPicker"
            id="restaurantLink"
            className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 flex-grow-0 mt-10 px-4 pt-2"
            onClick={NotHome1}
          >
            Restaurant Picker
          </NavLink>
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
          <NavLink
            to="/ReverseItAlphanumerical"
            id="reverseItANLink"
            className="font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 flex-grow-0 mt-10 px-4 pt-2"
            onClick={NotHome1}
          >
            <h1 className="text-[14px]">Reverse It</h1>
            <h2 className="text-[10px]">(AlphaNumerical)</h2>
          </NavLink>
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
          <NavLink
            to="/ReverseItNumbersOnly"
            id="reverseItNOLink"
            className="font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 flex-grow-0 mt-10 px-4 pt-2"
            onClick={NotHome1}
          >
            <h1 className="text-[14px]">Reverse It</h1>
            <h2 className="text-[10px]">(Numbers Only)</h2>
          </NavLink>
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
          <NavLink
            to="/GreaterThanLessThan"
            id="greaterLessThanLink"
            className="xl:text-2xl font-medium text-center text-[#00FF2C] border-2 border-[#00FF2C] border-b-0 flex-grow-0 mt-10 px-4 pt-2"
            onClick={NotHome1}
          >
            Greater/Less Than
          </NavLink>
          <div className="border-b-[#00FF2C] border-b-2 flex-grow"></div>
        </div>
      )}
      
      <div
        className="py-5 pr-5 border-b-[#00FF2C] border-b-2 flex-grow-0 shrink-0 lg:block hidden w-[70px]"
        onClick={Next}
      >
        {
        isNext ? (
          <img src={arrowIcon} alt="arrow icon" />
        ) :(
          <img src={arrowIcon} alt="arrow icon" className="rotate-180" />
        )
      }
      </div>
      {isMore && (
        <div id="dropdownDots" class="absolute z-10 bg-[rgb(0,0,0,0.6)] rounded-lg mt-[54px]">
          <ul class="py-2" aria-labelledby="dropdownMenuIconButton">
            <li class="font-medium text-[#00FF2C]">
              <a
                to="/HelloWorld"
                class="inline-block py-1.5 px-7 hover:bg-[rgb(0,255,44,0.3)]"
              >
                Hello World
              </a>
            </li>
            <li class="font-medium text-[#00FF2C]">
              <a
                href="/Magic8Ball"
                class="inline-block py-1.5 px-7 hover:bg-[rgb(0,255,44,0.3)]"
              >
                Magic 8 Ball
              </a>
            </li>
            <li class="font-medium text-[#00FF2C]">
              <a
                href="/AskingQuestions"
                class="inline-block py-1.5 px-7 hover:bg-[rgb(0,255,44,0.3)]"
              >
                Asking Questions
              </a>
            </li>
            <li class="font-medium text-[#00FF2C]">
              <a
                href="/RestaurantPicker"
                class="inline-block py-1.5 px-7 hover:bg-[rgb(0,255,44,0.3)]"
              >
                Restaurant Picker
              </a>
            </li>
            <li class="font-medium text-[#00FF2C]">
              <a
                href="/Add2Numbers"
                class="inline-block py-1.5 px-7 hover:bg-[rgb(0,255,44,0.3)]"
              >
                Adding 2 Numbers
              </a>
            </li>
            <li class="font-medium text-[#00FF2C]">
              <a
                href="/ReverseItAlphanumerical"
                class="inline-block py-1.5 px-7 hover:bg-[rgb(0,255,44,0.3)]"
              >
                Reverse It(AlphaNumerical)
              </a>
            </li>
            <li class="font-medium text-[#00FF2C]">
              <a
                href="/OddOrEven"
                class="inline-block py-1.5 px-7 hover:bg-[rgb(0,255,44,0.3)]"
              >
                Odd Or Even
              </a>
            </li>
            <li class="font-medium text-[#00FF2C]">
              <a
                href="/ReverseItNumbersOnly"
                class="inline-block pt-1.5 px-7 hover:bg-[rgb(0,255,44,0.3)]"
              >
                Reverse It(Numbers Only)
              </a>
            </li>
            <li class="font-medium text-[#00FF2C]">
              <a
                href="/MadLib"
                class="inline-block py-1.5 px-7 hover:bg-[rgb(0,255,44,0.3)]"
              >
                MadLib
              </a>
            </li>
            <li class="font-medium text-[#00FF2C]">
              <a
                href="/GreaterThanLessThan"
                class="inline-block py-1.5 px-7 hover:bg-[rgb(0,255,44,0.3)]"
              >
                Greater/Less Than
              </a>
            </li>
          </ul>
        </div>
      )}
      {
        flippedImg ? (
            <footer id="pipboy1" className="hidden lg:block absolute left-[3%] top-[50%]">
                <div className="scale-x-[-1]">
                    <img className="w-[260px] h-[390px] object-fill " src={pipBoy}
                        alt="pipboy giving thumbs up" />
                </div>
            </footer>
        ) : (
            <footer id="pipboy2" className="hidden lg:block absolute left-[79%] top-[50%]">
                <div>
                    <img className="w-[260px] h-[390px] object-fill " src={pipBoy}
                        alt="pipboy giving thumbs up" />
                </div>
            </footer>
        )
      }
    </header>
  );
};

export default Navbar1Component;
