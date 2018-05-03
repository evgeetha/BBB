import React, { Component } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider, graphql,Mutation } from "react-apollo";
import { withClientState } from "apollo-link-state";
import { ApolloLink } from "apollo-link";
import gql from "graphql-tag";

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Layout, Colors } from '../../constants/';
import {Alert, Image, ImageBackground } from 'react-native';


import { DrawerNavigator, NavigationActions } from 'react-navigation';


var facebook_jwt= null;

const FACEBOOK_LOGIN = gql`
  mutation loginFacebook($token: String!) {
    loginFacebook(token: $token)
  }
`;
export default LoggedinState = graphql(gql`
  mutation logstatus {
    logstatus @client
  }
`)(
  class extends Component {

    onLoggedinState = () => {
      this.props.mutate({});
    };

    render() {
      return (
        <View {...this.props}>
        <Mutation mutation={FACEBOOK_LOGIN} {...this.props}>

        {(loginFacebook, { data }) => (
          <FontAwesome
            name="facebook"
            size={Layout.moderateScale(25)}
            style={{
              color: Colors.fbbgicon,
            }}
            onPress={async () => {
              const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('279793089219775', {
                  permissions: ['public_profile', 'email'],
                });

              if (type === 'success') {
                console.log(token);

                const token = await Expo.SecureStore.getItemAsync('token');

                console.log('Bearer ' + token);
                Expo.SecureStore.setItemAsync('JWTToken', token);

                var jwtt = '';
                jwtt = await Expo.SecureStore.getItemAsync('JWTToken')
                console.log('token' + jwtt);


                facebook_jwt = token;

                // const data = await loginFacebook({
                //   variables: { token: token },
                // })

               //TODO: Add this returned token to securestore and then navigate on.
               //Expo.SecureStore.setItemAsync('token', data.data.loginFacebook);

              //  console.log(data.data.loginFacebook);

                await this.onLoggedinState();

                //After Login Complete It Will redirect to
                let arriveFrom = '';
                arriveFrom = Expo.SecureStore.getItemAsync('ArrivedFrom').then();
                this.setState({ArriverFrom: arriveFrom})
                console.log("Chat Log : " + this.state.ArriverFrom);

                if(this.state.ArriverFrom == 'ChatListScreen')
                {
                  this.props.navigation.navigate('ChatListScreen');
                }
                if(this.state.ArriverFrom == 'ProfileScreen')
                {
                  this.props.navigation.navigate('ProfileScreen');
                }
                if(this.state.ArriverFrom == 'CreateNewItemScreen')
                {
                  this.props.navigation.navigate('CreateNewItemScreen');
                }
                else{
                this.props.navigation.navigate('homeScreen');
                }
              }
              else{
                console.log("login failed");
              }
            }}
          />
        )}
        </Mutation>
        </View>
      );
    }
  }
);
//
// export default class Facebook extends Component {
//
//   render() {
//
//     return (
//       <ApolloProvider client={client}>
//         <LoggedinState {...this.props}/>
//       </ApolloProvider>
//     );
//
//   }
// }
