import * as React from 'react';
import { CreateMessage } from './createMessage';
import { Formik, Form, Field } from 'formik';
import { InputField } from '../../../modules/shared/inputField';

interface IFormValues {
  text: string;
}

interface Props {
  listingId: string;
}
export class InputBar extends React.PureComponent<Props> {
  render() {
    const { listingId } = this.props;

    return (
      <CreateMessage>
        {({ createMessage }) => (
          <Formik<IFormValues>
            initialValues={{ text: '' }}
            onSubmit={ async ({text}, {resetForm}) => {
             await createMessage({
                variables: {
                  message: {
                    text,
                    listingId
                  }
                }
              });
              resetForm();
            }}
          >
            {() => <Form>
                <Field name="text" component={InputField} />
                <button type="submit">send message</button>
            </Form>}
          </Formik>
        )}
      </CreateMessage>
    );
  }
}
