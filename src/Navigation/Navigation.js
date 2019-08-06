import HomeScreen from "../../Homescreen/Homescreen";
import DetailsScreen from "../../Homescreen/DetailsScreen";
import BioScreen from "../../Homescreen/BioScreen";
import EmployeeDirectory from "../../Homescreen/EmployeeDirectory";
import HomerSimpson from "../../Profiles/HomerSimpson";
import BartSimpson from "../../Profiles/BartSimpson";
import Login from "../../Homescreen/Login";
import BallBounce from "../../Homescreen/BallBounce";
import OverlayPage from "../../Homescreen/OverlayPage";
import Rankings from "../../Homescreen/Rankings";

import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Home: HomeScreen,
    Details: DetailsScreen,
    Bio: BioScreen,
    EmployeeDirectory: EmployeeDirectory,
    HomerSimpson: HomerSimpson,
    BartSimpson: BartSimpson,
    BallBounce: BallBounce,
    OverlayPage: OverlayPage, 
    Rankings: Rankings
  },
  {
    initialRouteName: "Rankings"
  }
);

export default createAppContainer(AppNavigator);
