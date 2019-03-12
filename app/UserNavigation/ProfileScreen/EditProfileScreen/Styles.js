import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    OneBordStyle:{
        height: 64,
        flexDirection: `row`,
        flex: 1,
        borderRadius: 32,
        backgroundColor: `rgba(249, 251, 253, 1)`,
        marginTop: 10,
        marginBottom: 10
    },
    Avatar:{
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: `rgba(177, 108, 108, 1)`
    },
    TextStyle1:{
        color: `rgba(14, 14, 14, 1)`,
        fontSize: 18,
        textAlign: `center`
    },
    TextInputStyle:{
        fontSize: 14,
        maxWidth:150
    },
    TextStylePress:{
        fontSize: 20,
        fontWeight: `bold`
    },
    TextStyleChange:{
        fontSize: 18,
        textAlign: `center`,
        marginRight: 15,
        fontWeight: `bold`
    },
    SecondBordStyle:{
        height: 64,
        flexDirection: `row`,
        flex: 1,
        borderRadius: 32,
        backgroundColor: `rgba(249, 251, 253, 1)`,
        marginTop: 10,
        marginBottom: 10,
        alignItems: `center`,
        justifyContent: `space-around`
    }
});