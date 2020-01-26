import {createSwitchNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import ShoppingCartScreen from "../ShoppingCartScreen";


const ShoppingCartScreenRouter = createStackNavigator({
        ShoppingCartScreen:{
            screen: ShoppingCartScreen,
        }
    },
    {
        initialRouteName: 'ShoppingCartScreen',
    }
);

export default ShoppingCartScreenRouter;
