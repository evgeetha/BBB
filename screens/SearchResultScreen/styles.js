import { Platform, StyleSheet } from 'react-native';
import { Layout, Colors } from '../../constants/';

export default StyleSheet.create({
	rowImage: {
		height: Layout.HEIGHT * 0.05,
		width: Layout.HEIGHT * 0.05,
		resizeMode: 'contain',
		borderWidth: 0.5,
		backgroundColor: Colors.white,
		borderColor: Colors.categorylistBorder,
		marginRight: Layout.HEIGHT * 0.007,
	},
	container: {
		backgroundColor: Colors.white,
	},
	backarrow: {
		color: Colors.white,
	},
	rightComponentStyle: {
		flexDirection: 'row',
		marginRight: Layout.moderateScale(10),
	},
	imagesSubView: {
		width: Layout.WIDTH * 0.9,
		backgroundColor: Colors.white,
		borderRadius: Layout.HEIGHT * 0.015,
		borderColor: '#cfcfcf',
		borderWidth: 0.5,
		overflow: 'hidden',
		flexDirection: 'row',
		marginTop: Layout.WIDTH * 0.05,
		marginRight: Layout.WIDTH * 0.05,
		marginLeft: Layout.WIDTH * 0.05,
	},
	rowImage: {
		height: Layout.WIDTH * 0.35,
		width: Layout.WIDTH * 0.35,
		borderRadius: Layout.HEIGHT * 0.015,
		resizeMode: 'contain',
		alignSelf: 'center',
	},
	favoriteIconSec: {
		position: 'absolute',
		top: Layout.moderateScale(10),
		right: Layout.moderateScale(10),
		width: Layout.moderateScale(26),
		height: Layout.moderateScale(26),
		borderRadius: Layout.moderateScale(13),
		backgroundColor: '#7f7f7f',
		borderWidth: 1,
		borderColor: '#7f7f7f',
		justifyContent: 'center',
		alignItems: 'center',
	},
	chatIconSec: {
		position: 'absolute',
		top: Layout.moderateScale(40),
		right: Layout.moderateScale(10),
		width: Layout.moderateScale(26),
		height: Layout.moderateScale(26),
		borderRadius: Layout.moderateScale(13),
		backgroundColor: '#7f7f7f',
		borderWidth: 1,
		borderColor: '#7f7f7f',
		justifyContent: 'center',
		alignItems: 'center',
	},
	userdetailSec: {
		height: Layout.WIDTH * 0.35,
		marginTop: Layout.moderateScale(3),
	},
	userItemDetailsSec: {
		flexDirection: 'row',
		marginTop: Layout.moderateScale(2),
		paddingBottom: Layout.moderateScale(7),
		borderBottomWidth: 0.3,
		borderBottomColor: '#cfcfcf',
		width: Layout.WIDTH * 0.52,
	},
	userProfileSec: {
		width: Layout.moderateScale(32),
	},
	userProfile: {
		width: Layout.moderateScale(25),
		height: Layout.moderateScale(25),
		borderRadius: Layout.moderateScale(12.5),
	},
	userOnlineOffline: {
		backgroundColor: 'green',
		width: Layout.moderateScale(8),
		height: Layout.moderateScale(8),
		borderRadius: Layout.moderateScale(4),
		position: 'absolute',
		bottom: 0,
		right: Layout.moderateScale(8),
	},
	userNameSec: {
		width: Layout.WIDTH * 0.25,
	},
	userName: {
		color: Colors.menuuserNameandTokenColor,
		fontSize: Layout.moderateScale(12),
		fontFamily: 'roboto-medium',
		left: 0,
		top: 0,
	},
	activeuserSec: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		right: 0,
		position: 'absolute',
	},
	activeuser: {
		width: Layout.WIDTH * 0.12,
		height: Layout.WIDTH * 0.12,
		paddingRight: Layout.WIDTH * 0.6,
	},
	postDesc: {
		fontSize: Layout.moderateScale(10),
		color: Colors.menuuserNameandTokenColor,
		fontFamily: 'roboto-reguler',
		width: Layout.WIDTH * 0.52,
	},
	productreviewSec: {
		flexDirection: 'row',
		marginTop: Layout.moderateScale(5),
	},
	ratingSec: {
		width: Layout.WIDTH * 0.32,
		flexDirection: 'row',
	},
	ratingstyle: {
		width: Layout.WIDTH * 0.22,
		height: Layout.moderateScale(20),
		paddingRight: Layout.moderateScale(5),
	},
	ratingmsgct: {
		color: '#7c7c7c',
		fontSize: Layout.moderateScale(12),
		fontFamily: 'roboto-reguler',
	},
	priceSec: {
		width: Layout.WIDTH * 0.22,
	},
	pricetext: {
		textAlign: 'right',
		paddingRight: Layout.moderateScale(10),
		color: Colors.primaryColor,
		fontSize: Layout.moderateScale(12),
		fontFamily: 'roboto-bold',
	},
	adSec: {
		backgroundColor: Colors.primaryColor,
		width: Layout.WIDTH,
		paddingVertical: Layout.moderateScale(20),
		paddingHorizontal: Layout.moderateScale(20),
		justifyContent: 'center',
		alignItems: 'center',
	},
	mainadText: {
		marginBottom: Layout.moderateScale(5),
		color: Colors.white,
		fontSize: Layout.moderateScale(14),
		fontFamily: 'roboto-bold',
		alignSelf: 'center',
		textAlign: 'center',
	},
	subtitle: {
		textAlign: 'center',
		color: Colors.white,
		fontSize: Layout.moderateScale(14),
		fontFamily: 'roboto-reguler',
		alignSelf: 'center',
	},
	offerTypeSec: {
		width: Layout.WIDTH * 0.52,
		marginTop: Layout.HEIGHT * 0.01,
		flexDirection: 'row',
	},
	bartedSec: {
		backgroundColor: '#f48fb1',
		marginRight: Layout.moderateScale(5),
		borderRadius: 5,
	},
	counterSec: {
		backgroundColor: '#81d4fa',
		marginRight: Layout.moderateScale(5),
		borderRadius: 5,
	},
	saleSec: {
		backgroundColor: '#ff8a65',
		marginRight: Layout.moderateScale(5),
		borderRadius: 5,
	},
	bartedTxt: {
		fontSize: Layout.moderateScale(8),
		textAlign: 'center',
		margin: Layout.moderateScale(5),
		fontFamily: 'roboto-reguler',
	},
	counterTxt: {
		fontSize: Layout.moderateScale(8),
		textAlign: 'center',
		margin: Layout.moderateScale(5),
		fontFamily: 'roboto-reguler',
	},
	saleTxt: {
		fontSize: Layout.moderateScale(8),
		textAlign: 'center',
		margin: Layout.moderateScale(5),
		fontFamily: 'roboto-reguler',
	},
	liststyle: {
		backgroundColor: 'white',
		width: Layout.WIDTH,
	},
	icons:{
		alignSelf: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		marginTop: Platform.OS === 'ios' ? 0 : Layout.moderateScale(3) ,

	},
  txtInput: {
    marginBottom: Layout.HEIGHT * 0.015,
  },
});
