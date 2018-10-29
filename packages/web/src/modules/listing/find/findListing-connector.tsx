import * as React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

import { withFindingListing, IWithFindListings } from './findListing';


class C extends React.PureComponent<IWithFindListings> {
 
 
  render() {

  const {listings, loading} = this.props;   


    return (<div>

       {loading && <div>...loading</div>}

     {listings.map(l => (
     <Card key={`${l.id}-card`}
    hoverable={true}
    style={{ width: 240 }}
    cover={ l.pictureUrl && <img alt="example" src={l.pictureUrl} />}
    >
    <Meta
      title={l.name}
      description={l.owner.email}
    />
  </Card>
  ))}  

    </div>)
    ;
  }
}

export const FindListingConnector = withFindingListing(C);