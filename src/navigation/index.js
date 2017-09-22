/**
 * App Navigation
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Actions, Drawer, Stack, Scene, ActionConst } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';

// Components
import DrawerMenu from '@containers/ui/DrawerContainer';

// Scenes
import AppLaunch from '@containers/Launch/LaunchContainer';
import Placeholder from '@components/general/Placeholder';
import AuthScenes from './auth';
import TabsScenes from './tabs';

/* Routes ==================================================================== */
export default Actions.create(
  <Stack key={'root'} {...AppConfig.navbarProps}>
    <Scene
      hideNavBar
      key={'splash'}
      component={AppLaunch}
      analyticsDesc={'AppLaunch: Launching App'}
    />

    {/* Auth */}
    {AuthScenes}

    {/* Main App */}
    <Stack key={'app'} {...AppConfig.navbarProps} hideNavBar type={ActionConst.RESET}>
      {/* Drawer Side Menu */}
      <Drawer key={'home'} contentComponent={DrawerMenu} initial={'tabBar'}>
        {/* Tabbar */}
        {TabsScenes}
      </Drawer>

      {/* General */}
      <Scene
        clone
        key={'comingSoon'}
        title={'Coming Soon'}
        component={Placeholder}
        analyticsDesc={'Placeholder: Coming Soon'}
      />
    </Stack>
  </Stack>,
);
