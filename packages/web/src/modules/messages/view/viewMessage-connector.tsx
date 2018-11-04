import * as React from 'react';
import { ViewMessages } from './viewMessages';
import { RouteComponentProps } from 'react-router-dom';
import { InputBar } from '../create/InputBar';

export class ViewMessageConnector extends React.PureComponent<
  RouteComponentProps<{ listingId: string }>
> {

  unsubscribe: () => void;

  render() {
    const {
      match: {
        params: { listingId }
      }
    } = this.props;

    return (
      <ViewMessages listingId={listingId}>
        {({ loading, messages, subscribe }) => {
          if (loading) {
            return <div>...loading</div>;
          }

          if(!this.unsubscribe) { 
            this.unsubscribe = subscribe() as any;
          }

          return (
            <div>
              {messages.map((m, i) => (
                <div key={`${i}-lm`}>{m.text}</div>
              ))}
              <InputBar listingId={listingId} />
              <button onClick={this.unsubscribe}>unsubscribe</button>
            </div>
          );
        }}
      </ViewMessages>
    );
  }
}
