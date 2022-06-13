import React, { useState } from 'react';
import { StyleSheet, Text, View ,ImageBackground,Button, ToastAndroid} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const city = ["Ankara", "Antalya", "İstanbul", "İzmir"]
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)

  const onChangeDate = (selectedDate) => {
    setShow(false);
    const currentDate = selectedDate;
    setDate(currentDate);

  };
  return (
    <View style={styles.viewContainer}>
      <ImageBackground style={{width:'100%',height:'100%'}} source ={{uri:'https://p4.wallpaperbetter.com/wallpaper/957/503/722/clouds-sky-wallpaper-preview.jpg'}}>
      <View style={styles.viewContainerTwo}><Text style={styles.textContainer}>Turkish Airlines Fly</Text></View>
          <View style={styles.dropdownsRow}>
              <SelectDropdown
              defaultButtonText={'Nereden'}
              data={city}
              onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
        }}
              buttonTextAfterSelection={(selectedItem, index) => {          
              return selectedItem
        }}
              rowTextForSelection={(item, index) => {
              return item
                
        }}
              buttonStyle={styles.dropdownBtnStyle}
              buttonTextStyle={styles.dropdownBtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdownDropdownStyle}
              rowStyle={styles.dropdownRowStyle}
              rowTextStyle={styles.dropdownRowTxtStyle}
            />

            <SelectDropdown
              defaultButtonText ={'Nereye'}
              data={city}
              onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
        }}
              buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
        }}
              rowTextForSelection={(item, index) => {
              return item
        }}
              buttonStyle={styles.dropdownBtnStyle}
              buttonTextStyle={styles.dropdownBtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdownDropdownStyle}
              rowStyle={styles.dropdownRowStyle}
              rowTextStyle={styles.dropdownRowTxtStyle}
            />
        </View>
        <View style={{marginBottom:'25%', width:'50%' ,marginLeft:'25%'}}>
          <Button title= 'Gidiş Tarihi' onPress={() => {setShow(true);}}/>
          {show && (<DateTimePicker mode='date' value={new Date(2022, 6, 10)} minimumDate={new Date(2022, 6, 10)} onChange={onChangeDate}/>
          )}</View>
        <View style={{marginBottom:'35%', width:'50%' ,marginLeft:'25%'}}>
            <Button title='Uçak Bileti Bul' onPress={() =>
                navigation.navigate('ticket')}></Button></View>  
      </ImageBackground>
    </View>
    );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  viewContainerTwo:{
    textAlign:'center',
  },
  textContainer: {
    marginTop:'15%',
    marginLeft:'13%',
    color:'#244436',
    textAlignVertical:'center',
    fontSize:35,
    fontWeight:'bold',
  },

  dropdownsRow: {
    flexDirection: 'row',
    width: '100%',
    marginTop:'12%',
    paddingHorizontal: '5%',
    flexGrow: 1,
  },
  dropdownBtnTxtStyle: {
    color: '#444',
    textAlign: 'left'
  },
  dropdownDropdownStyle: {
    backgroundColor: '#EFEFEF'
  },
  dropdownRowStyle: {
    backgroundColor: '#EFEFEF', 
    borderBottomColor: '#C5C5C5'
  },
  dropdownRowTxtStyle: {
    color: '#444', 
    textAlign: 'left'
  },
  dropdownBtnStyle: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
 
});

export default Home