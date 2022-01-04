import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {CommonActions} from '@react-navigation/native';

let timeout;
class Splash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let _this = this;
    timeout = setTimeout(function () {
      _this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Dashboard'}],
        }),
      );
    }, 5000);
  }

  componentWillUnmount() {
    //avoid memory leak
    clearTimeout(timeout);
  }

  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: '#fff',
        }}>
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
