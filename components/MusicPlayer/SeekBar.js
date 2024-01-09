const SeekBar = () => {
  return (
    <div className="flex flex-col w-[28rem] xl:w-[35rem] mx-auto ">
      <div className="flex justify-between pb-1">
        <p className="text-xs">00:00</p>
        <p className="text-xs">00:00</p>
      </div>
      <input type="range" className=" w-[28rem] xl:w-[35rem] h-1 " />
    </div>
  );
};

export default SeekBar;
