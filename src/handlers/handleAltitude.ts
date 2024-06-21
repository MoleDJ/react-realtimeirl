import globalStore from "@store/globalStore";

const handleAltitude = () => {
  // Observe altitude to store record
  globalStore.altitude.onChange((altitude) => {
    if(altitude['EGM96'])
    {
      if(globalStore.sessionAltitude.get() === null)
      {
        globalStore.sessionAltitude.set(altitude['EGM96']);
      }
      globalStore.relativeAltitude.set(altitude['EGM96'] - globalStore.sessionAltitude.get());
    }
    if(globalStore.recordAltitude.get() < altitude['EGM96']){
      globalStore.recordAltitude.set(altitude['EGM96']);
    }
    if(globalStore.recordRelativeAltitude.get() < globalStore.relativeAltitude.get()){
      globalStore.recordRelativeAltitude.set(globalStore.relativeAltitude.get());
    }
  })
};

handleAltitude();
