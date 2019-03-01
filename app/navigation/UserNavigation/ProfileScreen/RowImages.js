import React from 'react';
import {View,Text,Image} from 'react-native';
import styles from './ProfileStyles';
/*
*   JSON STRUCTURE:
*   CURRENT_USER:
*       NAME:
*       PASSWORD:
*       POSTS:
*           ID:
*               IMAGEURL:
*               TEXT:
*               LIKES:
*   NOW THIS STRUCTURE ISN'T BUILDED.
*
*   ISN'T ENDED
*
 */
export class RowImages extends React.Component{
    constructor(props){
        super(props);
        this.state={username:'',elements:null,tempURL: ''};
        this.state.elements = this.getImages();
    }
    getImages= async () => {
        const user = JSON.parse(await AsyncStorage.getItem('currentUser:'));
        return user['posts'];
    };

    collectImages(collection){
        let exitJSX = Array();
        // for( let x in collection['id']){
        //     let tempURL=collection[x]['imageurl'];
        //     exitJSX[exitJSX.length] = (
        //     <View style={styles.RowImageContain}>
        //         <Image style={styles.ImageInRow} source={{uri:{tempURL}}}/>
        //         <Image style={styles.ImageInRow} />
        //         <Image style={styles.ImageInRow} />
        //     </View>
        //     )
        // }
            let tempURL = [null,null,null];
            for( let x in collection['id']){
                let counter = x%3;
                tempURL[counter]=collection[x]['imageurl'];
                if(counter%3==0 && tempURL[(counter-1)%3]!==null){
                    exitJSX[exitJSX.length]=(
                        <View style={styles.RowImageContain}>
                            <Image style={styles.ImageInRow} source={{uri:tempURL[0]}}/>
                            <Image style={styles.ImageInRow} source={{uri:tempURL[1]}}/>
                            <Image style={styles.ImageInRow} source={{uri:tempURL[2]}}/>
                        </View>);
                }
            }
        return exitJSX;

    }
    BuildedRows = this.collectImages(this.state.elements);
    render(){
        return(
            this.BuildedRows
        );
    }
}
