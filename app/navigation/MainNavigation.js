import {createSwitchNavigator} from "react-navigation";
import AuthNavigate from "./AuthNavigation/AuthNavigate";
import UserNavigate from "./UserNavigation/UserNavigate";
export default MainNavigation = createSwitchNavigator({
        Start: AuthNavigate,
        User: UserNavigate,
    },
    {
        initialRouteName: "Start"

    });