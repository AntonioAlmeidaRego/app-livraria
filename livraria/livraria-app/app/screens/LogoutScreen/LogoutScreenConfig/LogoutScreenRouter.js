import {createSwitchNavigator} from "react-navigation";
import LogoutScreen from "../LogoutScreen";


const LogoutScreenStackRouter = createSwitchNavigator(
    {
        LogoutScreen: {
            screen: LogoutScreen
        }
    },
    {
        initialRouteName: 'LogoutScreen',
    }
);


export default LogoutScreenStackRouter;
