import React, { FunctionComponent } from 'react';
import { Global, createGlobal, styled } from '@storybook/theming';
import memoize from 'memoizerific';
import sizeMe from 'react-sizeme';

import { Route } from '@storybook/router';

import { State } from '@storybook/api';
import { Mobile } from './components/layout/mobile';
import { Desktop } from './components/layout/desktop';
import Nav from './containers/nav';
import Preview from './containers/preview';
import Panel from './containers/panel';
import Notifications from './containers/notifications';

import SettingsPages from './settings';

const createProps = memoize(1)(() => ({
  Nav,
  Preview,
  Panel,
  Notifications,
  pages: [
    {
      key: 'settings',
      render: () => <SettingsPages />,
      route: (({ children }) => (
        <Route path="/settings" startsWith>
          {children}
        </Route>
      )) as FunctionComponent,
    },
  ],
}));

const View = styled.div({
  position: 'fixed',
  overflow: 'hidden',
  height: '100vh',
  width: '100vw',
});

const App = React.memo<{
  viewMode: State['viewMode'];
  docsOnly: boolean;
  layout: State['layout'];
  panelCount: number;
  size: {
    width: number;
    height: number;
  };
}>(({ viewMode, docsOnly, layout, panelCount, size: { width, height } }) => {
  const props = createProps();

  let content;

  if (!width || !height) {
    content = (
      <div>
        {width} x {height}
      </div>
    );
  } else if (width < 600) {
    content = <Mobile {...props} viewMode={viewMode} options={layout} />;
  } else {
    content = (
      <Desktop
        {...props}
        viewMode={viewMode}
        options={layout}
        docsOnly={docsOnly}
        {...{ width, height }}
        panelCount={panelCount}
      />
    );
  }

  return (
    <View>
      <Global styles={createGlobal} />
      {content}
    </View>
  );
});

const SizedApp = sizeMe({ monitorHeight: true })(App);

App.displayName = 'App';

export default SizedApp;
