import { observable } from "@legendapp/state";
import { defaultWeatherValues } from "@components/Weather/defaultWeatherValues";

const globalStore = observable({
  altitude: {
    EGM96: 0,
    WGS84: 0
  },
  relativeAltitude: 0,
  date: '',
  dateTime: '',
  distance: 0,
  geocode: {},
  heading: 0,
  heartrate: 0,
  location: { latitude: 0, longitude: 0 },
  locationData: { ...defaultWeatherValues },
  neighbourhood: '',
  prevLocation: {
    latitude: 0,
    longitude: 0,
  },
  sessionId: '',
  sessionAltitude: null,
  speed: 0,
  streamElements: {
    'cheer-latest': { name: '', amount: 0 },
    'follower-latest': { name: '' },
    'subscriber-latest': { name: '', amount: 0, tier: '1000' },
    'tip-latest': { name: '', amount: 0 },
    'cheer-recent': [{ name: '', amount: 0 }],
    'follower-recent': [{ name: '' }],
    'subscriber-recent': [{ name: '', amount: 0, tier: '1000' }],
    'tip-recent': [{ name: '', amount: 0 }],
  },
  theme: 'mapbox://styles/mapbox/streets-v12',
  time: '',
  totalDistance: 0,
  zoneId: 'Europe/London',
  recordDistance: 0,
  recordSpeed: 0,
  recordAltitude: 0,
  recordRelativeAltitude: 0,
});

export default globalStore;
