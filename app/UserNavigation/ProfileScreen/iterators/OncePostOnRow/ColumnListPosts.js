import React from 'react';
import {FlatList,View,Alert} from 'react-native';
import ImagePost from '../../../../Components/ImagePost/ImagePost';

export default class ColumnListPosts extends React.Component{
    _GetPosts = async () => {
        let posts = {};
        await fetch("http://10.0.2.2:3000/posts?username="+this.props.userData.username)
            .then((response)=>{return response.json()
                .then((responseJson)=>{
                    posts=responseJson;
                })});
        return posts;
    };
    _LoadData = async () => {
        let data = await this._GetPosts();
        this.setState({userPosts:data.posts,isLoading:false})
    };
    constructor(props){
        super(props);
        this.state={isRefreshing:false,userPosts:[],isLoading:true};
        this._LoadData();
    }
    onRefresh = async()=>{
        this.setState({isRefreshing:true});
        this.setState({isRefreshing:false});
    };
    render(){
        if(!this.state.isLoading) {
            return (
                <FlatList
                    data={this.state.userPosts}
                    renderItem={({item}) => (
                        <ImagePost
                            data={item}
                            userData={this.props.userData}
                            extraData={this.props.extraData}
                            isCurrentUser={true}
                            isDeletingPost={this.props.deletingMode}
                        />
                    )}
                    keyExtractor={(item) => {
                        return item.id
                    }}
                    refreshing={this.state.isRefreshing}
                    onRefresh={() => {
                        this.onRefresh()
                    }}/>
            );
        }
        else return (<View></View>);
    }
}