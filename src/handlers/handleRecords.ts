import globalStore from "@store/globalStore";

const saveRecords = async () =>{
  const updatedData = {
    recordDistance: globalStore.recordDistance.get(),
    recordAltitude: globalStore.recordAltitude.get(),
    recordSpeed: globalStore.recordSpeed.get(),
    recordRelativeAltitude: globalStore.recordRelativeAltitude.get(),
  }
  localStorage.setItem('data.json', JSON.stringify(updatedData, null, 2));
  console.log('Records saved');
}

const loadRecords = async () =>{
  const data = localStorage.getItem('data.json');
  if(!data) return console.log('No records found');
  const parsedData = JSON.parse(data.toString());
  globalStore.recordDistance.set(parsedData.recordDistance);
  globalStore.recordAltitude.set(parsedData.recordAltitude);
  globalStore.recordSpeed.set(parsedData.recordSpeed);
  globalStore.recordRelativeAltitude.set(parsedData.recordRelativeAltitude);
  console.log('Records loaded');
}


const handleRecords= () => {
  loadRecords();
  // Observe altitude to store record
  globalStore.recordDistance.onChange(async () => {
    await saveRecords();
  })
  globalStore.recordAltitude.onChange(async () => {
    await saveRecords();
  })
  globalStore.recordSpeed.onChange(async () => {
    await saveRecords();
  })
  globalStore.recordRelativeAltitude.onChange(async () => {
    await saveRecords();
  })
};

handleRecords();
