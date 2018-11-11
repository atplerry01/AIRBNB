import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { SearchListingQuery_searchListings, SearchListingQuery, SearchListingQueryVariables } from '../../../schemaTypes';
import * as React from 'react';

export const searchListingQuery = gql`
  query SearchListingQuery(
  $input: SearchListingsInput
  $offset: Int!
  $limit: Int!
) {
  searchListings(input: $input, offset: $offset, limit: $limit) {
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

export interface IWithSearchListings {
  listings: SearchListingQuery_searchListings[];
  loading: boolean;
}


interface IProps {
  variables: SearchListingQueryVariables
  children: (data: IWithSearchListings) => JSX.Element | null;
}

export class SearchListings extends React.PureComponent<IProps> {
  render() {
    const { children, variables } = this.props;
    return (
      <Query<SearchListingQuery , SearchListingQueryVariables>
        query={searchListingQuery}
        variables={ variables}
      >
        {( {data, loading }) => {
           let listings: SearchListingQuery_searchListings[] = [];

           if (data &&  data.searchListings) {
             listings = data.searchListings;
           }
       
           return children( {
             listings,
             loading
           });
        }}
      </Query>
    );
  } 
}
