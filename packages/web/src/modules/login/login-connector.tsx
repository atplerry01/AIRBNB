import * as React from 'react';
import { LoginController } from './login-controller';
import { LoginView } from './login-ui';
import { RouteComponentProps } from 'react-router-dom';


 export class LoginConnector extends React.PureComponent<
 RouteComponentProps<{}>
 >{

    onFinish = () => {
        const {
          history,
          location: { state }
        } = this.props;
        
        if (state && state.next) {
          return history.push(state.next);
        }
    
        history.push("/");
      };

    render() {  
      console.log(this.props.location.state);
        return (
       
       <LoginController>
           {({ submit }) => <LoginView onFinish={this.onFinish}  submit={submit} />}
       </LoginController>     
        );
    }

 }