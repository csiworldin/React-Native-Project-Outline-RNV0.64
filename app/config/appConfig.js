import RNFetchBlob from 'rn-fetch-blob';
import { Platform } from 'react-native';
import { originalName as appName } from "../../app.json";

const ENV = [ "local", "stage", "production" ];

export const Config = {
	/**
	 * Use index key according to the environment set
	 * 0: Local
	 * 1: Stage
	 * 2: Production
	 */
	Env: ENV[ 2 ],

	BaseURL: {
		local: {
			web: "",
			api: ""
		},
		stage: {
			web: "",
			api: ""
		},
		production: {
			web: "",
			api: ""
		}
	},

	FilePath: {
		avatar: "avatar/", //Replace with your server path or with your custom business logic		
	},

	PageSize: 10,
	DateFormat: "DD-MM-YYYY | LT",

	AndroidAPIKey: "",

	FileDownloadPathLocal: Platform.OS == "android" ? (`${ RNFetchBlob.fs.dirs.DownloadDir }/${ appName }/`) : (`${ RNFetchBlob.fs.dirs.DocumentDir }/${ appName }/`),

};