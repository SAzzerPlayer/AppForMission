import React from 'react';
import {FlatList} from 'react-native';
import ImagePost from '../../../../Components/ImagePost/ImagePost-1';

export default class ColumnListPosts extends React.Component{
    constructor(props){
        super(props);
        this.state={isRefreshing:false,amountPosts:this.props.userData.posts.length}
    }
    onRefresh = async()=>{
        this.setState({isRefreshing:true});
        await this.setState({amountPosts:this.props.userData.posts.length});
        this.setState({isRefreshing:false});
    };
    render(){
        return(
            <FlatList
            data={this.props.userData.posts.slice().reverse()}
            renderItem={({item})=>(
                <ImagePost
                    data={item}
                    userData={this.props.userData}
                    extraData={this.props.extraData}
                    isCurrentUser={true}
                    isDeletingPost={this.props.deletingMode}
                />
            )}
            keyExtractor={(item,index)=>{item.id}}
            refreshing={this.state.isRefreshing}
            onRefresh={()=>{this.onRefresh()}}/>
        );
    }
}