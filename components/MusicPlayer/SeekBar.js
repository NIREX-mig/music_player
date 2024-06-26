
const SeekBar = ({value, onChange, duration}) => {

  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;


  return (
    <div className="flex flex-col w-[90vw] md:w-[28rem] xl:w-[35rem] mx-auto ">
      <div className="flex justify-between pb-1">
        <p className="text-xs">{getTime(value)}</p>
        {duration && <p className="text-xs">{getTime(duration)}</p>}
      </div>
      <input 
        type="range"
        value={value}
        min={0}
        max={duration}
        onChange={onChange}
        className=" w-full h-1" 
      />
    </div>
  );
};

export default SeekBar;
