import Snackbar from "react-native-snackbar";

const success = (title = null, callback = null, buttonText = 'Ok') => {
    Snackbar.show({
        text: title,
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
            text: buttonText,
            textColor: 'green',
            onPress: () => { typeof callback === "function" && callback(); },
        },
    });
}

const error = (title = null, callback = null, buttonText = 'Ok') => {
    Snackbar.show({
        text: title,
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
            text: buttonText,
            textColor: 'red',
            onPress: () => { typeof callback === "function" && callback(); },
        },
    });
}

export {
    success,
    error
};

