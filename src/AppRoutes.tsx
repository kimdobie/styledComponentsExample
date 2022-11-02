// Contains routing for entire application

import React, { ReactElement } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import ROUTES from './AppRouteNames';

import Home from './pages/Home';
import Version from './pages/Version';
import FourOhFour from './pages/FourOhFour';

import GlobalStyles from './pages/GlobalStyles';
import LocalStyles from './pages/LocalStyles';
import NativeTagsStyled from './pages/NativeTagsStyled';
import OtherComponent from './pages/OtherComponent';
import CSSModules from './pages/CSSModules';

const AppRoutes = (): ReactElement => (
  <>
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path='/home' element={<Navigate to={ROUTES.HOME} />} />
      <Route path={ROUTES.VERSION} element={<Version />} />
      <Route path={ROUTES.GLOBAL} element={<GlobalStyles />} />
      <Route path={ROUTES.LOCAL} element={<LocalStyles />} />
      <Route path={ROUTES.NATIVE_TAGS} element={<NativeTagsStyled />} />
      <Route path={ROUTES.STYLED_COMPONENT} element={<OtherComponent />} />
      <Route path={ROUTES.CSS_MODULES} element={<CSSModules />} />
      <Route path='*' element={<FourOhFour />} />
    </Routes>
  </>
);

export default AppRoutes;
