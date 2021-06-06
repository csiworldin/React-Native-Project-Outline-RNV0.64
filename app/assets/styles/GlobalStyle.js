import { Platform, StyleSheet } from "react-native";
import * as Utils from "../../lib/utils";
import { Colors } from "./Colors";

export const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  imageBackground: {
    width: Utils.width,
    height: Utils.height,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: Colors.White
  },
  scrollContainer: {
    width: '100%',
    flex: 1,
    paddingHorizontal: Utils.moderateScale(15),
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.Container
  },
  card: {
    borderRadius: Utils.perfectSize(10),
    paddingVertical: Utils.perfectSize(5),
    paddingHorizontal: Utils.perfectSize(3),
    margin: Utils.perfectSize(2),
    fontSize: Utils.perfectSize(14),
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Colors.Gray1,
    shadowOffset: { width: 0, height: 0.8 * 6 },
    shadowOpacity: 0.28,
    shadowRadius: 0.9 * 1,
    elevation: 3
  },
  cardWhite: {
    backgroundColor: Colors.White,
    borderColor: Colors.White
  },
  cardInfo: {
    backgroundColor: Colors.Info,
    borderColor: Colors.Info
  },
  cardError: {
    backgroundColor: Colors.Error,
    borderColor: Colors.Error
  },
  cardWarning: {
    backgroundColor: Colors.Warning,
    borderColor: Colors.Warning
  },
  cardSuccess: {
    backgroundColor: Colors.Success,
    borderColor: Colors.Success
  },
  cardSeparator: {
    backgroundColor: Colors.BorderInactive
  },
  header: {
    alignItems: 'center',
    alignContent: 'center',
    borderWidth: 0,
    paddingHorizontal: Utils.moderateScale(15),
    backgroundColor: Colors.Background,
    height: Utils.perfectSize(55),
    width: Utils.width,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: Utils.moderateVerticalScale(10),
    ...Platform.select({
      ios: {
        shadowColor: Colors.Black,
        shadowOffset: { width: 0, height: 0.5 * 2 },
        shadowRadius: 0.9 * 2,
        shadowOpacity: 0.25,
        elevation: 0
      },
      android: {
        shadowColor: Colors.Black,
        shadowOffset: { width: 0, height: 0.5 * 2 },
        shadowRadius: 0.9 * 2,
        shadowOpacity: 0.25,
        elevation: 0
      }
    })
  },
  headerBody: {
    height: Utils.perfectSize(45),
    flex: 8,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "flex-start",
    marginHorizontal: Utils.moderateScale(5)
  },
  headerText: {
    textAlignVertical: 'center',
    fontSize: Utils.perfectSize(20),
    marginHorizontal: Utils.moderateScale(10),
    fontFamily: 'Nunito-SemiBold'
  },
  headerIcon: {
    alignSelf: 'center',
    width: Utils.perfectSize(10),
    height: Utils.perfectSize(16)
  },
  headerAvatar: {
    alignSelf: 'center',
    width: Utils.perfectSize(40),
    height: Utils.perfectSize(40)
  },
  headerIconContainer: {
    flex: 0.5,
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: Utils.perfectSize(5)
  },
  headerAvatarContainer: {
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Primary,
    height: Utils.perfectSize(40),
    width: Utils.perfectSize(40),
    borderRadius: Utils.perfectSize(20)
  },
  dialogStyle: {
    borderRadius: Utils.perfectSize(45),
    width: "90%",
    padding: 0,
    borderBottomColor: Colors.Gray6,
    borderBottomWidth: 1,
    borderLeftColor: Colors.Gray6,
    borderLeftWidth: 1,
    borderRightColor: Colors.Gray6,
    borderRightWidth: 1,
    shadowColor: Colors.Gray6,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.92,
    shadowRadius: 5.46,
    elevation: 9,
  },
  dialogContentContainer: {
    borderRadius: Utils.perfectSize(10),
    padding: 0,
    margin: 0,
    backgroundColor: 'rgba(252, 87, 255, 0)',
    width: '100%'
  },
  dialogContainer: {
    padding: Utils.perfectSize(10),
    marginVertical: Utils.perfectSize(5),
    borderRadius: Utils.perfectSize(45),
    justifyContent: "center",
    alignContent: "center",
    width: '98%',
    alignItems: "center",
    alignSelf: "center",
  },
  contentHeadingContainer: {
    width: Utils.width,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: Utils.perfectSize(45),
    paddingVertical: Utils.perfectSize(10),
    backgroundColor: Colors.White
  },
  contentHeading: {
    borderRadius: Utils.perfectSize(20),
    backgroundColor: Colors.ContentHeadingColor,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Utils.perfectSize(45),
    paddingVertical: Utils.perfectSize(5)
  },
  contentHeadingText: {
    color: Colors.Primary,
    fontSize: Utils.perfectSize(14),
  }
});
