import * as React from 'react'
import { Field } from 'formik';
import { InputField } from '../../../shared/inputField';
import { DropzoneField } from '../../../shared/DropzoneField';



export const Page1 = () => (
    <>
     <Field name="name" label="Name" placeholder="Name" component={InputField}  />
     <Field name="category" label="Category" placeholder="Category" component={InputField}  />
     <Field name="description" label="Description" placeholder="Description" component={InputField}  />  
     <Field name="picture" component={DropzoneField}  />   
    </>
) ;

