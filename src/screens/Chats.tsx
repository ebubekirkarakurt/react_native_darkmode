import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { Card, DarkText } from '../utils/Theme';
import DarkMode from '../utils/darkmode.contex';

type Props = {};

const Chats = (props: Props) => {
    const {isDarkMode} = useContext(DarkMode)
  return (
    <View style={styles.main} >
        <Card isDarkMode={isDarkMode} style={styles.card} >
            <DarkText isDarkMode={isDarkMode} style={styles.txt} > This is Chats Screen...</DarkText>
        </Card>
    </View>
  );
};

export default Chats;

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
    }
});
