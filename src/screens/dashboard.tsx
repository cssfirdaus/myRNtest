import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import {useAppDispatch, useAppSelector} from '../hooks';
import {
  fetchDashboardDetail,
  fetchDashboardDetailAction,
} from '../sagas/dashboard.saga';
import {navigationServices} from '../services/navigation.services';
import {secureKeyStorageService} from '../services/secureStorage.services';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const dashboard = useAppSelector(state => state.dashboard);
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    dispatch(fetchDashboardDetailAction(''));
  }, []);
  useEffect(() => {
    setMovieList(dashboard.dashboard.movies);
  }, [dashboard]);

  const onClickLogout = () => {
    secureKeyStorageService.storingKey('isLogin', 'false');
    navigationServices.push('login');
  };
  const renderItem = ({item}) => <Item title={item.Title} />;
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <>
      <View style={styles.container}>
        <View style={styles.pageTitle}>
          <Text>Dashboard</Text>
        </View>

        <FlatList
          data={movieList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.logoutBtn}>
        <Button
          disabled={false}
          onPress={onClickLogout}
          title="Logout"
          color="red"
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    marginHorizontal: 10,
    marginBottom: 100,
  },
  pageTitle: {
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#dbdbdb',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  logoutBtn: {
    position: 'absolute',
    bottom: 20,
    right: '40%',
  },
});

export default Dashboard;
