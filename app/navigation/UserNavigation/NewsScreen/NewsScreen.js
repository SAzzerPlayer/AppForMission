import React from 'react';
import {View,Text,ImageBackground,Image,ScrollView} from 'react-native';
import {Header} from 'react-native-elements';
import styles from './NewsStyles';

/*
* ТОЛЬКО ШАБЛОН. ЕЩЕ НЕ ЗАКОНЧЕН ЭКРАН
*
* */

export default class NewsScreen extends React.Component {

    static navigationOptions = {
        title: 'News'
    };

    render(){
        return(
            <ImageBackground
                source={require('../materials/UserBackground.jpg')}
                style={{width:'100%', height: '100%'}}>
                <Header
                    leftComponent={{icon: 'menu',color:'#fff'}}
                    centerComponent={{text: 'News', style:{color:'#fff'}}}
                    rightComponent={{icon: 'settings', color:'#fff'}}
                />
                <ScrollView style={styles.ScrollNews}>
                    <View style={styles.NPostMediumContain}>
                        <View style={styles.NPostMediumContentContain}>
                            <View style={styles.NPostMediumTitleContain}>
                                <Text style={styles.NewsPostsTitle}>Title</Text>
                            </View>
                            <View style={styles.NPostMediuMDescContain}>
                                <View style={styles.NPostMediumImageContain}>
                                    <Image style={styles.NPostMediumImage} />
                                </View>
                                <View style={styles.NPostMediumDescriptionContain}>
                                    <Text style={styles.NPostDescriptionText}>
                                        Some string
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.NPostSmallContain}>
                        <View style={styles.NPostSmallTitleContain}>
                            <Text style={styles.NPostSmallTitleText}>Title</Text>
                        </View>
                        <View style={styles.NPostSmallDescriptionContain}>
                            <Text>Some String</Text>
                        </View>
                    </View>
                    <View style={styles.NPostLargeContain}>
                        <View style={styles.NPostLargeTitleContain}>
                            <Text style={styles.NPostLargeTitleText}>Title</Text>
                        </View>
                        <View style={styles.NPostLargeImageContain}>
                            <Image style={styles.NPostLargeImage} />
                        </View>
                        <View style={styles.NPostLargeDescriptionContain}>
                            <Text>Some string</Text>
                        </View>
                    </View>
                    <View style={styles.NPostLargeContain}>
                        <View style={styles.NPostLargeTitleContain}>
                            <Text style={styles.NPostLargeTitleText}>Title</Text>
                        </View>
                        <View style={styles.NPostLargeImageContain}>
                            <Image style={styles.NPostLargeImage} />
                        </View>
                        <View style={styles.NPostLargeDescriptionContain}>
                            <Text>Some string</Text>
                        </View>
                    </View>
                    <View style={styles.NPostLargeContain}>
                        <View style={styles.NPostLargeTitleContain}>
                            <Text style={styles.NPostLargeTitleText}>Title</Text>
                        </View>
                        <View style={styles.NPostLargeImageContain}>
                            <Image style={styles.NPostLargeImage} />
                        </View>
                        <View style={styles.NPostLargeDescriptionContain}>
                            <Text>Some string</Text>
                        </View>
                    </View>
                    <View style={styles.NPostLargeContain}>
                        <View style={styles.NPostLargeTitleContain}>
                            <Text style={styles.NPostLargeTitleText}>Title</Text>
                        </View>
                        <View style={styles.NPostLargeImageContain}>
                            <Image style={styles.NPostLargeImage} />
                        </View>
                        <View style={styles.NPostLargeDescriptionContain}>
                            <Text>Some string</Text>
                        </View>
                    </View>
                    <View style={styles.NPostLargeContain}>
                        <View style={styles.NPostLargeTitleContain}>
                            <Text style={styles.NPostLargeTitleText}>Title</Text>
                        </View>
                        <View style={styles.NPostLargeImageContain}>
                            <Image style={styles.NPostLargeImage} />
                        </View>
                        <View style={styles.NPostLargeDescriptionContain}>
                            <Text>Some string</Text>
                        </View>
                    </View>
                    <View style={styles.NPostLargeContain}>
                        <View style={styles.NPostLargeTitleContain}>
                            <Text style={styles.NPostLargeTitleText}>Title</Text>
                        </View>
                        <View style={styles.NPostLargeImageContain}>
                            <Image style={styles.NPostLargeImage} />
                        </View>
                        <View style={styles.NPostLargeDescriptionContain}>
                            <Text>Some string</Text>
                        </View>
                    </View>
                </ScrollView>
                </ImageBackground>
        )
    }
}