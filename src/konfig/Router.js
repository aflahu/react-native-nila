// import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
// import { human } from 'react-native-typography';
import MenuAwal from '../menu/MenuAwal';
import MenuDiagnosa from '../menu/MenuDiagnosa';
import Budidaya from '../menu/MenuDuniaIkan/Budidaya';
import JenisJenis from '../menu/MenuDuniaIkan/JenisJenis';
import Penyakit from '../menu/MenuDuniaIkan/Penyakit';
import Klasifikasi from '../menu/MenuDuniaIkan/Klasifikasi';
import Hasil from '../menu/MenuHasil/Hasil';
import Info from '../menu/MenuDuniaIkan/Info';
import InfoPenyakit from '../menu/MenuDuniaIkan/InfoPenyakit';

const TabDuniakan = TabNavigator(
  {
    Klasifikasi: {
      screen: Klasifikasi,
      navigationOptions: {
        tabBarLabel: 'klasifikasi'
      }
    },
    JenisJenis: {
      screen: JenisJenis,
      navigationOptions: {
        tabBarLabel: 'Jenis'
      }
    },
    Penyakit: {
      screen: Penyakit,
      navigationOptions: {
        tabBarLabel: 'Penyakit'
      }
    },
    Budidaya: {
      screen: Budidaya,
      navigationOptions: {
        tabBarLabel: 'Budidaya'
      }
    }
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 12
      },
      inactiveTintColor: '#E3F2FD',
      activeTintColor: 'white',
      indicatorStyle: { backgroundColor: 'white' }
    }
  }
);

const Router = StackNavigator(
  {
    MenuAwal: {
      screen: MenuAwal,
      navigationOptions: {
        headerMode: 'sceen',
        header: null
      }
    },
    MenuDiagnosa: {
      screen: MenuDiagnosa,
      navigationOptions: {
        title: 'Diagnosa',
        headerStyle: { backgroundColor: '#3F51B5' },
        headerTintColor: 'white'
      }
    },
    MenuDuniaIkan: {
      screen: TabDuniakan,
      navigationOptions: {
        title: 'Dunia Ikan Nila',
        headerStyle: { backgroundColor: '#3F51B5' },
        headerTintColor: 'white'
      }
    },
    MenuHasil: {
      screen: Hasil,
      path: '/Menuhasil/:diagnosa',
      navigationOptions: {
        title: 'Hasil',
        headerStyle: { backgroundColor: '#3F51B5' },
        headerTintColor: 'white'
      }
    },
    Info: {
      screen: Info,
      path: '/Info/:judul',
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.judul,
        headerStyle: { backgroundColor: '#3F51B5' },
        headerTintColor: 'white'
      })
    },
    InfoPenyakit: {
      screen: InfoPenyakit,
      path: '/InfoPenyakit/:judul',
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.judul,
        headerStyle: { backgroundColor: '#3F51B5' },
        headerTintColor: 'white'
      })
    }
  },
  {
    cardStyle: {
      marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  }
);

export default Router;
