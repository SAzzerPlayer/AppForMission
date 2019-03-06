import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    Background:{
        flex: 1,
        justifyContent: `center`,
        flexDirection: `column`
    },
    TextTitle:{
        flex: 5,
        textAlign: `center`,
        fontSize: 20,
        fontWeight: `bold`,
        textDecorationLine: `underline`,
        marginTop: 30,
        backgroundColor: `rgba(182, 188, 248, 0.95)`,
        borderWidth: 2,
        borderRadius: 16,
        height:32
    },
    TextSecondTitle:{
        flex: 1,
        fontSize: 18,
        fontWeight: `bold`,
        textAlign: `center`,
        marginTop: 15
    },
    TextInputContain:{
        flex: 2,
        justifyContent: `center`,
        backgroundColor: `rgba(248, 244, 244, 0.98)`
    },
    TextInput:{
        flex: 2
    },
    AddTouch:{
        flex: 1,
        alignItems: `center`,
        justifyContent: `center`,
        borderRadius: 16,
        borderWidth: 3,
        backgroundColor: `rgba(191, 193, 250, 1)`,
        marginBottom: 25,
        borderColor: `rgba(183, 200, 236, 1)`
    },
    AddText:{
        fontSize: 20,
        fontWeight: `bold`
    },
    TitleContain:{
        flex: 1,
        flexDirection: `row`,
        alignItems: `stretch`,
        justifyContent: `space-around`
    },
    TitleNullContain:{
        flex: 1,
        height: 32
    },
    TitleCloseTouch:{
        flex: 1,
        height: 32,
        alignItems: `center`,
        justifyContent: `center`
    },
    TitleCloseImage:{
        width: 32,
        height: 32
    }
});