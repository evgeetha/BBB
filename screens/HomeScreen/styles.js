import { Platform, StyleSheet } from 'react-native';
import { Layout, Colors } from '../../constants/';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.menuHeader,
  },
  searchSec: {
    marginTop: Layout.moderateScale(12),
    marginBottom: Layout.moderateScale(15),
    width: Layout.WIDTH * 0.9,
    alignSelf: 'center',
  },
  searchItem: {
    backgroundColor: Colors.white,
  },
  mainSearch: {
    marginVertical: Layout.moderateScale(2),
    backgroundColor: Colors.white,
    width: Layout.WIDTH * 0.94,
    alignSelf: 'center',
  },
  searchicon: {
    backgroundColor: Colors.white,
    color: '#7c7c7c',
    fontSize: Layout.moderateScale(16),
    marginRight: Layout.moderateScale(10),
  },
  populerSec: {
    width: Layout.WIDTH * 0.9,
    marginVertical: Layout.WIDTH * 0.02,
    marginHorizontal: Layout.WIDTH * 0.05,
  },
  populerText: {
    color: Colors.menuuserNameandTokenColor,
    fontSize: Layout.moderateScale(18),
    fontFamily: 'roboto-bold',
  },
  noDataText: {
    color: Colors.menuuserNameandTokenColor,
    fontSize: Layout.moderateScale(12),
    fontFamily: 'roboto-reguler',
    textAlign: 'center',
    marginBottom: Layout.HEIGHT * 0.02,
  },
  imagesMainView: {
    width: Layout.WIDTH,
    backgroundColor: Colors.white,
  },
  listContent: {
    marginBottom: Layout.HEIGHT * 0.02,
    marginLeft: Layout.HEIGHT * 0.02,
    paddingRight: Layout.HEIGHT * 0.02,
    marginTop: 0,
  },
  imagesSubView: {
    width: Layout.WIDTH * 0.54,
    marginRight: Layout.WIDTH * 0.02,
    backgroundColor: Colors.white,
    borderRadius: Layout.HEIGHT * 0.015,
    borderColor: '#cfcfcf',
    borderWidth: 0.5,
    overflow: 'hidden',
  },
  rowImage: {
    height: Layout.WIDTH * 0.48,
    width: Layout.WIDTH * 0.54,
    borderRadius: Layout.HEIGHT * 0.015,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  favoriteIconSec: {
    position: 'absolute',
    top: Layout.moderateScale(10),
    right: Layout.moderateScale(10),
    width: Layout.moderateScale(30),
    height: Layout.moderateScale(30),
    borderRadius: Layout.moderateScale(15),
    backgroundColor: '#7f7f7f',
    borderWidth: 1,
    borderColor: '#7f7f7f',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  favoriteIconActive: {
    position: 'absolute',
    top: Layout.moderateScale(10),
    right: Layout.moderateScale(10),
    width: Layout.moderateScale(30),
    height: Layout.moderateScale(30),
    borderRadius: Layout.moderateScale(15),
    backgroundColor: '#1fa4a6',
    borderWidth: 1,
    borderColor: '#1fa4a6',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  chatIconSec: {
    position: 'absolute',
    top: Layout.moderateScale(50),
    right: Layout.moderateScale(10),
    width: Layout.moderateScale(30),
    height: Layout.moderateScale(30),
    borderRadius: Layout.moderateScale(15),
    backgroundColor: '#7f7f7f',
    borderWidth: 1,
    borderColor: '#7f7f7f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userItemDetailsSec: {
    flexDirection: 'row',
    paddingHorizontal: Layout.moderateScale(8),
    paddingBottom: Layout.moderateScale(8),
  },
  userProfileSec: {
    width: Layout.WIDTH * 0.1,
  },
  userProfile: {
    width: Layout.moderateScale(30),
    height: Layout.moderateScale(30),
    borderRadius: Layout.moderateScale(15),
  },
  userOnline: {
    backgroundColor: 'green',
    width: Layout.moderateScale(8),
    height: Layout.moderateScale(8),
    borderRadius: Layout.moderateScale(4),
    position: 'absolute',
    bottom: 0,
    left: Layout.moderateScale(20),
  },
  userOffline: {
    backgroundColor: 'silver',
    width: Layout.moderateScale(8),
    height: Layout.moderateScale(8),
    borderRadius: Layout.moderateScale(4),
    position: 'absolute',
    bottom: 0,
    left: Layout.moderateScale(20),
  },
  userNameSec: {
    width: Layout.WIDTH * 0.27,
  },
  userName: {
    color: Colors.menuuserNameandTokenColor,
    fontSize: Layout.moderateScale(16),
    fontFamily: 'roboto-medium',
  },
  activeuserSec: {
    width: Layout.WIDTH * 0.1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  activeuser: {
    width: Layout.WIDTH * 0.12,
    height: Layout.moderateScale(20),
    paddingRight: Layout.moderateScale(5),
  },
  postDesc: {
    marginLeft: Layout.moderateScale(10),
    marginRight: Layout.moderateScale(10),
    fontSize: Layout.moderateScale(12),
    color: Colors.menuuserNameandTokenColor,
    fontFamily: 'roboto-reguler',
  },
  productreviewSec: {
    flexDirection: 'row',
    marginTop: Layout.moderateScale(5),
    marginBottom: Layout.moderateScale(5),
    paddingHorizontal: Layout.moderateScale(8),
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
    fontSize: Layout.moderateScale(14),
    fontFamily: 'roboto-reguler',
  },
  priceSec: {
    width: Layout.WIDTH * 0.2,
  },
  pricetext: {
    textAlign: 'right',
    paddingRight: Layout.moderateScale(10),
    color: Colors.primaryColor,
    fontSize: Layout.moderateScale(14),
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
    fontSize: Layout.moderateScale(16),
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
  fabStyle: {
    width: Layout.moderateScale(48),
    height: Layout.moderateScale(48),
    borderRadius: Layout.moderateScale(24),
    backgroundColor: Colors.primaryColor,
  },
});
