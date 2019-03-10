import React from 'react';
import {FlatList,View} from 'react-native';
import ShortImagePost from '../../../../Components/ShortImagePost/ShortImagePost';

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
        this._LoadData = this._LoadData.bind(this);
        this.state={userPosts:[],isLoading:true};
        this._LoadData();
    }
    render(){
        if(!this.state.isLoading) {
            return (
                <FlatList
                    data={this.state.userPosts}
                    renderItem={({item}) => (
                        <ShortImagePost
                            data={item}
                            userData={this.props.userData}
                            isCurrentUser={true}
                        />
                    )}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    numColumns={2}
                    columnWrapperStyle={{
                        justifyContent: `space-around`,
                        marginTop: 20,
                        flexDirection: `row`
                    }}
                />
            );
        }
        else return (<View></View>);
    }
}

