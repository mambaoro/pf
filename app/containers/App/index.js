import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from 'containers/HomePage/Loadable';
import AboutMe from 'containers/AboutMe/Loadable';
import FrontEnd from 'containers/FrontEnd/Loadable';
import BackEnd from 'containers/BackEnd/Loadable';
import UiDesign from 'containers/UiDesign/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about-me" component={AboutMe} />
        <Route exact path="/front-end" component={FrontEnd} />
        <Route exact path="/back-end" component={BackEnd} />
        <Route exact path="/ui-design" component={UiDesign} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
