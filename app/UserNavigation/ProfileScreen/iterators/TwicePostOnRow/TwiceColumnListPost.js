import React from 'react';
import {FlatList} from 'react-native';
import ShortImagePost from '../../../../Components/ShortImagePost/ShortImagePost';

export default class ColumnListPosts extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <FlatList
                data={this.props.userData.posts}
                renderItem={({item})=>(
                    <ShortImagePost
                        data={item}
                        userData={this.props.userData}
                        isCurrentUser={true}
                    />
                )}
                keyExtractor={(item,index)=>{item.id}}
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: `space-around`,
                    marginTop:20,
                    flexDirection: `row`}}
                refreshing={true}
            />
        );
    }
}

