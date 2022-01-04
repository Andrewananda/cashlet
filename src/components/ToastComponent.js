import React, {Component} from 'react';
import {Modal, Text, TouchableWithoutFeedback, View} from 'react-native';
import {Card} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class ToastComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      isInitialText: true,
    };
  }

  componentWillUnmount() {
    clearTimeout();
  }

  handleTimeout() {
    let _this = this;
    setTimeout(function () {
      _this.setState({isShown: false});
    }, 5000);
  }

  show() {
    this.setState({isShown: true}, () => {
      this.handleTimeout();
    });
  }

  handleBannerTouch = () => {
    clearTimeout();
    this.setState({isInitialText: false}, () => {
      this.handleTimeout();
    });
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.isShown}>
        <TouchableWithoutFeedback onPressIn={this.handleBannerTouch}>
          <Card
            style={{
              backgroundColor: '#e8187f',
              margin: moderateScale(10),
            }}>
            <View
              style={{
                flexDirection: 'row',
                margin: moderateScale(10),
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={{margin: moderateScale(5), color: '#fff'}}>
                  {this.state.isInitialText
                    ? 'This is an in-app notification snackbar to show to the user when they perform an action. clicking it should change the text'
                    : 'User clicked snackbar'}
                </Text>
              </View>
              <View style={{alignSelf: 'center'}}>
                <AntDesign
                  onPress={() => this.setState({isShown: false})}
                  name={'close'}
                  size={25}
                  style={{color: '#fff'}}
                />
              </View>
            </View>
          </Card>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}
