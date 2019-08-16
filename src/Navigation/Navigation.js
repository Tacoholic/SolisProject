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
import MargeGallery from "../../Profiles/MargeGallery";
import LisaGallery from "../../Profiles/LisaGallery";
import MaggieGallery from "../../Profiles/MaggieGallery";
import SantasGallery from "../../Profiles/SantasGallery";
import BarneysGallery from "../../Profiles/BarneysGallery";
import BurnsGallery from "../../Profiles/BurnsGallery";
import WiggumGallery from "../../Profiles/WiggumGallery";
import BrockmanGallery from "../../Profiles/BrockmanGallery";
import OttoGallery from "../../Profiles/OttoGallery";
import ScratchyGallery from "../../Profiles/ScratchyGallery";
import CircleSize from "../../Homescreen/CircleSize";
import ExampleView from "../../Animations/ExampleView";

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
    MargeGallery: MargeGallery,
    LisaGallery: LisaGallery,
    MaggieGallery: MaggieGallery,
    SantasGallery: SantasGallery,
    BarneysGallery: BarneysGallery,
    BurnsGallery: BurnsGallery,
    WiggumGallery: WiggumGallery,
    BrockmanGallery: BrockmanGallery,
    OttoGallery: OttoGallery, 
    ScratchyGallery: ScratchyGallery,
    BallBounce: BallBounce,
    OverlayPage: OverlayPage, 
    Rankings: Rankings,
    CircleSize: CircleSize,
    ExampleView: ExampleView
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









