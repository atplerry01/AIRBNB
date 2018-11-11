// https://github.com/jaredpalmer/formik
import * as React from 'react';
import { Form as AntForm, Icon, Button } from 'antd';
import { withFormik, FormikProps, Field, Form } from 'formik';
import { loginSchema } from '@abb/common';
import { InputField } from '../shared/inputField';
import { Link } from 'react-router-dom';
import { INormalizedErrorMap } from '../types/normalizedErrorMap';

const FormItem = AntForm.Item;

interface IFormValues {
  email: string;
  password: string;
}

interface Props {
  onFinish: () => void;
  submit: (values: IFormValues) => Promise<INormalizedErrorMap | null>;
}

class C extends React.Component<FormikProps<IFormValues> & Props> {
  render() {
   
    return (
      <Form style={{ display: 'flex' }}>
        <div style={{ width: 400, margin: 'auto' }}>

        <Field 
         name="email"
         prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
         placeholder="Email" 
        component={InputField}  />

          <Field 
         name="password"
         type="password"
         prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
         placeholder="Password" 
        component={InputField} />

          <FormItem>
          <Link className="login-form-forgot" to="/forgot-password">
              Forgot password
            </Link>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
               Login
            </Button>
          </FormItem>
          <FormItem>
            Or <Link to="/register">Register now!</Link>
          </FormItem>
        </div>
      </Form>
    );
  }
}


export const LoginView = withFormik<Props, IFormValues>({
  validationSchema: loginSchema,
  validateOnBlur: false,
  validateOnChange: false,
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  }
})(C);
