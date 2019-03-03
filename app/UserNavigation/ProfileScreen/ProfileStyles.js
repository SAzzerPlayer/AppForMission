import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    ProfUserContain:{
        flex: 2,
        flexDirection: `row`
    },
    AvatarContain:{
        alignItems: `baseline`,
        backgroundColor: `rgba(217, 223, 249, 1)`,
        borderRadius: 32,
        flex: 1,
        flexDirection: `row`,
        flexWrap: `nowrap`,
        justifyContent: `center`,
        margin: 0,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        maxHeight: 64,
        maxWidth: 64,
        position: `relative`
    },
    AvatarImage:{
        borderRadius: 32,
        height: 64,
        width: 64
    },
    InfoUserContain:{
        alignItems: `baseline`,
        backgroundColor: `rgba(221, 221, 245, 1)`,
        borderRadius: 25,
        flex: 3,
        flexDirection: `column`,
        flexWrap: `nowrap`,
        justifyContent: `flex-start`,
        margin: 10
    },
    NickUserContain:{
        flex: 1,
        flexDirection: `row`,
        width: `100%`
    },
    IconContain:{
        flex: 1,
        justifyContent: `center`
    },
    IconStyle:{
        marginLeft: 15
    },
    NickNameContain:{
        flex: 4,
        justifyContent: `center`
    },
    NickNameText:{
        fontSize: 20,
        fontWeight: `bold`,
        textAlign: `left`
    },
    EditProfileContain:{
        alignItems: `center`,
        flex: 1,
        justifyContent: `center`,
        marginRight: 10,
        maxWidth: 32,
        minHeight: 32,
        minWidth: 32
    },
    EditProfileImage:{
        height: 24,
        width: 24
    },
    StatisticsUserContain:{
        flex: 1,
        width: `100%`
    },
    TouchStatics:{
        flex: 1,
        justifyContent: `center`
    },
    StaticsUserText:{
        color: `rgba(115, 119, 121, 1)`,
        fontSize: 12,
        fontWeight: `bold`,
        letterSpacing: 1,
        lineHeight: 16,
        marginLeft: 15,
        textAlign: `left`
    },
    ToolPostContain:{
        backgroundColor: `rgba(250, 241, 241, 1)`,
        flex: 1,
        flexDirection: `row`,
        marginLeft: 0,
        marginRight: 0,
        maxHeight: 32
    },
    ToolPostLeftContain:{
        alignItems: `center`,
        flex: 3,
        justifyContent: `space-around`,
        flexDirection: `row`
    },
    ToolPostEditContain:{
        flexDirection: `row`
    },
    ToolPostEditImage:{
        width: 24,
        height: 24
    },
    ToolPostEditText:{

    },
    ToolPostDeleteContain:{
        flexDirection: `row`
    },
    ToolPostDeleteImage:{
        width: 24,
        height: 24
    },
    ToolPostDeleteText:{

    },
    ToolPostVertDelimit:{
        backgroundColor: `rgba(13, 6, 6, 1)`,
        height: `100%`,
        width: 1
    },
    ToolPostRightContain:{
        alignItems: `center`,
        flex: 1,
        flexDirection: `row`,
        justifyContent: `flex-end`
    },
    ToolPostViewModeImage:{
        height: 28,
        marginRight: 10,
        width: 28
    },
    ToolPostViewModeSwitch:{
        height: 26,
        marginRight: 10,
        width: 36
    },
    PostsContain:{
        alignItems: `stretch`,
        borderBottomWidth: 3,
        borderColor: `rgba(209, 208, 220, 1)`,
        borderTopWidth: 3,
        flex: 7
    },
    ScrollPosts:{
        flex: 0
    },
    MultiplyRowPostsContain:{
        flexDirection: `row`,
        justifyContent: `space-evenly`,
        marginBottom: 5,
        marginTop: 15
    },
    ShortPostImage:{
        borderColor: `rgba(221, 221, 245, 1)`,
        borderRadius: 16,
        borderWidth: 5,
        height: 128,
        width: 128
    }
});