import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

const { Meta } = Card;

import { withFindingListing, IWithFindListings } from './findListing';

class C extends React.PureComponent<IWithFindListings> {
  render() {
    const { listings, loading } = this.props;

    return (
      <div>
        {loading && <div>...loading</div>}

        {listings.map(l => (
          <Card
            key={`${l.id}-card`}
            hoverable={true}
            style={{ width: 240 }}
            cover={l.pictureUrl && <img alt="example" src={l.pictureUrl} />}
          >
            <Link to={`/listing/${l.id}`}>
              <Meta title={l.name} description={l.owner.email} />
            </Link>
          </Card>
        ))}
      </div>
    );
  }
}

export const FindListingConnector = withFindingListing(C);
