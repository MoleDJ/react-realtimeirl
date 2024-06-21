import flagStore from "@store/flagStore"
import globalStore from "@store/globalStore"

import valueFormatter from "@functions/valueFormatter";

const Speed = () => {
  const { showSpeed, useImperial } = flagStore.get();
  const { recordSpeed } = globalStore.get();
  const { metric, imperial } = valueFormatter('speed', recordSpeed)
  return (
    <div className="speed-text" style={{ display: showSpeed ? '' : 'none' }}>
      Record Velocidad: {useImperial ? imperial : metric}
    </div>
  )
}

export default Speed