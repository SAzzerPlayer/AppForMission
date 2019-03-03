import React from 'react';
import {AppRegistry,View} from 'react-native';
import ImagePost from '../../../../Components/ImagePost/ImagePost';
/*
* Итератор постов по указанному в параметрах списку(массиву) данных о постах
*
* */
export default class OncePostOnRow extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const datas = this.props.userPosts;
        const list=Array();
        for( let i =0;i<datas.length;i++){
            list[i]=<ImagePost isCurrentUser={true}/>
        }
        return(
            list
        );
    }
}

AppRegistry.registerComponent('OncePostOnRow',()=>{OncePostOnRow});