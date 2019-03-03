import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    PostUserContain:{
        backgroundColor: `rgba(228, 228, 232, 1)`,
        borderRadius: 26,
        flex: 1,
        marginTop:10,
        marginBottom: 10
    },
    InfoUserContain:{
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: `row`,
    },
    AvatarUserImage:{
        backgroundColor: `rgba(108, 61, 61, 1)`,
        borderRadius: 24,
        height: 48,
        width: 48
    },
    InfoUserNickNameContain: {
        flex: 4,
        justifyContent: `center`
    },
    InfoUserNickNameText: {
        fontSize: 16,
        fontWeight: `bold`,
        marginLeft: 5,
        textAlign: `left`
    },
    InfoIconJoinContain:{
        alignItems: `center`,
        flex: 1,
        flexDirection: `column`,
        justifyContent: `space-around`
    },
    InfoIconJoinImage:{
        borderRadius: 0,
        height: 32,
        width: 32
    },
    InfoJoinContain:{
        flex: 1,
        justifyContent: `center`
    },
    InfoJoinText:{
        fontSize: 12,
        fontWeight: `500`
    },
    PostImageContain:{
        flexDirection: `row`,
        justifyContent: `center`,
        marginBottom: 5,
        marginTop: 5
    },
    PostImage:{
        backgroundColor: `rgba(201, 151, 151, 1)`,
        height: 340,
        maxHeight: 340,
        maxWidth: 340,
        minHeight: 320,
        minWidth: 320,
        width: `100%`
    },
    PostBottomContain:{
        alignItems: `center`,
        backgroundColor: `rgba(240, 234, 234, 0.32)`,
        borderColor: `rgba(105, 163, 236, 0.35)`,
        borderRadius: 16,
        borderWidth: 1,
        flexDirection: `row`,
        justifyContent: `space-between`,
        margin: 10
    },
    PostBottomLeftContain:{
        alignItems: `center`,
        backgroundColor: `rgba(246, 241, 241, 1)`,
        borderRadius: 16,
        flex: 1,
        flexDirection: `row`
    },
    PostBottomLikeContain:{

    },
    PostBottomLikeTouchable:{
        backgroundColor: `rgba(242, 230, 230, 0.72)`,
        borderRadius: 16,
        height: 32,
        marginLeft: 5,
        width: 32
    },
    PostLikeIconImage:{
        height: 32,
        width: 32
    },
    PostBottomAmmoLikesContain:{
        alignItems:'center',
        justifyContent: `center`
    },
    PostBottomAmmoLikesText:{
        flex: 1,
        fontSize: 10,
        marginLeft: 10,
        overflow: `visible`,
        textAlign: `center`
    },
    PostBottomRightContain:{
        flex: 0,
        flexDirection: `row`,
        justifyContent: `flex-end`,
        maxWidth: `80%`,
        minWidth: `60%`
    },
    PostBottomRightTouch:{

    },
    PostBottomRightText:{
        flex: 1,
        fontFamily: `normal`,
        fontSize: 11,
        fontWeight: `300`,
        marginLeft: 15,
        marginRight: 5,
        textAlign: `right`
    }

});
