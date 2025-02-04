const Navbar1Component = () => {
  return (
    <header class="flex justify-between lg:justify-normal">
      <div>
        <button
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          class="inline-flex pt-[28px] pl-[20px] p-2 rounded-lg lg:hidden"
          type="button"
        >
          <i class="fa-solid fa-bars fa-2xl" style="color: #00ff2c;"></i>
        </button>
      </div>
      <div class="pt-[20px] pl-[20px] pr-[20px] lg:pr-0 lg:border-b-1 border-b-[#00FF2C] grow-0 shrink-0">
          <i class="fa-solid fa-house fa-2xl" style="color: #00ff2c;"></i>
      </div>
      <ul class="grow-1 lg:flex hidden">
        <blank class="border-b-[#00FF2C] border-b-1 grow-1"></blank>
        <li
          id="helloWorldLink"
          class="xl:text-2xl font-medium text-center text-[#00FF2C] border-1 border-[#00FF2C] border-b-0 grow-0 mt-10"
        >
        Hello World
        </li>
        <li
          id="magic8BallLink"
          class="xl:text-2xl font-medium text-center text-[#00FF2C] border-1 border-[#00FF2C] border-b-0 grow-0 mt-10 hidden"
        >
        Magic 8 Ball
        </li>
        <blank class="border-b-[#00FF2C] border-b-1 grow-1"></blank>
        <li
          id="askingQuestionsLink"
          class="xl:text-2xl font-medium text-center text-[#00FF2C] border-1 border-[#00FF2C] border-b-0 grow-0 mt-10"
        >
        Asking Questions
        </li>
        <li
          id="restaurantLink"
          class="xl:text-2xl font-medium text-center text-[#00FF2C] border-1 border-[#00FF2C] border-b-0 grow-0 mt-10 hidden"
        >
        Restaurant Picker
        </li>
        <blank class="border-b-[#00FF2C] border-b-1 grow-1"></blank>
        <li
          id="add2NumLink"
          class="xl:text-2xl font-medium text-center text-[#00FF2C] border-1 border-[#00FF2C] border-b-0 grow-0 mt-10"
        >
        Adding 2 Numbers
        </li>
        <li
          id="reverseItANLink"
          class="font-medium text-center text-[#00FF2C] border-1 border-[#00FF2C] border-b-0 grow-0 mt-10 hidden"
        >
            <h1 class="text-[14px]">Reverse It</h1>
            <h2 class="text-[10px]">(AlphaNumerical)</h2>
        </li>
        <blank class="border-b-[#00FF2C] border-b-1 grow-1"></blank>
        <li
          id="oddOrEvenLink"
          class="xl:text-2xl font-medium text-center text-[#00FF2C] border-1 border-[#00FF2C] border-b-0 grow-0 mt-10"
        >
        Odd Or Even
        </li>
        <li
          id="reverseItNOLink"
          class="font-medium text-center text-[#00FF2C] border-1 border-[#00FF2C] border-b-0 grow-0 mt-10 hidden"
        >
            <h1 class="text-[14px]">Reverse It</h1>
            <h2 class="text-[10px]">(Numbers Only)</h2>
        </li>
        <blank class="border-b-[#00FF2C] border-b-1 grow-1"></blank>
        <li
          id="madLibLink"
          class="xl:text-2xl font-medium text-center text-[#00FF2C] border-1 border-[#00FF2C] border-b-0 grow-0 mt-10"
        >
            MadLib
        </li>
        <li
          id="greaterLessThanLink"
          class="xl:text-2xl font-medium text-center text-[#00FF2C] border-1 border-[#00FF2C] border-b-0 grow-0 mt-10 hidden"
        >
            Greater/Less Than
        </li>
        <blank class="border-b-[#00FF2C] border-b-1 grow-1"></blank>
      </ul>
      <div class="pt-[20px] pr-[20px] border-b-[#00FF2C] border-b-1 grow-0 shrink-0 lg:block hidden">
        <i
          id="moreNavBtn"
          class="fa-solid fa-arrow-right fa-2xl cursor-pointer"
          style="color: #00ff2c;"
        ></i>
      </div>
    </header>
  );
};

export default Navbar1Component;
