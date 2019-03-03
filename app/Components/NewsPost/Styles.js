import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    NewsPostContain:{
        backgroundColor: `rgba(224, 226, 252, 1)`,
        borderRadius: 6,
        borderTopRightRadius: 64,
        flex: 1,
        justifyContent: `center`,
        marginBottom: 10,
        marginTop: 10,
        maxHeight: `100%`,
        minHeight: 356
    },
    NewsPostTitleContain:{
        borderBottomWidth: 2,
        flex: 1,
        justifyContent: `space-around`,
        minHeight: 20,
        marginRight: 5,
        flexDirection: `row`,
        alignItems: `center`,
        borderColor: `rgba(54, 125, 221, 1)`
    },
    NewsPostDotsContain:{
        width: 64,
        height: `100%`,
        justifyContent: `space-around`,
        flexDirection: `row`,
        alignItems: `center`
    },
    NewsPostDecorDot:{
        flex: 1,
        width: 16,
        height: 16,
        backgroundColor: `rgba(83, 98, 232, 1)`,
        borderRadius: 8,
        maxWidth: 16
    },
    NewsPostTitleText:{
        fontSize: 18,
        fontWeight: `bold`,
        textAlign: `center`,
        textDecorationLine: `underline`,
        margin: 10
    },
    NewsPostTitleNullContain:{
        width: 64,
        height: `100%`
    },
    NewsPostImageContain:{
        flex: 1,
        flexDirection: `row`,
        justifyContent: `center`,
        marginTop: 5,
        maxHeight: 128,
        minHeight: 128,
        width: `100%`
    },
    NewsPostImage:{
        backgroundColor: `rgba(240, 236, 236, 1)`,
        borderColor: `rgba(246, 232, 232, 1)`,
        borderRadius: 5,
        borderWidth: 4,
        height: 128,
        width: 256,
        maxWidth: 256,
        maxHeight: 256,
        minWidth: 128,
        minHeight: 128
    },
    NewsPostDescriptionContain:{
        backgroundColor: `rgba(248, 243, 243, 0.74)`,
        borderRadius: 10,
        flex: 4,
        justifyContent: `flex-start`,
        margin: 10
    },
    NewsPostDescriptionText:{
        flex: 1,
        position: `relative`,
        maxHeight: 512,
        minHeight: 124,
        fontWeight: `400`,
        fontFamily: `sans-serif-condensed`
    }
});