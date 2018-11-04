import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation, MutationFn } from 'react-apollo';
import {
  CreateMessageMutation,
  CreateMessageMutationVariables
} from '../../../schemaTypes';

export const createMessageMutation = gql`
  mutation CreateMessageMutation($message: MessageInput!) {
    createMessage(message: $message)
  }
`;

export interface IWithCreateMessage {
  createMessage: MutationFn<
    CreateMessageMutation,
    CreateMessageMutationVariables
  >;
}

interface Props {
  children: (data: IWithCreateMessage) => JSX.Element | null;
}

export class CreateMessage extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;
    return (
      <Mutation<CreateMessageMutation, CreateMessageMutationVariables>
        mutation={createMessageMutation}
      >
        {createMessage => {
          return children({
            createMessage
          });
        }}
      </Mutation>
    );
  }
}
