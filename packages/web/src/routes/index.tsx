import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthRoute } from './authRoute';

import { RegisterConnector } from '../modules/register/register-connector';
import { LoginConnector } from '../modules/login/login-connector';
import { ForgotPasswordConnector } from '../modules/forgotPassword/forgotPassword-connector';
import { ChangePasswordConnector } from '../modules/changePassword/changePassword-connector';
import { CreateListingConnector} from '../modules/listing/create/createListing-connector';
import { TextPage } from '../modules/textPage';
import { FindListingConnector } from '../modules/listing/find/findListing-connector';
import { Logout } from '../modules/logout/logout';
import TestSub from '../modules/textSub';
import { ViewListingConnector } from '../modules/listing/view/viewListing-connector';
import { ViewMessageConnector } from '../modules/messages/view/viewMessage-connector';
import { UpdateListingConnector } from '../modules/listing/update/updateListing-connector';



export const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact={true} path="/register" component={RegisterConnector} />
        <Route exact={true} path="/login" component={LoginConnector} />
        <Route path="/logout" component={Logout} />
        <Route exact={true} path="/forgot-password" component={ForgotPasswordConnector} />
        <Route exact={true} path="/change-password/:key" component={ChangePasswordConnector} />
        <Route path="/m" component={TextPage} />
        <Route exact={true} path="/listings" component={FindListingConnector} />
        <Route path="/test-sub" component={TestSub} />
        <Route exact={true} path="/listing/:listingId" component={ViewListingConnector} />
        <Route exact={true} path="/listing/:listingId/chat" component={ViewMessageConnector} />
        <Route exact={true} path="/listing/:listingId/edit" component={UpdateListingConnector} />
        <AuthRoute path="/create-listing" component={CreateListingConnector} />
     
    </Switch>
    </BrowserRouter>
);

