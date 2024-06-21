import globalStore from "@store/globalStore";

const handleSpeed = () => {
  // Observe altitude to store record
  globalStore.speed.onChange((speed) => {
    if(globalStore.recordSpeed.get() < speed.value){
      globalStore.recordSpeed.set(speed.value);
    }
  })
};

handleSpeed();
