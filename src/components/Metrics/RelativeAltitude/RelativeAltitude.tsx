import valueFormatter from "@functions/valueFormatter";

import flagStore from "@store/flagStore"
import globalStore from "@store/globalStore"

const RelativeAltitude = () => {
  const { showRelativeAltitude, useImperial } = flagStore.get();
  const { relativeAltitude } = globalStore.get();

  const { metric, imperial } = valueFormatter('relativeAltitude', relativeAltitude)

  return (
    <div className="altitude-text" style={{ display: showRelativeAltitude ? '' : 'none' }}>
      Altitud Relativa: {useImperial ? imperial : metric}
    </div>
  )
}

export default RelativeAltitude