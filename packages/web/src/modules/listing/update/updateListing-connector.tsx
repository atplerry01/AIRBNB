import * as React from 'react';
import { ViewListing } from '../view/viewListing';
import { RouteComponentProps } from 'react-router-dom';
import { ListingForm, defaultListingFormValues } from '../shared/listingForm';
import { UpdateListing } from './updateListing';

export class UpdateListingConnector extends React.PureComponent<
  RouteComponentProps<{ listingId: string }>
> {

  render() {
    const {
      match: {
        params: { listingId }
      }
    } = this.props;

    return (
      <ViewListing listingId={listingId}>
        {data => {
          console.log(data);

          if (!data.listing) {
            return <div>...loading</div>;
          }

          return (
            <UpdateListing>
              {({ updateListing }) => {
              //  console.log(updateListing);

                return (
                  <ListingForm
                    initialValues={{
                      ...defaultListingFormValues,
                      ...data.listing
                    }}
                    submit={ async values => {

                      const { id: _, owner:__, __typename: ___, ...newValues } = values as any;

                      if(newValues.pictureUrl){
                        const parts = newValues.pictureUrl.split('/');
                        newValues.pictureUrl = parts[parts.length - 1];
                      }
                   
                      const result = await updateListing({
                          variables: {
                            input: newValues,
                            listingId
                          }
                      });
                      console.log(result);
                    }}
                  />
                );
              }}
            </UpdateListing>
          );

        }}
      </ViewListing>
    );
  }
}
