import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    NotifyContain:{
        backgroundColor: `rgba(227, 233, 250, 1)`,
        borderRadius: 32,
        flex: 2,
        flexDirection: `row`,
        margin: 5,
        maxHeight: 64,
        minHeight: 64
    },
    AvatarContain:{
        flex: 1,
        flexDirection: `row`,
        maxHeight: 64,
        maxWidth: 64,
        minHeight: 64,
        minWidth: 64
    },
    AvatarImage:{
        backgroundColor: `rgba(199, 125, 125, 1)`,
        borderRadius: 32,
        height: 64,
        width: 64
    },
    notifyRowContain:{
        flex: 5,
        flexDirection: `row`
    },
    NotifyText:{
        fontSize: 12,
        margin: 10,
        textAlign: `center`
    },
    PostImageContain:{
        alignItems: `center`,
        backgroundColor: `rgba(248, 244, 244, 0.43)`,
        borderRadius: 16,
        flex: 1,
        justifyContent: `center`,
        marginRight: 20,
        minWidth: 64
    },
    PostImage:{
        borderRadius: 16,
        height: 48,
        width: 48
    }
})