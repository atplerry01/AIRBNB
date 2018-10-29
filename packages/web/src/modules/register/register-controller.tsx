import * as React from 'react';
import { graphql, ChildMutateProps } from 'react-apollo';
import gql from 'graphql-tag';
import { RegisterMutation, RegisterMutationVariables } from '../../schemaTypes';
import { normalizeErrors } from '../shared/normalizeErrors';
import { INormalizedErrorMap } from '../types/normalizedErrorMap';

interface Props {
  children: (
     data: { submit: (values: RegisterMutationVariables) => Promise<INormalizedErrorMap | null>}
  ) => JSX.Element | null;
}

 class C extends React.PureComponent<ChildMutateProps<Props, RegisterMutation, RegisterMutationVariables>> {

  submit = async (values: RegisterMutationVariables) => {
    console.log(values);
  const {data: {register}} = await this.props.mutate({ variables: values }) as any;

    console.log('response:', register);

    if (register) {
      return normalizeErrors(register);
    }
    return null;
};

  render() {
    return  this.props.children({ submit: this.submit });  
  }
}

const registerMutation = gql`
mutation RegisterMutation($email: String!, $password: String!){
  register(email: $email, password: $password){
    path
    message
  }
}
`;

export const RegisterController = graphql<Props, 
RegisterMutation, 
RegisterMutationVariables>(registerMutation)(C);
