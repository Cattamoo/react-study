import Timer from "../timer/timer";
import Tooltip from "../tooltip/tooltip";

const Body = () => {
  return (
    <div>
      <Timer />
      <div style={{ display: `flex`, justifyContent: `space-around` }}>
        <Tooltip
          msg={`Tooltip Center`}
          bgColor={`#00000088`}
          textColor={`#fff`}
        >
          <span>Tooltip Center</span>
        </Tooltip>
        <Tooltip
          msg={`Tooltip Left`}
          bgColor={`#ffaaaa88`}
          textColor={`#111`}
          align={`left`}
        >
          <span>Tooltip Left</span>
        </Tooltip>
        <Tooltip
          msg={`Tooltip Right`}
          bgColor={`#ffee9988`}
          textColor={`#111`}
          align={`right`}
        >
          <span>Tooltip Right</span>
        </Tooltip>
      </div>
    </div>
  );
};

export default Body;
