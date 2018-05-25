import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyDD5ig-qSN7yXPJCnwrRe_AHkK5P_5JNkk",
            authDomain: "manager-2989e.firebaseapp.com",
            databaseURL: "https://manager-2989e.firebaseio.com",
            projectId: "manager-2989e",
            storageBucket: "",
            messagingSenderId: "394955952877"
          };

          firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>Hello!</Text>
                </View>
            </Provider>
        );
    }
}

export default App;