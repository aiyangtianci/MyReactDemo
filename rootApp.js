'use strict'

import React,{Component} from 'react';// 各种包一定要注意导入
import {
    AppRegistry,
    ScrollView,
    Text,
    Image,
    View,
    Button,
    StyleSheet,
    TextInput,
    FlatList,
    SectionList
} from 'react-native';

import {StackNavigator} from 'react-navigation';//先在项目根目录导入库，命令行输入：npm install --save react-navigation

import ChatScreen from './ChatScreen';

class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Welcome',//设置标题内容
    };

    render() {
        const {navigate} = this.props.navigation;
        let pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
        this.state = {text: ''};
        return (
            <ScrollView>
                <View>
                    <View style={{alignItems: 'center'}}>
                        <Image source={pic} style={{width: 193, height: 110, marginTop: 20}}/>

                        <Greeting name='Rexxar'/>
                        <Greeting name='Jaina'/>

                        <Blink text='I love to blink'/>
                        <Blink text='Yes blinking is so great'/>
                        <Blink text='Look at me look at me look at me'/>

                        <View style={{
                            width: 250, height: 30,
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>
                            <Text style={{flex: 1, backgroundColor: 'powderblue'}}>flex1</Text>
                            <Text style={{flex: 1, backgroundColor: 'powderblue'}}>flex2</Text>
                        </View>

                        <Text style={styles.bigblue}>just bigblue</Text>
                        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                        <TextInput
                            style={{width: 193, height: 40, padding: 5}}
                            placeholder="Type here to translate!"
                            onChangeText={(text) => this.setState({text})}
                        />
                        <Text
                            style={[styles.red, styles.bigblue]}>{this.state.text.split(' ').map((word) => word && 'x').join(' ')}</Text>

                        <View style={styles.container}>
                            <FlatList
                                data={[
                                    {key: 'FlatList1'},
                                    {key: 'FlatList2'},
                                    {key: 'FlatList3'},
                                ]}
                                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                            />
                        </View>
                        <View style={styles.container}>
                            <SectionList
                                sections={[
                                    {title: 'D', data: ['Devin']},
                                    {
                                        title: 'J',
                                        data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']
                                    },
                                ]}
                                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                                renderSectionHeader={({section}) => <Text
                                    style={styles.sectionHeader}>{section.title}</Text>}
                            />
                        </View>
                    </View>
                </View>

                <View>
                    <Button
                        onPress={() => navigate('Chat', {user: 'Lucy'})}
                        title="跳转下一页"/>
                </View>
            </ScrollView>
        );
    }
}

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText};
            });
        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
    container: {
        flex: 1,
        paddingTop: 5
    },
    item: {
        padding: 5,
        fontSize: 18,
        height: 40,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'powderblue',
    }
});

const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},//先进入Home类
    Chat: {screen: ChatScreen},
});

export default SimpleApp;