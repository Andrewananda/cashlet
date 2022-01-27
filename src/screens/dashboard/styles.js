import {moderateScale} from 'react-native-size-matters';
import {primary, secondary} from '../../utils/colors';

export const styles = {
  bottomSheetContainer: {
    backgroundColor: '#f8f9ff',
    padding: moderateScale(16),
    height: moderateScale(450),
  },
  goalTxt: {
    color: secondary,
    fontSize: moderateScale(16),
  },
  cardContainer: {
    margin: moderateScale(10),
    borderRadius: moderateScale(10),
    backgroundColor: '#fff',
  },
  cardMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: moderateScale(0),
  },
  verticalLine: {
    height: moderateScale(60),
    backgroundColor: '#e0dfdf',
    width: moderateScale(1),
    marginStart: 10,
    padding: 0,
  },
  btnSnackbar: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
    backgroundColor: primary,
    borderRadius: moderateScale(16),
    height: moderateScale(40),
    width: moderateScale(220),
    justifyContent: 'center',
  },
  txtShowSnackbar: {
    color: '#fff',
    margin: moderateScale(5),
    textAlign: 'center',
    fontSize: moderateScale(16),
  },
  btnFinishGoal: {
    backgroundColor: primary,
    borderRadius: moderateScale(4),
    height: moderateScale(30),
    alignSelf: 'center',
  },
  txtFinishGoal: {
    color: '#fff',
    margin: moderateScale(5),
  },
  itemTitle: {
    fontSize: moderateScale(16),
    color: secondary,
    marginStart: moderateScale(10),
    marginTop: moderateScale(5),
  },
  itemAmount: {
    fontSize: moderateScale(12),
    color: '#c5c6cb',
    marginStart: moderateScale(10),
    marginTop: moderateScale(5),
  },
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: secondary,
  },
  txtGreeting: {
    color: '#fff',
    fontSize: moderateScale(22),
    margin: moderateScale(15),
  },
  txtLatest: {
    color: '#fff',
    marginStart: moderateScale(15),
  },
  txtLatestAmount: {
    color: primary,
    marginStart: moderateScale(15),
    fontSize: moderateScale(20),
    marginTop: moderateScale(5),
  },
  txtTotalFunds: {
    marginStart: moderateScale(15),
    marginTop: moderateScale(5),
    color: '#fff',
  },
};
