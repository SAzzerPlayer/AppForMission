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
        backgroundColor: `rgba(250, 245, 245, 0.85)`,
        borderRadius: 64,
        flex: 6
    },
    TopMiddleContain:{
        alignItems: `center`,
        flexDirection: `row`,
        justifyContent: `space-around`
    },
    ButtonBackTouch:{
        width: 64,
        height: 64,
        alignItems: `center`,
        justifyContent: `center`
    },
    BackImage:{
        width: 32,
        height: 32
    },
    TopLogoImage:{
        backgroundColor: `rgba(154, 182, 242, 1)`,
        borderRadius: 32,
        height: 64,
        width: 64
    },
    TopMiddleNullContain:{
        width: 64,
        height: 64
    },
    MainJoinContain:{
        flex: 1
    },
    JoinFormsContain:{
        flex: 3,
        justifyContent: `space-evenly`
    },
    MainInputContain:{
        alignItems: `center`,
        backgroundColor: `rgba(223, 224, 246, 1)`,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 8,
        flex: 1,
        flexDirection: `row`,
        justifyContent: `flex-start`,
        maxHeight: 32
    },
    MainInputImage:{
        borderRadius: 16,
        height: 32,
        width: 32
    },
    MainInputText:{
        flex: 1,
        fontWeight: `bold`,
        height: 48,
        marginLeft: 5
    },
    MiddleBottomContain:{
        flex: 2
    },
    ButtonJoinTouch:{
        flex: 1,
        maxHeight: 32,
        minHeight: 32,
        marginTop: 15,
        borderRadius: 16,
        backgroundColor: `rgba(150, 166, 242, 1)`,
        borderWidth: 1,
        borderColor: `rgba(161, 163, 172, 1)`,
        alignItems: `center`,
        justifyContent: `center`
    },
    ButtonJoinText:{
        textAlign: `center`,
        fontWeight: `bold`,
        fontSize: 20
    },
    RightNullContain:{
        flex: 1
    },
    BottomNullContain:{
        flex: 1
    }
});