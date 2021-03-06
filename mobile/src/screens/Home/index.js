import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    ScrollView
} from 'react-native';


import styles from './styles';
import imgComunidade from '../../../assets/comuni/anchieta4.jpeg'

function Home({ navigation }) {
    const login = () => {
        navigation.navigate('Login')
    }

    const register = () => {
        navigation.navigate('Register')
    }

    return (
        <View style={styles.container}>

            <StatusBar />

            <ImageBackground
                source={imgComunidade}
                style={styles.imgFundo}
            >
                <Text
                    style={styles.ecoText}
                >ECO LAR ANCHIETA</Text>
                <Text style={styles.comuText}>
                    Projeto desenvolvido para os moradores da Ocupação Anchieta, localizada no bairro do Grajaú São Paulo, ocupação que já é resistência a sete anos.
                    </Text>
                <View style={styles.flexBtn}>

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={register}
                    >
                        <Text
                            style={styles.btnText}
                        >Registrar-se</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={login}
                    >
                        <Text
                            style={styles.btnText}
                        >Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <View style={styles.sobre}>
                <Text style={styles.textSobre}>SOBRE A OCUPAÇÃO ANCHIETA</Text>
            </View>

        </View>

    )
}


export default Home;