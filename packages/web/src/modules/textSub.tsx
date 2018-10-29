import * as React from 'react';
import { Subscription } from 'react-apollo';
import gql from 'graphql-tag';


const SUB = gql`subscription NewMessageSubscription {
    newMessage(listingId: "ccb623b1-f65f-4ea2-bc78-d1af62e436e7") {
      text
      listingId
      user {
        id
        email
      }
    }
  }`;

export default class TestSub extends React.PureComponent {

  render() {
    return (
     <Subscription subscription={SUB}>
     {data => {
         console.log(data);
         return null;
     }}
     </Subscription>
    )
  }
}
