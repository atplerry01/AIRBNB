// https://github.com/jaredpalmer/formik
import * as React from 'react';
import { Form as AntForm, Icon, Button } from 'antd';
import { withFormik, FormikProps, Field, Form } from 'formik';
import { InputField } from '../shared/inputField';
import { INormalizedErrorMap } from '../types/normalizedErrorMap';

const FormItem = AntForm.Item;

interface FormValues {
  email: string;
}

interface Props {
  onFinish: () => void;
  submit: (values: FormValues) => Promise<INormalizedErrorMap | null>;
}

class C extends React.Component<FormikProps<FormValues> & Props> {
  render() {
   
    return (
      <Form style={{ display: 'flex' }}>
        <div style={{ width: 400, margin: 'auto' }}>

        <Field 
         name="email"
         prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
         placeholder="Email" 
        component={InputField}  />


          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
               Reset Password
            </Button>
          </FormItem>
        </div>
      </Form>
    );
  }
}


export const ForgotPasswordView = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  }
})(C);
