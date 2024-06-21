import valueFormatter from "@functions/valueFormatter";

import flagStore from "@store/flagStore"
import globalStore from "@store/globalStore"

const Altitude = () => {
  const { showAltitude, useImperial } = flagStore.get();
  const { recordAltitude } = globalStore.get();

  const { metric, imperial } = valueFormatter('altitude', recordAltitude)

  return (
    <div className="altitude-text" style={{ display: showAltitude ? '' : 'none' }}>
      Record Altitud: {useImperial ? imperial : metric}
    </div>
  )
}

export default Altitude