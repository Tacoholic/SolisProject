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
import MargeSimpson from "../../Profiles/MargeSimpson"
import LisaSimpson from "../../Profiles/LisaSimpson";
import MaggieSimpson from "../../Profiles/MaggieSimpson";
import SantasHelper from "../../Profiles/SantasHelper";
import BarneyGumble from "../../Profiles/BarneyGumble";
import MrBurns from "../../Profiles/MrBurns";
import RalphWiggum from "../../Profiles/RalphWiggum";
import KentBrockman from "../../Profiles/KentBrockman";
import OttoMan from "../../Profiles/OttoMan";
import Scratchy from "../../Profiles/Scratchy";
import HomerGallery from "../../Profiles/HomerGallery";
import BartGallery from "../../Profiles/BartGallery";


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
    MargeSimpson: MargeSimpson,
    LisaSimpson: LisaSimpson,
    MaggieSimpson: MaggieSimpson,
    SantasHelper: SantasHelper,
    BarneyGumble: BarneyGumble,
    MrBurns: MrBurns,
    KentBrockman: KentBrockman,
    RalphWiggum: RalphWiggum,
    OttoMan: OttoMan,
    Scratchy: Scratchy,
    HomerGallery: HomerGallery,
    BartGallery: BartGallery,
    BallBounce: BallBounce,
    OverlayPage: OverlayPage, 
    Rankings: Rankings
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







