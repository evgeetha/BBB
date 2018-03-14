import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

// screens
import MainDrawerNavigator from './MainDrawerNavigator';

import LoginScreen from '../screens/LoginScreen';
import CounrtyScreen from '../screens/CountryScreen';

const RootStackNavigator = StackNavigator(
	{
		mainScreen: { screen: MainDrawerNavigator },
		loginScreen: { screen: LoginScreen },
		counrtyScreen: { screen: CounrtyScreen },
	},
	{
		headerMode: 'none',
		initialRouteName: 'counrtyScreen',
		gesturesEnabled: true,
	}
);

export default class RootNavigator extends React.Component {
	componentDidMount() {
		this._notificationSubscription = this._registerForPushNotifications();
	}

	componentWillUnmount() {
		this._notificationSubscription && this._notificationSubscription.remove();
	}

	render() {
		return <RootStackNavigator />;
	}

	_registerForPushNotifications() {
		// Send our push token over to our backend so we can receive notifications
		// You can comment the following line out if you want to stop receiving
		// a notification every time you open the app. Check out the source
		// for this function in api/registerForPushNotificationsAsync.js
		registerForPushNotificationsAsync();

		// Watch for incoming notifications
		this._notificationSubscription = Notifications.addListener(
			this._handleNotification
		);
	}

	_handleNotification = ({ origin, data }) => {
		console.log(
			`Push notification ${origin} with data: ${JSON.stringify(data)}`
		);
	};
}
