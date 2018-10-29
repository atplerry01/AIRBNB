import * as React from 'react';
import { LogoutController } from './logout-controller';
import { CallLogout } from './callLogout';
// tslint:disable-next-line:no-implicit-dependencies
import { RouteComponentProps } from 'react-router';

export class Logout extends React.PureComponent<RouteComponentProps<{}>> {

  onfinish = () => {
    this.props.history.push('/login');
  }

  render() {
   return (
     <LogoutController>
       {({ logout }) => <CallLogout logout={logout} onFinish={this.onfinish} /> }
     </LogoutController>

   );
  }
}


