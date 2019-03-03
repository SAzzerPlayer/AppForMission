import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    NewsPostsTitle: {
        fontSize: 18,
        fontWeight: `bold`,
        maxHeight: 20,
        textAlign: `center`,
        textDecorationLine: `underline`
    },
    NPostMediumTitleContain: { flex: 1 },
    NPostMediumImage: {
        backgroundColor: `rgba(178, 112, 112, 1)`,
        borderRadius: 10,
        height: 128,
        width: 128
    },
    NPostMediumImageContain: { flex: 3, justifyContent: `center` },
    NPostDescriptionText: { fontSize: 14 },
    NPostMediumDescriptionContain: { flex: 4, margin: 5 },
    NPostMediuMDescContain: { flex: 6, flexDirection: `row` },
    NPostMediumContentContain: {
        flex: 3,
        flexDirection: `column`,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5
    },
    NPostMediumContain: {
        backgroundColor: `rgba(224, 226, 252, 1)`,
        flexDirection: `row`,
        marginBottom: 5,
        marginTop: 5,
        maxHeight: 256,
        minHeight: 168,
        borderWidth:2,
        borderRadius: 10,
        borderColor: 'rgba(141,179,242,1)',
        opacity: 1,
        width: `100%`
    },
    NPostSmallTitleText: {
        fontSize: 18,
        fontWeight: `bold`,
        textAlign: `center`,
        textDecorationLine: `underline`
    },
    NPostSmallTitleContain: { flex: 1, maxHeight: 20 },
    NPostSmallDescriptionContain: { flex: 4, margin: 10 },
    NPostSmallContain: {
        backgroundColor: `rgba(224, 226, 252, 1)`,
        flex: 1,
        marginBottom: 5,
        marginTop: 5,
        borderWidth:2,
        borderRadius: 10,
        borderColor: 'rgba(141,179,242,1)',
        maxHeight: 256,
        minHeight: 128
    },
    NPostLargeTitleText: {
        fontSize: 18,
        fontWeight: `bold`,
        textAlign: `center`,
        textDecorationLine: `underline`
    },
    NPostLargeTitleContain: { flex: 1, justifyContent: `center`, minHeight: 20 },
    NPostLargeImage: {
        backgroundColor: `rgba(217, 131, 131, 1)`,
        borderRadius: 5,
        height: 128,
        width: 256
    },
    NPostLargeImageContain: {
        flex: 1,
        flexDirection: `row`,
        justifyContent: `center`,
        marginTop: 5,
        maxHeight: 128,
        minHeight: 128,
        width: `100%`
    },
    NPostLargeDescriptionContain: {
        flex: 4,
        justifyContent: `flex-start`,
        margin: 10
    },
    NPostLargeContain: {
        backgroundColor: `rgba(224, 226, 252, 1)`,
        flex: 1,
        justifyContent: `center`,
        marginBottom: 5,
        marginTop: 5,
        borderWidth:2,
        borderRadius: 10,
        borderColor: 'rgba(141,179,242,1)',
        maxHeight: 256,
        minHeight: 256
    },
    ScrollNews: { margin: 10 },
});