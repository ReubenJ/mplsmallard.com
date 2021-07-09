import MallardLogo from '../components/logo';
import { Timeline } from 'react-twitter-widgets';
import Head from "next/head";

export default function Index() {
  return (
      <div style={{ display: 'flex', alignItems: 'center', height: '90vh', width: '100vw', flexDirection: 'column', justifyContent: 'space-around'}}>
        <Head>
          <title>Mallard Ultimate</title>
          <meta name="description" content="Mallard is an open club ultimate team from Minneapolis."/>
        </Head>
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
