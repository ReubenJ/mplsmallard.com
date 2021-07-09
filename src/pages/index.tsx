import MallardLogo from '../components/logo';
import { Timeline } from 'react-twitter-widgets';

export default function Index() {
  return (
      <div style={{ display: 'flex', alignItems: 'center', height: '90vh', width: '100vw', flexDirection: 'column', justifyContent: 'space-around'}}>
        <MallardLogo />
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'MPLSmallard'
          }}
          options={{
            height: '60vh',
            // width: '500'
          }} />
      </div>
  );
}
