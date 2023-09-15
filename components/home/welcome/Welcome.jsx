import { useState } from "react";
  // useState hook for UI components (View, Text, TextInput...)

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { useRouter } from "expo-router";

import styles from './welcome.style'
// import styles from constants
import { icons, SIZES } from "../../../constants";

// define variables
const jobTypes = ["Full-time", "Part-time", "Contractor"];


// Welcome functional component takes three props as arguments: searchTerm, setSearchTerm, & handleClick
const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello there!</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;

// Welcome component NOTES:
//   - useState hook to manage a piece of local component state (activeJobType). State variable is initially set to "Full-time."
//   -Display a welcome message
//   - Component rendering:
  //         - Search Input: It renders a search input field (TextInput) for users to enter search queries. The value of the input is controlled by the searchTerm prop, and the onChangeText handler is used to update the search term.

  //         - Search Button: A touchable button (TouchableOpacity) with a search icon (Image) is displayed next to the search input. The onPress event handler is set to the handleClick function, which is likely used for triggering a search action.

  //         - Job Type Tabs: A horizontal list of job type tabs is rendered using FlatList. Each tab is a TouchableOpacity containing the job type text. The renderItem function dynamically styles the tabs based on whether they are active or not. When a tab is pressed, it updates the activeJobType state and navigates to a specific route using the router.push method.

//   - Key Extraction: The keyExtractor prop of FlatList is used to specify how items in the jobTypes array should be identified. In this case, it simply uses the job type itself as the unique key.
