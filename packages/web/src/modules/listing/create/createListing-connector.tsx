import * as React from 'react';
// tslint:disable-next-line:no-implicit-dependencies
import { RouteComponentProps } from 'react-router';
import { Form as AntForm, Button } from 'antd';
import { Form, Formik, FormikActions } from 'formik';

import { withCreateListing, IWithCreateListing } from './createListing';



import { Page1 } from './pages/page1';
import { Page2 } from './pages/page2';
import { Page3} from './pages/page3';
import { Link } from 'react-router-dom';

const FormItem = AntForm.Item;

interface IFormValues{
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

// tslint:disable-next-line:jsx-key
const pages = [<Page1 />, <Page2 />, <Page3 />];

class C extends React.PureComponent<
RouteComponentProps<{}> & IWithCreateListing, 
IState> {
 
  state = {
    page: 0
  };


  submit = async (values: IFormValues, {setSubmitting}: FormikActions<IFormValues>) =>{
    await this.props.createListing(values);
    setSubmitting(false);
  }

  nextPage = () => this.setState(state => ({ page: state.page + 1}));
 
  render() {
    return (     
     <Formik<IFormValues> 
     initialValues={{
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

     }} onSubmit={this.submit}>
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

export const CreateListingConnector = withCreateListing(C);