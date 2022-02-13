import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import {useAppSelector} from '../hooks';
import {navigationServices} from '../services/navigation.services';
import {secureKeyStorageService} from '../services/secureStorage.services';

const Login = () => {
  const [text, onChangeText] = useState('Useless Text');
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLogin, setIsLogin] = useState(null);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const userState = useAppSelector(state => state.user);

  useEffect(() => {
    setIsLogin(userState.user.isLogin);
  }, [userState]);
  useEffect(() => {
    secureKeyStorageService.retrieveKey('isLogin').then((data: any) => {
      if (data === 'true') {
        navigationServices.push('dashboard');
      }
    });
  }, []);
  const onClickSubmit = () => {
    if (
      userState.user.username === username &&
      userState.user.password === password
    ) {
      secureKeyStorageService.storingKey('isLogin', 'true');
      navigationServices.navigateToScreen('dashboard');
    }
  };

  const onChangeusername = (value: string) => {
    setUsername(value);
  };
  const onChangepassword = (value: string) => {
    setPassword(value);
  };

  const btnValidator = () => {
    return username !== '' && password !== '';
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.pageTitle}>
          <Text>Login Page</Text>
        </View>

        <View>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={onChangeusername}
            value={username}
            placeholder="Username"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangepassword}
            value={password}
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={true}
          />
          <Button
            disabled={!btnValidator()}
            onPress={onClickSubmit}
            title="Submit"
            color="#007AFF"
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    marginHorizontal: 10,
  },
  pageTitle: {
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;
