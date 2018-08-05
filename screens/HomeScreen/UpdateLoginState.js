import React, { Component } from 'react';
import { Query } from "react-apollo";
import PropTypes from 'prop-types';
import {
  View
} from 'react-native';
import {
  GET_LOGIN_STATUS
} from '../../graphql/Queries'

class UpdateLoginState extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    // Necessary to stop an infinite loop because of the call to setState in the render() below.
    return false;
  }
//        fetchPolicy="cache-only"
  render() {
    return (
      <Query
        query = {GET_LOGIN_STATUS}
      >
        {({ data, error }) => {
          if (error) {
            return <View><Text>Error: {error.message}</Text></View>
          }
          if (data) {
            if (typeof(data.logged_in) == typeof(true)) {
              this.props.setLoginState( data.logged_in )
            }
          }
          return null
        }}
      </Query>
    )
  }
}

UpdateLoginState.propTypes = {
  setLoginState: PropTypes.func.isRequired,
}

export default UpdateLoginState
