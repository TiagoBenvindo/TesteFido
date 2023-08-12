import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import { LongInput } from "../../components/LongInput";
import { LongButton } from "../../components/LongButton";


export function SingIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser() { }

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>
                        Busca
                    </Text>
                    <Text style={styles.textTitleBold}>
                        CEP
                    </Text>
                </View>
                <Text style={styles.subTitle}>
                    Encontre o endereço desejado
                </Text>
                <View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Usuário</Text>
                        <LongInput
                            onChangeText={setUsername}
                        />
                    </View>
                    <View style={styles.inputGroup, { marginBottom: 200 }}>
                        <Text style={styles.label}>Senha</Text>
                        <LongInput
                            secureTextEntry
                            onChangeText={setPassword}
                        />
                    </View>
                    <LongButton
                        title='Entrar'
                        onPress={loginUser}
                    />

                </View>
            </View>
        </Background>
    );
}
