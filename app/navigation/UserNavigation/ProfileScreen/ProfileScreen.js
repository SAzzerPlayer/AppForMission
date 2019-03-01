import React from 'react';
import {View,Text,ImageBackground,ScrollView,Image,TouchableHighlight} from 'react-native';
import {Header,Icon} from 'react-native-elements';
import styles from './ProfileStyles';
export default class ProfileScreen extends React.Component {

    static navigationOptions = {
        title: 'Profile'
    };

    render(){
        return(
            <ImageBackground
                source={require('../materials/UserBackground.jpg')}
                style={{width:'100%', height: '100%'}}>
                <Header
                    leftComponent={{icon: 'menu',color:'#fff'}}

                    centerComponent={{text: 'Profile', style:{color:'#fff'}}}
                    rightComponent={{icon: 'settings', color:'#fff'}}
                    />
                <View style={styles.ProfUserContain}>
                    <View style={styles.AvatarContain}>
                        <Image style={styles.AvatarImage} />
                    </View>
                    <View style={styles.InfoUserContain}>
                        <View style={styles.NickUserContain}>
                            <View style={styles.IconContain}>
                                <Icon
                                    name={'verified-user'}
                                    style={styles.IconStyle}
                                />
                            </View>
                            <View style={styles.NickNameContain}>
                                <Text style={styles.NickNameText}>UserName</Text>
                            </View>
                        </View>
                        <View style={styles.StatisticsUserContain}>
                            <TouchableHighlight
                                style={styles.TouchStatics}
                                onPress={() => {}}
                            >
                                <Text
                                    ellipsizeMode={`tail`}
                                    selectable={false}
                                    style={styles.StaticsUserText}
                                >
                                    Followers: 'quantity'{"\n"}Subsribes: 'quantity'{"\n"}
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                <View style={styles.PostsContain}>
                    <ScrollView>
                        <View style={styles.RowImageContain}>
                            <Image style={styles.ImageInRow} />
                            <Image style={styles.ImageInRow} />
                            <Image style={styles.ImageInRow} />
                        </View>
                        <View style={styles.RowImageContain}>
                            <Image style={styles.ImageInRow} />
                            <Image style={styles.ImageInRow} />
                            <Image style={styles.ImageInRow} />
                        </View>
                        <View style={styles.RowImageContain}>
                            <Image style={styles.ImageInRow} />
                            <Image style={styles.ImageInRow} />
                            <Image style={styles.ImageInRow} />
                        </View>
                        <View style={styles.RowImageContain}>
                            <Image style={styles.ImageInRow} />
                            <Image style={styles.ImageInRow} />
                            <Image style={styles.ImageInRow} />
                        </View>
                        <View style={styles.RowImageContain}>
                            <Image style={styles.ImageInRow} />
                            <Image style={styles.ImageInRow} />
                            <Image style={styles.ImageInRow} />
                        </View>
                        <View style={styles.RowImageContain}>
                            <Image style={styles.ImageInRow} />
                            <Image style={styles.ImageInRow} />
                            <Image style={styles.ImageInRow} />
                        </View>
                        <View style={styles.RowImageContain}>
                            <Image style={styles.ImageInRow} />
                            <Image style={styles.ImageInRow} />
                            <Image style={styles.ImageInRow} />
                        </View>
                    </ScrollView>
                </View>
                </ImageBackground>
        )
    }
}