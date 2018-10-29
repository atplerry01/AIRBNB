import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ChangePasswordController } from './changePassword-controller';
import { ChangePasswordView } from './changePassword-ui';


 export class ChangePasswordConnector extends React.PureComponent<
 RouteComponentProps<{
     key: string;
 }>
 >{

    onFinish = () => {
        this.props.history.push('/login');
    };


    render() {  
        const { 
            match: {
            params: {key}
        }
    } = this.props;

    console.log('key:', key);
        return (       
       <ChangePasswordController>
           {({ submit }) => <ChangePasswordView token={key} onFinish={this.onFinish} submit={ submit } />}
       </ChangePasswordController>     
        );
    }

 }