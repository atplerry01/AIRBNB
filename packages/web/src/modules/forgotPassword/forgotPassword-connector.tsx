import * as React from 'react';
import { ForgotPasswordController } from './forgotPassword-controller';
import { ForgotPasswordView } from './forgotPassword-ui';
import { RouteComponentProps } from 'react-router-dom';


 export class ForgotPasswordConnector extends React.PureComponent<
 RouteComponentProps<{}>
 >{

    onFinish = () => {
        this.props.history.push('/m/reset-password', {message: 'check your email to reset password'});
    };

    render() {          
        return (
       
       <ForgotPasswordController>
           {({ submit }) => <ForgotPasswordView onFinish={this.onFinish} submit={submit} />}
       </ForgotPasswordController>     
        );
    }

 }
//  {({ submit }: {submit}) => <RegisterView submit={submit} />}