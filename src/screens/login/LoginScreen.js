/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  YellowBox,
} from 'react-native';

import KakaoLogins from '@react-native-seoul/kakao-login';
import NativeButton from 'apsl-react-native-button';
import AsyncStorage from '@react-native-community/async-storage';

if (!KakaoLogins) {
  console.error('Module is Not Linked');
}

const logCallback = (log, callback) => {
  console.log(log);
  callback;
};

const setAsyncStorageLoginInfo = async (
  loginTarget,
  accessToken,
  accessTokenExpiresAt,
  refreshToken,
  refreshTokenExpiresAt,
) => {
  try {
    await AsyncStorage.setItem('@login_target', loginTarget);
    await AsyncStorage.setItem('@access_token', accessToken);
    await AsyncStorage.setItem(
      '@access_token_expires_at',
      accessTokenExpiresAt,
    );
    await AsyncStorage.setItem('@refresh_token', refreshToken);
    await AsyncStorage.setItem(
      '@refresh_token_expires_at',
      refreshTokenExpiresAt,
    );
  } catch (error) {
    console.error();
  }
};

const clearAsyncStorageLoginInfo = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error();
  }
};

const TOKEN_EMPTY = 'token has not fetched';
const PROFILE_EMPTY = {
  id: 'profile has not fetched',
  email: 'profile has not fetched',
  profile_image_url: '',
};

const LoginScreen = () => {
  const [loginLoading, setLoginLoading] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);

  const [token, setToken] = useState(TOKEN_EMPTY);
  const [profile, setProfile] = useState(PROFILE_EMPTY);

  const kakaoLogin = () => {
    logCallback('Login Start', setLoginLoading(true));

    KakaoLogins.login()
      .then(result => {
        console.log('[accessToken] : ', result.accessToken);
        setToken(result.accessToken);
        setAsyncStorageLoginInfo(
          'kakao',
          result.accessToken,
          result.accessTokenExpiresAt,
          result.refreshToken,
          result.refreshTokenExpiresAt,
        );
        logCallback(
          `Login Finished: ${JSON.stringify(result)}`,
          setLoginLoading(false),
        );
      })
      .catch(err => {
        if (err.code === 'E_CANCELLED_OPERATION') {
          logCallback(`Login Cancelled:${err.message}`, setLoginLoading(false));
        } else {
          logCallback(`Login Failed:${err.message}`, setLoginLoading(false));
        }
      });
  };

  const kakaoLogout = () => {
    logCallback('Logout Start', setLogoutLoading(true));
    KakaoLogins.logout()
      .then(result => {
        setToken(TOKEN_EMPTY);
        setProfile(PROFILE_EMPTY);
        clearAsyncStorageLoginInfo();
        logCallback(`Logout Finished:${result}`, setLogoutLoading(false));
      })
      .catch(err => {
        logCallback(
          `Logout Failed:${err.code} ${err.message}`,
          setLogoutLoading(false),
        );
      });
  };

  const getProfile = () => {
    logCallback('Get Profile Start', setProfileLoading(true));

    KakaoLogins.getProfile()
      .then(result => {
        setProfile(result);
        logCallback(
          `Get Profile Finished:${JSON.stringify(result)}`,
          setProfileLoading(false),
        );
      })
      .catch(err => {
        logCallback(`Get Profile Finished:${err.code} ${err.message}`);
        setProfileLoading(false);
      });
  };

  const { id, email, profile_image_url: photo } = profile;

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.profilePhoto} source={{ uri: photo }} />
        <Text>{`id: ${id}`}</Text>
        <Text>{`email : ${email}`}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.token}>{token}</Text>
        <NativeButton
          isLoading={loginLoading}
          onPress={kakaoLogin}
          activeOpacity={0.5}
          style={styles.btnKakaoLogin}
          textStyle={styles.txtKakaoLogin}>
          Login
        </NativeButton>
        <NativeButton
          isLoading={logoutLoading}
          onPress={kakaoLogout}
          activeOpacity={0.5}
          style={styles.btnKakaoLogin}
          textStyle={styles.txtKakaoLogin}>
          Logout
        </NativeButton>
        <NativeButton
          isLoading={profileLoading}
          onPress={getProfile}
          activeOpacity={0.5}
          style={styles.btnKakaoLogin}
          textStyle={styles.txtKakaoLogin}>
          getProfile
        </NativeButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: Platform.OS === 'ios' ? 0 : 24,
    paddingTop: Platform.OS === 'ios' ? 24 : 0,
    backgroundColor: 'white',
  },
  profile: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: 'black',
  },
  content: {
    flex: 6,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  token: {
    width: 200,
    fontSize: 12,
    padding: 5,
    borderRadius: 8,
    marginVertical: 20,
    backgroundColor: 'grey',
    color: 'white',
    textAlign: 'center',
  },
  btnKakaoLogin: {
    height: 48,
    width: 240,
    alignSelf: 'center',
    backgroundColor: '#F8E71C',
    borderRadius: 0,
    borderWidth: 0,
  },
  txtKakaoLogin: {
    fontSize: 16,
    color: '#3d3d3d',
  },
});

YellowBox.ignoreWarnings(['source.uri']);

export default LoginScreen;
