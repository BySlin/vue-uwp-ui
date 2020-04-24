import Animate from "./components/Animate";
import Theme from "./components/Theme";
import Button from "./components/Button";
import AppBarButton from "./components/AppBarButton";
import Icon from "./components/Icon";
import Tooltip from "./components/Tooltip";
import Toast from "./components/Toast";
import Separator from "./components/Separator";
import AppBarSeparator from "./components/AppBarSeparator";
import CheckBox from "./components/CheckBox";
import Link from "./components/Link";
import IconButton from "./components/IconButton";
import HyperLink from "./components/HyperLink";
import Img from "./components/Img";
import Slider from "./components/Slider";
import Toggle from "./components/Toggle";
import TextBox from "./components/TextBox";
import PasswordBox from "./components/PasswordBox";
import RadioButton from "./components/RadioButton";
import CommandBar from "./components/CommandBar";
import ListView from "./components/ListView";
import AutoSuggestBox from "./components/AutoSuggestBox";
import ContentDialog from "./components/ContentDialog";
import Dialog from "./components/Dialog";
import DropDownMenu from "./components/DropDownMenu";
import Swipe from "./components/Swipe";
import FlipView from "./components/FlipView";
import Flyout from "./components/Flyout";
import FloatNav from "./components/FloatNav";
import Menu from "./components/Menu";
import ProgressBar from "./components/ProgressBar";
import ProgressRing from "./components/ProgressRing";
import RatingControl from "./components/RatingControl";
import ScrollReveal from "./components/ScrollReveal";
import SplitView from "./components/SplitView";
import SplitViewCommand from "./components/SplitViewCommand";
import Tabs from "./components/Tabs";
import TransformCard from "./components/TransformCard";
import TreeView from "./components/TreeView";
import NavigationView from "./components/NavigationView";
import TimePicker from "./components/TimePicker";
import DatePicker from "./components/DatePicker";
import CalendarView from "./components/CalendarView";
import CalendarDatePicker from "./components/CalendarDatePicker";
import ColorPicker from "./components/ColorPicker";

export const components = {
  Animate,
  Theme,
  Button,
  AppBarButton,
  Icon,
  Tooltip,
  Toast,
  Separator,
  AppBarSeparator,
  CheckBox,
  Link,
  IconButton,
  HyperLink,
  Img,
  Slider,
  Toggle,
  TextBox,
  PasswordBox,
  RadioButton,
  CommandBar,
  ListView,
  AutoSuggestBox,
  ContentDialog,
  Dialog,
  DropDownMenu,
  Swipe,
  FlipView,
  Flyout,
  FloatNav,
  Menu,
  ProgressBar,
  ProgressRing,
  RatingControl,
  ScrollReveal,
  SplitView,
  SplitViewCommand,
  Tabs,
  TransformCard,
  TreeView,
  NavigationView,
  TimePicker,
  DatePicker,
  CalendarView,
  CalendarDatePicker,
  ColorPicker
};

const install = function(Vue) {
  if (install.installed) {
    return;
  }
  Object.keys(components).forEach(key => {
    Vue.use(components[key].install);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
