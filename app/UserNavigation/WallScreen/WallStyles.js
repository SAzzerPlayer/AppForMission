import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    AvatarUserImage: {
        backgroundColor: `rgba(108, 61, 61, 1)`,
        borderRadius: 24,
        height: 48,
        width: 48
    },
    InfoUserNickNamText: {
        fontSize: 16,
        fontWeight: `bold`,
        textAlign: `center`
    },
    InfoUserNickNameContain: { flex: 4, justifyContent: `center` },
    InfoIconJoinImage: {
        backgroundColor: `rgba(180, 130, 130, 1)`,
        borderRadius: 16,
        height: 32,
        width: 32
    },
    InfoIconJoinContain: {
        alignItems: `center`,
        flex: 1,
        flexDirection: `column`,
        justifyContent: `space-around`
    },
    InfoJoinText: { fontSize: 12 },
    InfoJoinContain: { flex: 2, justifyContent: `center` },
    InfoUserContain: { borderBottomWidth: 1, flex: 1, flexDirection: `row` },
    PostImage: {
        backgroundColor: `rgba(201, 151, 151, 1)`,
        height: 256,
        width: 256
    },
    PostImageContain: {
        flexDirection: `row`,
        justifyContent: `center`,
        margin: 10
    },
    PostLikeIconImage: {
        backgroundColor: `rgba(199, 133, 133, 1)`,
        borderRadius: 16,
        height: 32,
        width: 32
    },
    PostLikeText: { flex: 1, textAlign: `center` },
    PostLikeContain: {
        alignItems: `center`,
        backgroundColor: `rgba(240, 234, 234, 0.32)`,
        borderColor: `rgba(105, 163, 236, 0.35)`,
        borderRadius: 16,
        borderWidth: 1,
        flexDirection: `row`,
        justifyContent: `flex-start`,
        margin: 10
    },
    PostUserContain: {
        backgroundColor: `rgba(224, 226, 252, 1)`,
        borderColor: `rgba(139, 141, 238, 1)`,
        borderRadius: 26,
        borderWidth: 2,
        margin: 5,
        flex: 1
    },
    Scroll: { margin: 10 },
});