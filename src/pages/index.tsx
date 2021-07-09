import MallardLogo from '../components/logo';
import { Timeline } from 'react-twitter-widgets';
import Head from "next/head";
import { Skeleton } from '@material-ui/lab';
import { Typography } from "@material-ui/core";
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';

export default function Index() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '90vh', width: '100vw', flexDirection: 'column', justifyContent: 'space-around' }}>
      <Head>
        <title>Mallard Ultimate</title>
        <meta name="description" content="Mallard is an open club ultimate team from Minneapolis." />
      </Head>
      <MallardLogo />
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'MPLSmallard'
        }}
        options={{
          height: '60vh',
          dnt: true
        }}
        // onLoad={ () => console.log('loading')}
        renderError={(_err) =>
          <div style={{
            // display: 'flex',
            // alignItems: 'center',
            // flexDirection: 'column'
          }}>
            <Skeleton animation={false} variant="rect" width='300px' height='60vh' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Typography align="left" style={{ marginLeft: '1em', marginRight: '1em', marginTop: '3vh', visibility: 'visible', color: '#ffffff'}}>
              <ErrorOutlineOutlinedIcon fontSize="small" style={{marginBottom: '-0.15em', marginRight: '0.15em'}}/>
               Failed to load Twitter timeline. Get updates directly <a style={{textDecorationColor: '#ffffff', color: '#ffffff'}} href='https://twitter.com/MPLSMallard'>from Twitter @MPLSMallard</a>.</Typography>
            </Skeleton>
          </div>
        } />
    </div>
  );
}
