import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    ImageInRow: {
        backgroundColor: `rgba(199, 125, 125, 1)`,
        borderRadius: 32,
        height: 64,
        width: 64
    },
    ImageContain: {
        flex: 1,
        flexDirection: `row`,
        borderRadius: 32,
        maxHeight: 64,
        maxWidth: 64,
        minHeight: 64,
        minWidth: 64
    },
    NotifyText: { fontSize: 16, margin: 10, textAlign: `center` },
    notifyRowContain: { flex: 5, flexDirection: `row` },
    rowNotifyContain: {
        borderRadius: 32,
        backgroundColor: `rgba(227, 233, 250, 1)`,
        flex: 2,
        flexDirection: `row`,
        margin: 5
    },
    ScrollLikes: { margin: 10 },
    border: { flex: 6 }
});