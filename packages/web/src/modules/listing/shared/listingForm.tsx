import * as React from 'react';
import { Form as AntForm, Button } from 'antd';
import { Form, Formik, FormikActions } from 'formik';


import { Page1 } from './pages/page1';
import { Page2 } from './pages/page2';
import { Page3} from './pages/page3';
import { Link } from 'react-router-dom';

const FormItem = AntForm.Item;

export interface IListingFormValues{
  pictureUrl: string | null;
  picture: File | null;
  name: string;
  category:  string;
  description:  string;
  price: number;
  beds: number;
  guests: number;
  latitude: number;
  longitude: number;
  amenities:  string[];
}

interface IState {
  page: number;
}

interface IProps {
    initialValues?: IListingFormValues;
    submit: (data: IListingFormValues, actions: FormikActions<IListingFormValues>) => Promise<void>;
}

// tslint:disable-next-line:jsx-key
const pages = [<Page1 />, <Page2 />, <Page3 />];

export const defaultListingFormValues ={
    pictureUrl: null,
    picture: null, 
    name: '',
    category: '',
    description: '',
    price: 0,
    beds: 0,
    guests: 0,
    latitude: 0,
    longitude: 0,
    amenities:  []  
   };


export class ListingForm extends React.PureComponent<IProps, IState> {
 
  state = {
    page: 0
  };


  nextPage = () => this.setState(state => ({ page: state.page + 1}));
 
  render() {

    const {submit,  initialValues = defaultListingFormValues } = this.props;

    return (     
     <Formik<IListingFormValues> 
     initialValues={ initialValues } 
     onSubmit={submit}>
       {
         ({isSubmitting, values}) => console.log(values) as any || (    
          <Form style={{ display: 'flex' }}>
          <Link to="/logout">Logout</Link>
        <div style={{ width: 400, margin: 'auto' }}>

            {pages[this.state.page]}  
     

          <FormItem>
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
            { this.state.page === pages.length - 1 ? (
              <div>
              <Button type="primary" htmlType="submit" disabled={isSubmitting}>
                  Create Listing
               </Button>
               </div>
            ) : (
              <Button type="primary" onClick={this.nextPage}>
               Next Page
              </Button>
            )
           }
           </div>
          </FormItem>
        </div>
      </Form>

         )
       }
     </Formik>
    )
  }
}