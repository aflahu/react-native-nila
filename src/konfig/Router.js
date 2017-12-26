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
import Cegah from '../menu/MenuHasil/Cegah';
import Obat from '../menu/MenuHasil/Obat';
import Cacing from '../menu/MenuDuniaIkan/Cacing';
import Lernea from '../menu/MenuDuniaIkan/Lernea';
import Info from '../menu/MenuDuniaIkan/Info';
import ModalLoading from '../menu/ModalLoading';

const TabHasil = TabNavigator({
  Hasil: {
    screen: Hasil,
    navigationOptions: {
      tabBarLabel: 'Hasil'
    }
  },
  Obat: {
    screen: Obat,
    navigationOptions: {
      tabBarLabel: 'Obat'
    }
  },
  Cegah: {
    screen: Cegah,
    navigationOptions: {
      tabBarLabel: 'Pencegahan'
    }
  }
});

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
      }
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
        title: 'Diagnosa'
        // headerStyle: { backgroundColor: 'red' }
      }
    },
    MenuDuniaIkan: {
      screen: TabDuniakan,
      navigationOptions: {
        title: 'Dunia Ikan Nila'
        // headerStyle: { backgroundColor: '#3F51B5' }
      }
    },
    MenuHasil: {
      screen: TabHasil,
      navigationOptions: {
        title: 'Hasil Diagnosa'
      }
    },
    Lernea: {
      screen: Lernea,
      navigationOptions: {
        title: 'Penyakit Lernea'
      }
    },
    Cacing: {
      screen: Cacing,
      navigationOptions: {
        title: 'Penyakit Cacing Insang dan Kulit '
      }
    },
    Info: {
      screen: Info,
      path: '/Info/:judul',
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.judul
      })
    }
  },
  {
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  }
);

const Modal = StackNavigator(
  {
    Router: { screen: Router },
    ModalLoading: { screen: ModalLoading }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

export default Modal;
