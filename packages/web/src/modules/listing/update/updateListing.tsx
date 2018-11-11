import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation, MutationFn } from 'react-apollo';
import { UpdateListingMutation, UpdateListingMutationVariables } from '../../../schemaTypes';

export const updateListingMutation = gql`
  mutation UpdateListingMutation($listingId: String!, $input: UpdateListingInput!) {
  updateListing(
    listingId: $listingId
    input: $input
  )
}
`;

export interface IWithUpdateListing {
  updateListing: MutationFn<
  UpdateListingMutation,
  UpdateListingMutationVariables
  >;
}

interface IProps {
  children: (data: IWithUpdateListing) => JSX.Element | null;
}

export class UpdateListing extends React.PureComponent<IProps> {
  render() {
    const { children } = this.props;
    return (
      <Mutation<UpdateListingMutation, UpdateListingMutationVariables>
        mutation={updateListingMutation}
      >
        {mutate => {
          return children({
            updateListing: mutate
          });
        }}
      </Mutation>
    );
  }
}
