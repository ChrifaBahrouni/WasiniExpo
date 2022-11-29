import react from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import "react-native-reanimated";
import HomeScreen from "../Screen/HomeScreen";
import Tabs from "./Tabs";
import Router from "./Router";
import CustomDrawer from "./CustomDrawer";
import Reservation from "../Screen/Reservation";
import Payment from "../Screen/payement";
// import Logout from "../Screen/Logout";
// import Exemple from "./Ecemple";

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        activeBackgroundColor: "#FFF",
        drawerActiveTintColor: "#F1F9",
      }}
    >
      <Drawer.Screen name={Router.Home} component={Tabs} />
      <Drawer.Screen name={Router.Resv} component={Reservation} />
      <Drawer.Screen name={Router.Pay} component={Payment} />
      {/* <Drawer.Screen name={Router.Exemple} /> */}
      {/* <Drawer.Screen name={Router.Log} /> */}
    </Drawer.Navigator>
  );
}
export default DrawerNav;