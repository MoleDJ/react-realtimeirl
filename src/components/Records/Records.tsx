import Altitude from '@components/Records/Altitude';
import RelativeAltitude from '@components/Records/RelativeAltitude';
import Distance from '@components/Records/Distance';
import Speed from '@components/Records/Speed';

import flagStore from '@store/flagStore';

import './Records.scss';

const OtherRecords = () => {
  const { showRecords } = flagStore.get();

  return (
    <div className="records-container" style={{ display: showRecords ? '' : 'none' }}>
      <Altitude />
      <RelativeAltitude />
      <Speed />
      <Distance />
    </div>
  );
};

export default OtherRecords;
