import React, { useState } from "react";
import { View, Text } from "react-native";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import { LongButton } from "../../components/LongButton";
import { LongInput } from "../../components/LongInput";
import { LongButtonOutline } from "../../components/LongButtonOutline";
import { useNavigation } from "@react-navigation/native";


export function Home() {
    const [cep, setCep] = useState('');
    const navigation = useNavigation();
    function searchAdrees() {
        navigation.navigate('DetailsAddress');
    }

    function logout() { }

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>
                        Olá,
                    </Text>
                    <Text style={styles.textTitleBold}>
                        Vamos buscar por um
                    </Text>
                </View>
                <View style={{ width: "100%" }}>
                    <Text style={[styles.textTitleBold, { textAlign: "left" }]}>
                        endereço?
                    </Text>
                </View>
                <View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>CEP</Text>
                        <LongInput
                            keyboardType="numeric"
                            onChangeText={setCep}
                        />
                    </View>
                    <View style={{ marginBottom: 30 }}>
                        <LongButton
                            title='Buscar'
                            onPress={searchAdrees}
                        />
                    </View>
                    <LongButtonOutline
                        title="Deslogar"
                        onPress={logout}
                    />

                </View>
            </View>
        </Background>
    );
}
