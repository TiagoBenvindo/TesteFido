import React, { useState } from "react";
import { View, Text } from "react-native";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import { LongButton } from "../../components/LongButton";
import { LongInput } from "../../components/LongInput";


export function Home() {
    const [cep, setCep] = useState('');

    function editAdrees() {

    }

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
                            onChangeText={setCep}
                        />
                    </View>
                    <LongButton
                        title='Entrar'
                        onPress={editAdrees}
                    />

                </View>
            </View>
        </Background>
    );
}
