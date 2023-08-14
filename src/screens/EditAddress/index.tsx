import React, { useState } from "react";
import { View, Text } from "react-native";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import { LongButton } from "../../components/LongButton";
import { LongInput } from "../../components/LongInput";
import { LongButtonOutline } from "../../components/LongButtonOutline";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../global/styles/theme";
import { BorderlessButton } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";
import SelectDropdown from "react-native-select-dropdown";


export function EditAddress() {
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [bairro, setBairro] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const navigation = useNavigation();
    const abreviacoeUf = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG",
        "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",];

    function handleGoBack() {
        navigation.goBack();
    }

    function save() { }

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.title}>
                    <BorderlessButton onPress={handleGoBack} style={{ marginRight: 16 }}>
                        <Icon
                            name={"arrow-left"}
                            size={24}
                            color={theme.colors.gray400}
                        />
                    </BorderlessButton>
                    <Text style={styles.textTitle}>
                        Editar endereço
                    </Text>
                </View>
                <View style={styles.rowGroup}>
                    <View style={styles.inputLongGroup}>
                        <Text style={styles.label}>Cidade</Text>
                        <LongInput
                            keyboardType="numeric"

                        />
                    </View>
                    <View style={styles.inputShortGroup}>
                        <Text style={styles.label}>UF</Text>
                        <SelectDropdown
                            data={abreviacoeUf}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {

                                return item
                            }}
                        />
                    </View>
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Bairro</Text>
                    <LongInput
                        keyboardType="numeric"

                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Logradouro</Text>
                    <LongInput
                        keyboardType="numeric"

                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Número</Text>
                    <LongInput
                        keyboardType="numeric"

                    />
                </View>
                <View style={{ marginTop: 32 }}>
                    <LongButton
                        title='Salvar Alterações'
                        onPress={save}
                    />
                </View>
            </View>
        </Background>
    );
}
