import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createBottomTabNavigator} from 'react-navigation';
import HomeScreenStack from "../HomeScreenConfigRoute/HomeScreenStack";
import IconHomeComponent from "../../../Icons/IconHomeComponent";

const homeScreenBottomTab = createBottomTabNavigator(
    {
        HomeScreen: {
            screen: HomeScreenStack,
        },
    },
    {
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            activeBackgroundColor: '#fff330',
            pressColor: '#000',
            inactiveColor: '#3e2465',
            barStyle: { backgroundColor: '#694fad' },
            pressOpacity: '#000'
        },
        defaultNavigationOptions:{
            tabBarIcon: ()=> <IconHomeComponent />
        }
    }
);

export default homeScreenBottomTab;