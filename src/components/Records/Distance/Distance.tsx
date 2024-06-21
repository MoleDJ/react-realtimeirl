import valueFormatter from "@functions/valueFormatter";

import flagStore from "@store/flagStore"
import globalStore from "@store/globalStore"

const Distance = () => {
  const { showDistance, useImperial } = flagStore.get();
  const { recordDistance } = globalStore.get();

  const { metric, imperial } = valueFormatter('distance', recordDistance)

  return (
    <div className="distance-text" style={{ display: showDistance ? '' : 'none' }}>
      Record Distancia: {useImperial ? imperial : metric}
    </div>
  )
}

export default Distance