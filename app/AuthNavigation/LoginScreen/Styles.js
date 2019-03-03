import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    Background:{
        flex: 1
    },
    TopNullContain:{
        flex: 1
    },
    MiddleContain:{
        flex: 6,
        flexDirection: `row`
    },
    LeftNullContain:{
        flex: 1
    },
    FormMiddleContain:{
        flex: 6,
        backgroundColor: `rgba(250, 245, 245, 0.85)`,
        borderRadius: 64
    },
    TopLoginContain:{
        alignItems: `center`
    },
    TopLogoImage:{
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: `rgba(154, 182, 242, 1)`
    },
    MainLoginContain:{
        flex: 1
    },
    LoginFormsContain:{
        flex: 3,
        justifyContent: `space-evenly`
    },
    LoginInputContain:{
        flex: 1,
        maxHeight: 32,
        backgroundColor: `rgba(223, 224, 246, 1)`,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 8,
        alignItems: `center`,
        justifyContent: `flex-start`,
        flexDirection: `row`
    },
    LoginInputImage:{
        width: 32,
        height: 32,
        borderRadius: 16
    },
    LoginInputText:{
        fontWeight: `bold`,
        height:48,
        flex:1,
        marginLeft: 5
    },
    PasswordInputContain:{
        flex: 1,
        maxHeight: 32,
        backgroundColor: `rgba(223, 224, 246, 1)`,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 8,
        alignItems: `center`,
        justifyContent: `flex-start`,
        flexDirection: `row`
    },
    PasswordInputImage:{
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 2
    },
    PasswordInputText:{
        fontWeight: `bold`,
        height:48,
        flex:1,
        marginLeft: 5
    },
    LoginConfirmButtonTouch:{
        height: 32,
        backgroundColor: `rgba(150, 166, 242, 1)`,
        borderRadius: 16,
        justifyContent: `center`,
        alignItems: `center`,
        borderWidth: 1,
        borderColor: `rgba(161, 163, 172, 1)`
    },
    LoginConfirmButtonText:{
        fontWeight: `bold`,
        textAlign: `center`,
        fontSize: 20
    },
    ToJoinFormsContain:{
        flex: 3
    },
    LoginTextORContain:{
        justifyContent: `center`,
        alignItems: `center`
    },
    LoginOrImageContain:{
        width: 64,
        height: 64,
        backgroundColor: `rgba(96, 105, 252, 1)`,
        borderRadius: 32,
        justifyContent: `center`
    },
    LoginOrText:{
        fontWeight: `bold`,
        textAlign: `center`,
        fontSize: 32
    },
    LoginText:{
        textAlign: `center`,
        textDecorationLine: `underline`,
        fontWeight: `300`,
        marginTop: 5,
        marginBottom: 10
    },
    RightNullContain:{
        flex: 1
    },
    BottomNullContain:{
        flex: 1
    }
});