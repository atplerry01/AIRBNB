import * as React from 'react';
import { SearchListings } from './searchListing';

export class ViewListingConnector extends React.PureComponent {
  render() {

    return (
      <SearchListings variables={{input: {name:'a', guests:1, beds: 2}, limit: 10, offset: 0}}>
        {(data) => {
          console.log(data);

          if(!data.listings){
            return <div>...loading</div>;
          }
          return <div>
           {
             data.listings.map(l=>(
               <div>{l.name}</div>
             ))
           }    
           
          </div>;
        }}
      </SearchListings>
    );
  }
}
