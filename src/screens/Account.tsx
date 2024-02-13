import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { Card, DarkText } from '../utils/Theme';
import DarkMode from '../utils/darkmode.contex';
import CustomIcon from '../components/CustomIcon';

type Props = {};

const Account = (props: Props) => {
    const {isDarkMode} = useContext(DarkMode)
  return (
    <View style={styles.main} >
        <Card isDarkMode={isDarkMode} style={styles.card} >
            <DarkText isDarkMode={isDarkMode} style={styles.txt} > This is Account Screen...</DarkText>
        </Card>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
    main:{
        justifyContent:'center',
        alignItems:'center',
        flex: 1
    },
    card:{
        padding: 20,
        borderRadius: 10
    },
    txt:{
        fontSize: 20
    },
});
