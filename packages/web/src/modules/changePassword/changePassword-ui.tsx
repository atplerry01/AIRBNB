// https://github.com/jaredpalmer/formik
import * as React from 'react';
import { Form as AntForm, Icon, Button } from 'antd';
import { withFormik, FormikProps, Field, Form } from 'formik';
import { InputField } from '../shared/inputField';
import { INormalizedErrorMap } from '../types/normalizedErrorMap';
import { changePasswordSchema } from '@abb/common';
import { ForgotPasswordChangeMutationVariables } from '../../schemaTypes';

const FormItem = AntForm.Item;

interface FormValues {
  newPassword: string;
}

interface Props {
  token: string;
  onFinish: () => void;
  submit: (values: ForgotPasswordChangeMutationVariables) => Promise<INormalizedErrorMap | null>;
}

class C extends React.Component<FormikProps<FormValues> & Props> {
  render() {
   
    return (
      <Form style={{ display: 'flex' }}>
        <div style={{ width: 400, margin: 'auto' }}>

         <Field 
         name="newPassword"
         type="password"
         prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
         placeholder="New password" 
        component={InputField} />

          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
               Change Password
            </Button>
          </FormItem>
        </div>
      </Form>
    );
  }
}


export const ChangePasswordView = withFormik<Props, FormValues>({
  validationSchema: changePasswordSchema,
  mapPropsToValues: () => ({ newPassword: '' }),
  handleSubmit: async ({ newPassword }, { props, setErrors }) => {
    const errors = await props.submit({newPassword, key: props.token});
    if (errors) {
      setErrors(errors);
    } else{
      props.onFinish();
    }
  }
})(C);
