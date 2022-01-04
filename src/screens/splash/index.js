import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {CommonActions} from '@react-navigation/native';

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let _this = this;
    setTimeout(function () {
      _this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Dashboard'}],
        }),
      );
    }, 5000);
  }

  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Image
          source={require('../../../assets/icon.png')}
          style={{width: 250, height: 100}}
          resizeMode={'contain'}
        />
      </View>
    );
  }
}

export default Splash;
