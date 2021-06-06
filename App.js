import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { LogBox, Platform, StatusBar, Text, TextInput, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { setCustomText } from "react-native-global-props";
import { ModalPortal } from 'react-native-modals';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { ActionCreators } from "./app/actions/index";
import { Images } from "./app/assets/images";
import * as Utils from "./app/lib/utils";
import appReducer from "./app/reducers/index";
import RootStackCreator from "./app/routes/index";

const store = createStore(appReducer, applyMiddleware(/*middleware, */));
const customTextProps = { style: { fontFamily: "Nunito-Regular" } };
setCustomText(customTextProps);

global.userData = null;
global.firstTimeAccess = 'yes';
global.deviceType = DeviceInfo.isTablet() ? 'tablet' : 'phone';
global.avatar = null;
global.activeScreen = null;

export default function App () {

	const [ isReady, setIsReady ] = useState(false);

	const initializeApp = async () => {
		Text.defaultProps.allowFontScaling = false;
		TextInput.defaultProps.allowFontScaling = false;
		/**
		 * ===========================
		 */

		let appUserData = await Utils.getStateAsyncStorage("appData");
		global.firstTimeAccess = await Utils.getStateAsyncStorage("firstTimeAccess");
		if (appUserData) {

			console.log("appUserData", appUserData.id, '==', appUserData.full_name)
			store.dispatch(ActionCreators.setInitialState(appUserData));
			global.userData = appUserData.userData;

			if (appUserData.userData.image != undefined && appUserData.userData.image != null) {
				global.avatar = { uri: appUserData.userData.image };
			} else {
				global.avatar = Images.avatar
			}
		} else {
			global.avatar = Images.avatar
		}
		setIsReady(true);
		if (Platform.OS === "android") {
			await Utils.requestStoragePermission();
			StatusBar.setBackgroundColor("#ffffff", false);
		}
		StatusBar.setHidden(false);
		StatusBar.setBarStyle("dark-content", true);
		SplashScreen.hide();
	}

	useEffect(() => {
		LogBox.ignoreLogs([ 'Animated: `useNativeDriver`' ]);
		initializeApp()
	})

	let appState = store.getState();
	let signedIn = false;
	try {
		signedIn = appState.appData.userData.token.length > 0 ? true : false;
	} catch (error) {
		signedIn = false;
	}
	if (isReady) {
		return (
			<Provider store={ store }>
				{Platform.OS == "ios" ? <SafeAreaView style={ { flex: 0, backgroundColor: '#ffffff' } } /> : null }
				<NavigationContainer>
					<RootStackCreator signedIn={ signedIn } />
				</NavigationContainer>
				<ModalPortal />
			</Provider>
		);
	} else {
		return <View />;
	}
}