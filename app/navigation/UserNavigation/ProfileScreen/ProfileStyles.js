import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    AvatarImage: { borderRadius: 20, height: 64, width: 64 },
    AvatarContain: {
        alignItems: `baseline`,
        backgroundColor: `rgba(217, 223, 249, 1)`,
        borderRadius: 32,
        borderStyle: `solid`,
        borderWidth: 0,
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
    IconStyle: { marginLeft: 15 },
    IconContain: { flex: 1, justifyContent: `center` },
    NickNameText: { fontSize: 20, fontWeight: `bold`, textAlign: `left` },
    NickNameContain: { flex: 4, justifyContent: `center` },
    NickUserContain: { flex: 1, flexDirection: `row`, width: `100%` },
    StaticsUserText: {
        color: `rgba(115, 119, 121, 1)`,
        fontSize: 12,
        fontWeight: `bold`,
        letterSpacing: 1,
        lineHeight: 16,
        marginLeft: 15,
        textAlign: `left`
    },
    TouchStatics: { flex: 1, justifyContent: `center` },
    StatisticsUserContain: { flex: 1, width: `100%` },
    InfoUserContain: {
        alignItems: `baseline`,
        backgroundColor: `rgba(221, 221, 245, 1)`,
        borderRadius: 25,
        flex: 3,
        flexDirection: `column`,
        flexWrap: `nowrap`,
        justifyContent: `flex-start`,
        margin: 10
    },
    ProfUserContain: { flex: 1, flexDirection: `row` },
    ImageInRow: {
        backgroundColor: `rgba(175, 54, 54, 1)`,
        height: 64,
        margin: 0,
        width: 64
    },
    RowImageContain: {
        flexDirection: `row`,
        justifyContent: `space-around`,
        margin: 10
    },
    PostsContain: {
        borderBottomWidth: 3,
        borderColor: `rgba(209, 208, 220, 1)`,
        borderStyle: `solid`,
        borderTopWidth: 3,
        borderWidth: 0,
        flex: 4
    }
});