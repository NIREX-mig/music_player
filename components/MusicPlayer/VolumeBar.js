
import {
  FaVolumeOff,
  FaVolumeDown,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";

const VolumeBar = ({value , handleVolumeChange}) => {
  return (
    <div className="lg:relative absolute right-1 flex lg:w-40 w-20 justify-center items-center h-10">
      {value == 0 && <FaVolumeMute className="w-5 h-5" /> }
      {value <= 0.2 && value > 0 && <FaVolumeOff className="w-5 h-5" /> }
      {value <= 0.4 && value > 0.2  && <FaVolumeDown className="w-5 h-5" /> }
      {value <= 1 && value > 0.4 && <FaVolumeUp className="w-5 h-5" /> }
      <input
        type="range"
        step="any"
        value={value}
        min={0}
        max={1}
        onChange={handleVolumeChange}
        className="w-full h-1 ml-2"
      />
    </div>
  );
};

export default VolumeBar;
