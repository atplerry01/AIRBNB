import * as React from 'react'
import { Field } from 'formik';
import { TagField } from '../../../shared/tagField';
import { LocationField } from '../../../shared/locationField';


export const Page3 = () => (
    <>
     <Field name="tmp" component={LocationField}  />   
     <Field name="amenities" label="Amenities" placeholder="Amenities" component={TagField}  />    
    </>
) ;
