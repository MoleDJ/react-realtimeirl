import Altitude from '@components/Metrics/Altitude';
import RelativeAltitude from '@components/Metrics/RelativeAltitude';
import Distance from '@components/Metrics/Distance';
import Heading from '@components/Metrics/Heading'
import Heartrate from '@components/Metrics/Heartrate';
import Speed from '@components/Metrics/Speed';

import flagStore from '@store/flagStore';

import './Metrics.scss';

const OtherMetrics = () => {
  const { showRecords } = flagStore.get();

  return (
    <div className="metrics-container" style={{ display: showRecords ? '' : 'none' }}>
      <Heading />
      <Heartrate />
      <Altitude />
      <RelativeAltitude />
      <Speed />
      <Distance />
    </div>
  );
};

export default OtherMetrics;
