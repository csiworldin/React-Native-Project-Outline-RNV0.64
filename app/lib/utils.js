import React from "react";
import { Dimensions, Image, PermissionsAndroid, StyleSheet, Text, StatusBar, Platform } from "react-native";
import { Config } from "../config/appConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFetchBlob from 'rn-fetch-blob';
import { create, PREDEF_RES } from 'react-native-pixel-perfect';

const { width, height } = Dimensions.get("window");
const guidelineBaseWidth = 412;
const guidelineBaseHeight = 870;
const isLargeScreen = width >= 700;
const designResolution = {
	width: 412,
	height: 870
}

const iPadDesignResolution = {
	width: 412,
	height: 870
}
// const perfectSize = create(PREDEF_RES.iphone8P.px);

const perfectSize = create(isLargeScreen ? iPadDesignResolution : designResolution);

const scale = size => (width / guidelineBaseWidth) * size;

const verticalScale = size => (height / guidelineBaseHeight) * size;

const moderateScale = (size, factor = 0.25) => size + (scale(size) - size) * factor;

const moderateVerticalScale = (size, factor = 0.25) => size + (verticalScale(size) - size) * factor;


const getStateAsyncStorage = async (item = "appData") => {
	try {
		let savedState = await AsyncStorage.getItem(item);
		if (savedState !== null) {
			let parsedState = await JSON.parse(savedState);
			return parsedState;
		} else {
			return false;
		}
	} catch (error) {
		console.warn("Error occurred while retrieving state. Error: " + error);
		return false;
	}
}

const saveStateAsyncStorage = async (data, key = "appData") => {
	try {
		await AsyncStorage.setItem(key, JSON.stringify(data));
		return true;
	} catch (error) {
		console.warn("Error occurred while saving state. Error: " + error);
		return false;
	}
}

const requestStoragePermission = async () => {
	if (Platform.OS == "android") {
		try {
			const permissions = await PermissionsAndroid.requestMultiple([ PermissionsAndroid.PERMISSIONS.CAMERA, PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE ]);
			if (permissions[ PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE ] === PermissionsAndroid.RESULTS.GRANTED && permissions[ PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE ] === PermissionsAndroid.RESULTS.GRANTED && permissions[ PermissionsAndroid.PERMISSIONS.RECORD_AUDIO ] === PermissionsAndroid.RESULTS.GRANTED) {
				return true;
			} else {
				return false;
			}
		} catch (err) {
			console.warn("Permission error : ", err);
			return false;
		}
	} else {
		return true
	}
}

const getKeyByValue = (object, value) => {
	return Object.keys(object).find(key => object[ key ] === value);
}

const toUpperCaseFirst = (string) => {
	try {
		return string.charAt(0).toUpperCase() + string.slice(1);
	} catch (e) {
		return string
	}
}

const wait = (ms) => {
	let start = new Date().getTime();
	let end = start;
	while (end < start + ms) {
		end = new Date().getTime();
	}
}

const htmlRender = (rawData, zoom = true) => {
	let data = '';
	if (zoom) {
		data += '<html> <head><meta name="viewport" content="width=device-width, initial-scale=1"> </head> <body>';
	} else {
		data += '<html> <head><meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no"> </head> <body>';
	}
	data += rawData;
	data += '</body><script>window.onbeforeunload = function () {window.scrollTo(0, 0); };</script></html>'
	return data;
}

const htmlVideoRender = (rawData) => {
	let data = `<html><head><meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no" /></head><body> <video style="width:100%" controls controlslist="nodownload"> <source src="${ rawData }" type="video/mp4" /> Your browser does not support the video element. </video></body></html>`
	return data
}

const htmlAudioRender = (rawData) => {
	let data = '';
	data += '<html><head><meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no" /><style>.container{width:auto }.row{width:auto;display:flex;margin-bottom:10}.xs-center{width:auto;align-content:center;align-items:center;align-self:center}.btn{display:inline-block;margin:0 10;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;padding:6px 12px;font-size:14px;line-height:1.42857143;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;background-color:#f90200;border-color:#f90200}</style></head><body><div class="container"><div class="row xs-center"> ';
	data += ` <audio id="myAudio" controls controlslist="nodownload"> <source src="${ rawData }" type="audio/mpeg" /> Your browser does not support the audio element. </audio>`;
	data += '</div><div class="row xs-center"> <button type="button" class="btn btn-default" onclick="setPlaySpeed(1)">Play at 1x</button> <button type="button" class="btn btn-default" onclick="setPlaySpeed(1.5)">Play at 1.5x</button> <button type="button" class="btn btn-default" onclick="setPlaySpeed(2)">Play at 2x</button></div></div></body> <script>var aud=document.getElementById("myAudio");function setPlaySpeed(speed){aud.playbackRate=speed;}</script> </html>'
	return data;
}

const renderAttachments = async (file) => {
	return new Promise(async function (resolve, reject) {
		if (Platform.OS == "ios") {
			resolve(`data:${ file.type };base64,${ file.data }`)
		} else {
			await RNFetchBlob.fs.readFile(file.uri, 'base64')
				.then((files) => {
					resolve(`data:${ file.type };base64,${ files }`)
				}).catch(e => {
					reject(e)
				})
		}
	})
}

const checkIfFileExists = (name = null) => {
	let path = Config.PDFDownloadPath;
	return new Promise(function (resolve, reject) {
		RNFetchBlob.fs.exists(path + name)
			.then((exists) => {
				resolve(exists)
			})
			.catch((err) => {
				console.log(err)
				reject(err);
			});
	})
}

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window');

let isIPhoneX_v = false;
let isIPhoneXMax_v = false;
let isIPhoneWithMonobrow_v = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
	if (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) {
		isIPhoneWithMonobrow_v = true;
		isIPhoneX_v = true;
	}

	if (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT) {
		isIPhoneWithMonobrow_v = true;
		isIPhoneXMax_v = true;
	}
}

const getStatusBarHeight = (skipAndroid) => {
	return Platform.select({
		ios: isIPhoneWithMonobrow_v ? 44 : 20,
		android: skipAndroid ? 0 : StatusBar.currentHeight,
		default: 0
	})
}

const getLanguageId = (language) => {
	const languageArr = global.languageArr || [];
	let finalLanguage = languageArr.filter(item => { return item.name == language })
	if (finalLanguage.length > 0) {
		return finalLanguage[ 0 ][ 'id' ]
	} else {
		return 1
	}
}

const getLanguageLabel = (label, languageId) => {
	let languageArray = []
	try {
		languageArray = JSON.parse(global.languageContentArr) || []
	} catch (e) {
		console.log("e")
	}
	let labelArray = languageArray.filter(item => { return item.label_name.toLowerCase() == label.toLowerCase() });

	if (labelArray.length) {
		let displayLabel = labelArray[ 0 ][ 'text' ].filter(item => { return item.language_id == languageId })
		// console.log("displayLabel", displayLabel, languageId)
		if (displayLabel.length > 0) {
			return displayLabel[ 0 ][ 'language_text' ]
		} else {
			return label
		}
	} else {
		return label
	}
}

const timeStringToHumanDate = (totalSeconds) => {
	let hours = Math.floor(totalSeconds / 3600);
	totalSeconds %= 3600;
	let minutes = Math.floor(totalSeconds / 60);
	let seconds = totalSeconds % 60;

	// If you want strings with leading zeroes:
	minutes = String(minutes).padStart(2, "0");
	hours = String(hours).padStart(2, "0");
	seconds = String(seconds).padStart(2, "0");
	return hours + ":" + minutes + ":" + seconds;
}

const timeStringToMinutes = (totalSeconds) => {
	// totalSeconds %= 3600;
	let minutes = Math.floor(totalSeconds / 60);
	minutes = String(minutes).padStart(2, "0");
	return minutes;
}

const extractHTMLContent = (html) => {
	return html.replace(/<[^>]+>/g, '')
};

const getQueryVariable = (url, name) => {
	name = name.replace(/[\[\]]/g, '\\$&');
	let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[ 2 ]) return '';
	return decodeURIComponent(results[ 2 ].replace(/\+/g, ' '));
}

const truncateString = (str, n) => {
	return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
};

export {
	width,
	height,
	perfectSize,
	scale,
	verticalScale,
	moderateScale,
	moderateVerticalScale,
	saveStateAsyncStorage,
	getStateAsyncStorage,
	requestStoragePermission,
	getKeyByValue,
	toUpperCaseFirst,
	wait,
	htmlRender,
	htmlVideoRender,
	htmlAudioRender,
	renderAttachments,
	checkIfFileExists,
	getStatusBarHeight,
	getLanguageId,
	getLanguageLabel,
	timeStringToHumanDate,
	timeStringToMinutes,
	extractHTMLContent,
	getQueryVariable,
	truncateString
};
