import valueFormatter from "@functions/valueFormatter";

import flagStore from "@store/flagStore"
import globalStore from "@store/globalStore"

const RelativeAltitude = () => {
  const { showRelativeAltitude, useImperial } = flagStore.get();
  const { recordRelativeAltitude } = globalStore.get();

  const { metric, imperial } = valueFormatter('relativeAltitude', recordRelativeAltitude)

  return (
    <div className="altitude-text" style={{ display: showRelativeAltitude ? '' : 'none' }}>
      Record Altitud Relativa: {useImperial ? imperial : metric}
    </div>
  )
}

export default RelativeAltitude