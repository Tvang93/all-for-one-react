const Navbar1Component = () => {
  return (
    <header className="flex justify-between lg:justify-normal">
      <div>
        <button
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          className="inline-flex pt-[28px] pl-[20px] p-2 rounded-lg lg:hidden"
          type="button"
        >
          Home
        </button>
      </div>
      <div className="pt-[20px] pl-[20px] pr-[20px] lg:pr-0 lg:border-b-1 border-b-[#00FF2C] grow-0 shrink-0">
          <h1>hamburger</h1>
      </div>
      <ul className="grow-1 lg:flex hidden">
        <div className="border-b-[#00FF2C] border-b-1 grow-1"></div>
        <li
          id="helloWorldLink"
          className="xl:text-2xl font-medium text-center text-[#00FF2C] border-1 border-[#00FF2C] border-b-0 grow-0 mt-10"
        >
        Hello World
        </li>
        <li
          id="magic8BallLink"
          className="xl:text-2xl font-medium text-center text-[#00FF2C] border-1 border-[#00FF2C] border-b-0 grow-0 mt-10 hidden"
        >
        Magic 8 Ball
        </li>
        <div className="border-b-[#00FF2C] border-b-1 grow-1"></div>
        <li
          id="askingQuestionsLink"
          className="xl:text-2xl font-medium text-center text-[#00FF2C] border-1 border-[#00FF2C] border-b-0 grow-0 mt-10"
        >
        Asking Questions
        </li>
        <li
          id="restaurantLink"
          className="xl:text-2xl font-medium text-center text-[#00FF2C] border-1 border-[#00FF2C] border-b-0 grow-0 mt-10 hidden"
        >
        Restaurant Picker
        </li>
        <div className="border-b-[#00FF2C] border-b-1 grow-1"></div>
        <li
          id="add2NumLink"
          className="xl:text-2xl font-medium text-center text-[#00FF2C] border-1 border-[#00FF2C] border-b-0 grow-0 mt-10"
        >
        Adding 2 Numbers
        </li>
        <li
          id="reverseItANLink"
          className="font-medium text-center text-[#00FF2C] border-1 border-[#00FF2C] border-b-0 grow-0 mt-10 hidden"
        >
            <h1 className="text-[14px]">Reverse It</h1>
            <h2 className="text-[10px]">(AlphaNumerical)</h2>
        </li>
        <div className="border-b-[#00FF2C] border-b-1 grow-1"></div>
        <li
          id="oddOrEvenLink"
          className="xl:text-2xl font-medium text-center text-[#00FF2C] border-1 border-[#00FF2C] border-b-0 grow-0 mt-10"
        >
        Odd Or Even
        </li>
        <li
          id="reverseItNOLink"
          className="font-medium text-center text-[#00FF2C] border-1 border-[#00FF2C] border-b-0 grow-0 mt-10 hidden"
        >
            <h1 className="text-[14px]">Reverse It</h1>
            <h2 className="text-[10px]">(Numbers Only)</h2>
        </li>
        <div className="border-b-[#00FF2C] border-b-1 grow-1"></div>
        <li
          id="madLibLink"
          className="xl:text-2xl font-medium text-center text-[#00FF2C] border-1 border-[#00FF2C] border-b-0 grow-0 mt-10"
        >
            MadLib
        </li>
        <li
          id="greaterLessThanLink"
          className="xl:text-2xl font-medium text-center text-[#00FF2C] border-1 border-[#00FF2C] border-b-0 grow-0 mt-10 hidden"
        >
            Greater/Less Than
        </li>
        <div className="border-b-[#00FF2C] border-b-1 grow-1"></div>
      </ul>
      <div className="pt-[20px] pr-[20px] border-b-[#00FF2C] border-b-1 grow-0 shrink-0 lg:block hidden">
        <h1>asd</h1>
      </div>
    </header>
  );
};

export default Navbar1Component;
