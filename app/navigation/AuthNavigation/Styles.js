import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create(
    {
        viewWelcome:{
            alignItems:'center',
            justifyContent:'space-between',
            flex: 1
        },
        button:{
            alignItems:'center'
        },
        textWelcome:{
            fontSize:18,
            color: "#fffafa"
        },
        textInfo: {
            fontSize: 14,
            //color: "#F5F5F5",
            color:'#FFFAFA',
            textAlign:'center'
        },
        inputField: {
            margin:15,
            height: 35,
            borderWidth: 1,
            borderColor:'white',
            opacity:0.5
        }
    }
);