const RestaurantPickerComponent = () => {
    
  return (
    <>
      <section class="flex flex-col items-center justify-center px-15 md:px-55 lg:py-0 lg:pt-20 lg:items-start lg:pl-50 2xl:pl-40 2xl:pr-90 bg-[url(../assets/img/pipboy-man.png)] bg-no-repeat bg-center bg-[330px,430px] lg:bg-none">
        <ul class="text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] text-[#00FF2C] self-start">
          <li id="pipboyResponse">
            PipBoy: Are you hungry? What do you feel like eating?
          </li>
        </ul>
        <div id="optionsContainer" class="flex flex-col self-start">
          <button
            id="option1"
            class="inline border-1 border-[#00FF2C] text-[2rem] text-[#00FF2C] w-[300px] lg:w-[620px] xl:w-[800px] 2xl:w-[940px] p-2 bg-[rgb(0,255,44,0.3)] rounded-[30px] mt-7 text-start pl-5"
          >
            Chicken
          </button>
          <button
            id="option2"
            class="inline border-1 border-[#00FF2C] text-[2rem] text-[#00FF2C] 2xl:w-[940px] p-2 bg-[rgb(0,255,44,0.3)] rounded-[30px] mt-7 text-start pl-5"
          >
            Beef
          </button>
          <button
            id="option3"
            class="inline border-1 border-[#00FF2C] text-[2rem] text-[#00FF2C] 2xl:w-[940px] p-2 bg-[rgb(0,255,44,0.3)] rounded-[30px] mt-7 text-start pl-5"
          >
            Seafood
          </button>
        </div>
      </section>
    </>
  );
};

export default RestaurantPickerComponent;
