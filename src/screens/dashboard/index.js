import React, {Component} from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import {moderateScale} from 'react-native-size-matters';
import {Card} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ToastComponent from '../../components/ToastComponent';
import {styles} from './styles';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false,
      data: [
        {title: 'Goal 1', amount: '12,000'},
        {title: 'Goal 2', amount: '20,000'},
        {title: 'Goal 3', amount: '100,000'},
      ],
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
      <View style={styles.bottomSheetContainer}>
        <Text style={styles.goalTxt}>Your Goals</Text>

        <FlatList data={this.state.data} renderItem={this.renderGoals} />
        <Pressable
          style={styles.btnSnackbar}
          onPress={() => this.toastModal.show()}>
          <Text style={styles.txtShowSnackbar}>Show Snackbar</Text>
        </Pressable>
      </View>
    </View>
  );

  renderGoals = ({item}) => (
    <Card style={styles.cardContainer}>
      <View style={styles.cardMainView}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemAmount}>{'KES ' + item.amount}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Pressable style={styles.btnFinishGoal}>
            <Text style={styles.txtFinishGoal}>Finish Goal</Text>
          </Pressable>
          <View style={styles.verticalLine} />
          <AntDesign
            size={20}
            style={{alignSelf: 'center', margin: moderateScale(5)}}
            name={'right'}
          />
        </View>
      </View>
    </Card>
  );

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <ToastComponent ref={ref => (this.toastModal = ref)} />
          <View>
            <Text style={styles.txtGreeting}>{this.time() + ' Andrew'}</Text>
            <Text style={styles.txtLatest}>Here's is the latest</Text>
            <Text style={styles.txtLatestAmount}>KES 42,000</Text>
            <Text style={styles.txtTotalFunds}>Total funds</Text>
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
