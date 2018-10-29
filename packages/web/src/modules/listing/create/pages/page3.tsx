import * as React from 'react'
import { Field } from 'formik';
import { InputField } from '../../../shared/inputField';
import { TagField } from '../../../shared/tagField';


export const Page3 = () => (
    <>
     <Field name="latitude" label="Latitude" placeholder="Latitude" component={InputField} useNumberComponent={true} />
     <Field name="longitude" label="Longitude" placeholder="Longitude" component={InputField} useNumberComponent={true} />
     <Field name="amenities" label="Amenities" placeholder="Amenities" component={TagField}  />    
    </>
) ;
