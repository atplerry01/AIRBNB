import * as React from 'react';
import { Subscription } from 'react-apollo';
import gql from 'graphql-tag';


const SUB = gql`subscription NewMessageSubscription {
    newMessage(listingId: "5cbc83b3-b1ed-4e36-acb3-7b805cb8b1b9") {
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
