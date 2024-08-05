import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const InfoIcon = (props) => (
  <MaterialIcons name="info-outline" size={28} color="white" {...props} />
);

export const HomeIcon = (props) => (
  <FontAwesome name="home" size={28} color="white" {...props} />
);

export const SearchIcon = (props) => (
  <FontAwesome name="search" size={28} color="white" {...props} />
);
