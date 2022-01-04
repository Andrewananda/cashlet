import React, {Component} from 'react';
import {Pressable, Text, View} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import {moderateScale} from 'react-native-size-matters';
import {Card} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ToastComponent from '../../components/ToastComponent';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false,
    };
  }

  time = () => {
    let today = new Date();
    let curHr = today.getHours();

    if (curHr < 12) {
      return 'Morning';
    } else if (curHr < 18) {
      return 'Afternoon';
    } else {
      return 'Evening';
    }
  };

  renderContent = () => (
    <View>
      <View
        style={{
          backgroundColor: '#f8f9ff',
          padding: moderateScale(16),
          height: moderateScale(450),
        }}>
        <Text style={{color: '#4b5e80', fontSize: moderateScale(16)}}>
          Your Goals
        </Text>

        <Card
          style={{margin: moderateScale(10), borderRadius: moderateScale(10)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: moderateScale(15),
            }}>
            <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize: moderateScale(16), color: '#4b5e80'}}>
                Goal 1
              </Text>
              <Text style={{fontSize: moderateScale(12), color: '#c5c6cb'}}>
                KES 12,000
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Pressable
                style={{
                  backgroundColor: '#00e671',
                  borderRadius: moderateScale(4),
                  height: moderateScale(30),
                  alignSelf: 'center',
                }}>
                <Text style={{color: '#fff', margin: moderateScale(5)}}>
                  Finish Goal
                </Text>
              </Pressable>
              <View
                style={{
                  height: moderateScale(50),
                  backgroundColor: '#e0dfdf',
                  width: moderateScale(1),
                  marginStart: 10,
                  marginTop: 0,
                  marginBottom: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
              />
              <AntDesign
                size={20}
                style={{alignSelf: 'center', margin: moderateScale(5)}}
                name={'right'}
              />
            </View>
          </View>
        </Card>
        <Pressable
          style={{
            alignSelf: 'center',
            position: 'absolute',
            bottom: 30,
            backgroundColor: '#00e671',
            borderRadius: moderateScale(16),
            height: moderateScale(40),
            width: moderateScale(220),
            justifyContent: 'center',
          }}
          onPress={() => this.toastModal.show()}>
          <Text
            style={{
              color: '#fff',
              margin: moderateScale(5),
              textAlign: 'center',
              fontSize: moderateScale(16),
            }}>
            Show Snackbar
          </Text>
        </Pressable>
      </View>
    </View>
  );

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
            backgroundColor: '#4b5e80',
          }}>
          <ToastComponent ref={ref => (this.toastModal = ref)} />
          <View>
            <Text
              style={{
                color: '#fff',
                fontSize: moderateScale(22),
                margin: moderateScale(15),
              }}>
              {this.time() + ' Andrew'}
            </Text>
            <Text
              style={{
                color: '#fff',
                marginStart: moderateScale(15),
              }}>
              Here's is the latest
            </Text>
            <Text
              style={{
                color: '#00e471',
                marginStart: moderateScale(15),
                fontSize: moderateScale(20),
                marginTop: moderateScale(5),
              }}>
              Kes 42,000
            </Text>
            <Text
              style={{
                marginStart: moderateScale(15),
                marginTop: moderateScale(5),
                color: '#fff',
              }}>
              Total funds
            </Text>
          </View>
          <View style={{flex: 2}}>
            <BottomSheet
              snapPoints={[moderateScale(450), moderateScale(300), 0]}
              borderRadius={10}
              renderContent={this.renderContent}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Dashboard;
