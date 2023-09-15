import { useState } from 'react';

import { View, ScrollView, SafeAreaView } from 'react-native';
    // SafeAreaView: a wrapper component used in React Native to ensure that the content is displayed within the safe area of the device screen
    // ScrollView: a scrollable container that allows the user to scroll through its child components

import { Stack, useRouter } from 'expo-router';
    // useRouter: can be used to navigate between different screens in the app
    // Stack.Screen component: navigation stack sets various options for the screen's header (styles, icons, buttons)

// import styles
import { COLORS, icons, images, SIZES } from '../constants';

// import components
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}> 
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
                    ),
                    headerTitle: "",
                    }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                    <View  style={{
                    flex: 1,
                    padding: SIZES.medium,
                    }}>
                    <Welcome

                    />
                    <Popularjobs/>
                    <Nearbyjobs/>
                    </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home;



// Home Component Notes:
//     <Welcome />: displays a welcome message
//     <Popularjobs />: displays a list of popular job listings
//     <Nearbyjobs />: displays a list of nearby job listings 
