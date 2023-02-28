import React, { lazy, Suspense } from 'react';

const LazySideNavBar = lazy(() => import('./SideNavBar'));

const SideNavBar = props => (
  <Suspense fallback={null}>
    <LazySideNavBar {...props} />
  </Suspense>
);

export default SideNavBar;
