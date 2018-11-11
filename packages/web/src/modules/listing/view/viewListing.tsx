import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {
  ViewListingQuery_viewListing,
  ViewListingQuery,
  ViewListingQueryVariables
} from '../../../schemaTypes';
import * as React from 'react';

export const viewListingQuery = gql`
  query ViewListingQuery($id: String!) {
    viewListing(id: $id) {
      id
      name
      category
      description
      pictureUrl
      price
      beds
      guests
      latitude
      longitude
      amenities
      owner {
        id
        email
      }
    }
  }
`;

export interface IWithViewListing {
  listing: ViewListingQuery_viewListing | null;
  loading: boolean;
}


interface Props {
  listingId: string;
  children: (data: IWithViewListing) => JSX.Element | null;
}

export class ViewListing extends React.PureComponent<Props> {
  render() {
    const { children, listingId } = this.props;
    return (
      <Query<ViewListingQuery, ViewListingQueryVariables>
        query={viewListingQuery}
        variables={{ id: listingId }}
      >
        {( {data, loading }) => {
           let listing: ViewListingQuery_viewListing | null = null;

           if (data &&  data.viewListing) {
             listing = data.viewListing;
           }
       
           return children( {
             listing,
             loading
           });
        }}
      </Query>
    );
  } 
}
