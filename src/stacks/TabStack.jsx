import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '@stacks/HomeStack';
import ProfileStack from '@stacks/ProfileStack';
import '@locales/index';
import { useTranslation } from 'react-i18next';
import TabBar from './components/TabBar';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      tabBar={({ state, descriptors, navigation }) => (
        <TabBar
          state={state}
          descriptors={descriptors}
          navigation={navigation}
        />
      )}>
      <Tab.Screen
        options={{ headerShown: false, title: t('Home') }}
        name="Home"
        component={HomeStack}
      />

      <Tab.Screen
        options={{ headerShown: false, title: t('Favorites') }}
        name="Favorites"
        component={HomeStack}
      />

      <Tab.Screen
        options={{ headerShown: false, title: t('Basket') }}
        name="Basket"
        component={HomeStack}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          title: t('Profile'),
        }}
        name="Profile"
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
