import React, { useContext, useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Todo from '../components/Todo';
import { Todos } from '../contexts/TodoContext';

const Main = ({ navigation }) => {
  const [isHidden, setIsHidden] = useState(false);
  const handleIsHidden = () => {
    setIsHidden(prev => !prev);
  };
  const { todos } = useContext(Todos);

  console.log(todos)


  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.todayBox}>
          <View style={styles.profilePictureContainer}>
            <Image
              source={require('../assets/images/pp.jpg')}
              style={styles.profilePicture}
            />
          </View>
          <View style={styles.headContainer}>
            <Text style={styles.today}>
              Today
            </Text>
            <TouchableWithoutFeedback onPress={handleIsHidden}>
              <Text style={styles.hide}>
                {isHidden ? "Show" : "Hide"} completed
              </Text>
            </TouchableWithoutFeedback>
          </View>
          {isHidden ? todos?.filter(todo => !todo.completed).map(todo => (
            <Todo id={todo.id} title={todo.title} key={todo.id} completed={todo.completed} />
          )) : todos?.map(todo => (
            <Todo id={todo.id} title={todo.title} key={todo.id} completed={todo.completed} />
          ))}
        </View>
        {/* <View style={styles.headContainer}>
          <Text style={styles.today}>
            Tomorrow
          </Text>
        </View>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo /> */}
      </ScrollView>

      <TouchableOpacity style={styles.add} onPress={() => navigation.navigate('New Todo')}>
        <AntDesign name='pluscircle' size={50} color='black' />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 14,
    paddingBottom: 50,
    position: 'relative'
  },
  profilePictureContainer: {
    // flex: 1,
    display: 'flex',
    alignItems: 'flex-end'
  },
  profilePicture: {
    width: 42,
    height: 42,
    borderRadius: 21
  },
  todayBox: {
    marginBottom: 10
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 35
  },
  today: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000'
  },
  hide: {
    color: '#3478F6',
    fontWeight: '500',
  },
  add: {
    position: 'absolute',
    bottom: 30,
    right: 18
  }
});

export default Main;
