import * as React from 'react';
// tslint:disable-next-line:no-implicit-dependencies
import { RouteComponentProps } from 'react-router';
import { FormikActions } from 'formik';

import { withCreateListing, IWithCreateListing } from './createListing';
import { IListingFormValues, ListingForm } from '../shared/listingForm';


class C extends React.PureComponent<
RouteComponentProps<{}> & IWithCreateListing> {
 
  
  submit = async (values: IListingFormValues, {setSubmitting}: FormikActions<IListingFormValues>) =>{
    await this.props.createListing(values);
    setSubmitting(false);
  }
 
  render() {
    return <ListingForm submit={this.submit} />
  }
}

export const CreateListingConnector = withCreateListing(C);