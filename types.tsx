import ShopItemDetailsScreen from "./screens/ShopItemDetailsScreen";
import WalletScreen from "./screens/WalletScreen";
import ShopScreen from "./screens/ShopScreen";
import MainScreen from "./screens/MainScreen";
import SfingksScreen from "./screens/SfingksScreen";
import TabTwoScreen from "./screens/TabTwoScreen";
import QuestDetailsScreen from "./screens/QuestDetailsScreen";
import QuestSectionListScreen from "./screens/QuestSectionListScreen";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Quests: undefined;
  Rewards: undefined;
};

export type TabOneParamList = {
  MainScreen: typeof MainScreen;
  WalletScreen: typeof WalletScreen;
  SfingksScreen: typeof SfingksScreen;
};

export type TabTwoParamList = {
  TabTwoScreen: typeof TabTwoScreen;
  QuestDetailsScreen: typeof QuestDetailsScreen;
  QuestSectionListScreen: typeof QuestSectionListScreen;
};

export type TabThreeParamList = {
  ShopScreen: typeof ShopScreen;
  WalletScreen: typeof WalletScreen;
  ShopItemDetailsScreen: typeof ShopItemDetailsScreen;
};
