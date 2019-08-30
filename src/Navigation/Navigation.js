import HomeScreen from "../../Homescreen/Homescreen";
import DetailsScreen from "../../Homescreen/DetailsScreen";
import BioScreen from "../../Homescreen/BioScreen";
import Login from "../../Homescreen/Login";
import BallBounce from "../../Homescreen/BallBounce";
import OverlayPage from "../../Homescreen/OverlayPage";
import Rankings from "../../Homescreen/Rankings";
import CircleSize from "../../Homescreen/CircleSize";
import RegForm from "../../Signup/RegForm";
import CharacterDirectory from "../../Homescreen/CharacterDirectory";
import CharacterProfiles from "../../Homescreen/CharacterProfiles";


import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    RegForm: RegForm,
    Home: HomeScreen,
    Details: DetailsScreen,
    Bio: BioScreen,
    CharacterProfiles: CharacterProfiles,
    CharacterDirectory: CharacterDirectory,
    BallBounce: BallBounce,
    OverlayPage: OverlayPage, 
    Rankings: Rankings,
    CircleSize: CircleSize,
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
        headerStyle: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
);

export default createAppContainer(AppNavigator);









