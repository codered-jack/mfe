import React from 'react';
import { Switch, Route , BrowserRouter} from 'react-router-dom';
import {StylesProvider,createGenerateClassName} from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

//for conflicting css (jss1,jss2) in production
const generateClassName = createGenerateClassName({
    productionPrefix:'ma',
})

export default ()=>{
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing}/>
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}