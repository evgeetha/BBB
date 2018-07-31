import React from 'react';
import { Image, TouchableOpacity, View,  FlatList,ActivityIndicator } from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Button,
  Icon,
  Item,
  Input,
  Fab,
} from 'native-base';
//custom components
import BBBHeader from '../../components/BBBHeader';
import Baby from '../../components/Baby';
import IdentityVerification from '../../components/IdentityVerification';
import BBBIcon from '../../components/BBBIcon';
import Stars from '../../components/Stars';
import { ProgressDialog,Dialog } from 'react-native-simple-dialogs';
// style
import styles from './styles';
import { Layout, Colors, Images } from '../../constants/';
//apollo client
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider, graphql,Mutation } from "react-apollo";
import { withClientState } from "apollo-link-state";
//Apis
import getMostRecentList from './GetMostRecentListings';
import getMostVisitedList from './GetMostVisitedListings';
import getMostLikedList from './GetMostLikedListings';

import getUserVisitedList from './GetUserVisitedListings';
import getUserLikedList from './GetUserLikedListings';
import getUserPostedList from './GetUserPostedListings';



// Get login status
var log_status = '';
var mostRecentList=[];
const GET_LOGIN_STATUS = gql`
     query log @client{
           logged_in
           jwt_token
        }`;

const drawerStatus = 'locked-closed';

const App = () => (
<Query query={GET_LOGIN_STATUS}>
  {({ loading, error, data }) => {
     if (loading) return <Text>{`Loading...`}</Text>;
     if (error) return <Text>{`Error: ${error}`}</Text>;

      log_status = data.logged_in;
	//	drawerStatus = 'unlocked';
      if(log_status==true){
        drawerStatus = 'unlocked';
      }
      else{
      drawerStatus = 'locked-closed';
      }
    return (
      <View/>
    )
  }}
</Query>
)

export default class HomeScreen extends React.Component {

static navigationOptions = () => ({
  drawerLockMode: drawerStatus,
});

  constructor(props) {
    super(props);
    this.onEndReachedCalledDuringMomentum = true;
    this.visitedOnEndReachedCalledDuringMomentum = true;
    this.likedOnEndReachedCalledDuringMomentum=true;
    this.yourLikedOnEndReachedCalledDuringMomentum=true;
    this.yourVisitedOnEndReachedCalledDuringMomentum=true;
    this.yourOnEndReachedCalledDuringMomentum=true;
    this.state = {
      mostRecentList:[],
      mostVisitedList:[],
      mostLikedList:[],
      yourLikedList:[],
      yourVisitedList:[],
      yourList:[],
      LoggedinState:'locked-closed',
      active: false,
      progressVisible:false,
      limit:10,
      page:1,
      isLoadingMore:false,
      visitedLoadingMore:false,
      loadMoreCompleted:false,
      visitedLoadMoreCompleted:false,
      visitedLimit:10,
      visitedPage:1,
      likedPage:1,
      likedLimit:10,
      likedLoadMoreCompleted:false,
      likedLoadingMore:false,

      yourVisitedPage:1,
      yourVisitedLimit:10,
      yourVisitedLoadMoreCompleted:false,
      yourVisitedLoadingMore:false,

      yourLikedPage:1,
      yourLikedLimit:10,
      yourLikedLoadMoreCompleted:false,
      yourLikedLoadingMore:false,

      yourPage:1,
      yourLimit:10,
      yourLoadMoreCompleted:false,
      yourLoadingMore:false,

    };
  }

  _fetchMostRecentListing() {

      if(this.state.loadMoreCompleted){
        console.log("popular Completed");
        return;
      }
      var variables={
        "countryCode":"SG","limit":this.state.limit,"page":this.state.page
      }
      console.log("popular "+variables);
      getMostRecentList(variables).then((res)=>{
          if(res.data.getMostRecentListings.length==0){
            this.setState({
              progressVisible: false,
              isLoadingMore:false,
              loadMoreCompleted:true,
            });
          } else {
          Object.keys(res.data.getMostRecentListings).forEach((key,index)=>{
            console.log(res.data.getMostRecentListings[key].title);


          });
          const data = this.state.mostRecentList.concat(res.data.getMostRecentListings);
          let _page=this.state.page+1;
          this.setState({
            progressVisible: false,
            mostRecentList:data,
            isLoadingMore:false,
            page:_page,
          });

          }
          console.log("popular Array length: "+this.state.mostRecentList.length);

      })
      .catch(error => {
        console.log("Error:" + error.message);
        this.setState({
          progressVisible: false,
          isLoadingMore:false,
        });
      });
  }

  _fetchMostVisitedListing() {

      if(this.state.visitedLoadMoreCompleted){
        console.log("Visited Completed");
        return;
      }
      var variables={
        "countryCode":"SG","limit":this.state.visitedLimit,"page":this.state.visitedPage
      }
      console.log("visited: "+variables);
      getMostVisitedList(variables).then((res)=>{
          if(res.data.getMostVisitedListings.length==0){
            this.setState({
              visitedLoadingMore:false,
              visitedLoadMoreCompleted:true,
            });
          } else {

          const data = this.state.mostVisitedList.concat(res.data.getMostVisitedListings);
          let _page=this.state.visitedPage+1;
          this.setState({
            mostVisitedList:data,
            visitedLoadingMore:false,
            visitedLoadMoreCompleted:false,
            visitedPage:_page,
          });
          }
          console.log("visited Array length: "+this.state.mostVisitedList.length);

      })
      .catch(error => {
        console.log("Error:" + error.message);
        this.setState({
          visitedLoadingMore:false,
        });
      });
  }

  _fetchMostLikedListing() {

      if(this.state.likedLoadMoreCompleted){
        console.log("Liked Completed");
        return;
      }
      var variables={
        "countryCode":"SG","limit":this.state.likedLimit,"page":this.state.likedPage
      }
      console.log("Liked: "+variables);
      getMostLikedList(variables).then((res)=>{
          if(res.data.getMostLikedListings.length==0){
            this.setState({
              likedLoadingMore:false,
              likedLoadMoreCompleted:true,
            });
          } else {

          const data = this.state.mostLikedList.concat(res.data.getMostLikedListings);
          let _page=this.state.likedPage+1;
          this.setState({
            mostLikedList:data,
            likedLoadingMore:false,
            likedLoadMoreCompleted:false,
            likedPage:_page,
          });
          }
          console.log("Liked Array length: "+this.state.mostLikedList.length);

      })
      .catch(error => {
        console.log("Error:" + error.message);
        this.setState({
          likedLoadingMore:false,
        });
      });
  }

  _fetchUserLikedListing() {

      if(this.state.yourLikedLoadMoreCompleted){
        console.log("Your Liked Completed");
        return;
      }
      var variables={
        "countryCode":"SG","limit":this.state.yourLikedLimit,"page":this.state.yourLikedPage
      }
      console.log("Your Liked: "+variables);
      getUserLikedList(variables).then((res)=>{
          if(res.data.getUserLikedListings.length==0){
            this.setState({
              yourLikedLoadingMore:false,
              yourLikedLoadMoreCompleted:true,
            });
          } else {

          const data = this.state.yourLikedList.concat(res.data.getUserLikedListings);
          let _page=this.state.yourLikedPage+1;
          this.setState({
            yourLikedList:data,
            yourLikedLoadingMore:false,
            yourLikedLoadMoreCompleted:false,
            yourLikedPage:_page,
          });
          }
          console.log("Your Liked Array length: "+this.state.yourLikedList.length);

      })
      .catch(error => {
        console.log("Error:" + error.message);
        this.setState({
          yourLikedLoadingMore:false,
        });
      });
  }

  _fetchUserVisitedListing() {

      if(this.state.yourVisitedLoadMoreCompleted){
        console.log("Your Visited Completed");
        return;
      }
      var variables={
        "countryCode":"SG","limit":this.state.yourVisitedLimit,"page":this.state.yourVisitedPage
      }
      console.log("Your Visited: "+variables);
      getUserVisitedList(variables).then((res)=>{
          if(res.data.getUserVisitedListings.length==0){
            this.setState({
              yourVisitedLoadingMore:false,
              yourVisitedLoadMoreCompleted:true,
            });
          } else {

          const data = this.state.yourVisitedList.concat(res.data.getUserVisitedListings);
          let _page=this.state.yourVisitedPage+1;
          this.setState({
            yourVisitedList:data,
            yourVisitedLoadingMore:false,
            yourVisitedLoadMoreCompleted:false,
            yourVisitedPage:_page,
          });
          }
          console.log("Your Visited Array length: "+this.state.yourVisitedList.length);

      })
      .catch(error => {
        console.log("Error:" + error.message);
        this.setState({
          yourVisitedLoadingMore:false,
        });
      });
  }

  _fetchUserPostedListing() {

      if(this.state.yourLoadMoreCompleted){
        console.log("Your Completed");
        return;
      }
      var variables={
        "countryCode":"SG","limit":this.state.yourLimit,"page":this.state.yourPage
      }
      console.log("Your: "+variables);
      getUserPostedList(variables).then((res)=>{
          if(res.data.getUserPostedListings.length==0){
            this.setState({
              yourLoadingMore:false,
              yourLoadMoreCompleted:true,
            });
          } else {

          const data = this.state.yourList.concat(res.data.getUserPostedListings);
          let _page=this.state.yourPage+1;
          this.setState({
            yourList:data,
            yourLoadingMore:false,
            yourLoadMoreCompleted:false,
            yourPage:_page,
          });
          }
          console.log("Your Array length: "+this.state.yourList.length);

      })
      .catch(error => {
        console.log("Error:" + error.message);
        this.setState({
          yourLoadingMore:false,
        });
      });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);

 }

  componentDidMount(){
      this._resetAllApiValues();
      this.setState({
          progressVisible: true,
      });
    this._fetchMostRecentListing();
    this._fetchMostVisitedListing();
    this._fetchMostLikedListing();
    console.log("Login Status",log_status);
    setTimeout(() => {
      if( log_status == true )
      {
        this._fetchUserPostedListing();
        this._fetchUserLikedListing();
        this._fetchUserVisitedListing();
      }
        console.log("Login Status",log_status);
			}, 350);

  }

  _resetAllApiValues(){
    this.setState({
      progressVisible:false,
      limit:10,
      page:1,
      isLoadingMore:false,
      visitedLoadingMore:false,
      loadMoreCompleted:false,
      visitedLoadMoreCompleted:false,
      visitedLimit:10,
      visitedPage:1,
      likedPage:1,
      likedLimit:10,
      likedLoadMoreCompleted:false,
      likedLoadingMore:false,

      yourVisitedPage:1,
      yourVisitedLimit:10,
      yourVisitedLoadMoreCompleted:false,
      yourVisitedLoadingMore:false,

      yourLikedPage:1,
      yourLikedLimit:10,
      yourLikedLoadMoreCompleted:false,
      yourLikedLoadingMore:false,

      yourPage:1,
      yourLimit:10,
      yourLoadMoreCompleted:false,
      yourLoadingMore:false,
    })
  }


  checkLogin = () =>{
    console.log("Log Status: " + log_status);

    if( log_status == false )
    {
      this.props.navigation.navigate('loginScreen');
    }
    else{
      this.props.navigation.navigate('createNewItemScreen')
    }
  }
  checkLoginChat = () =>{
    console.log("Log Status: " + log_status);

    if( log_status == false )
    {
      this.props.navigation.navigate('loginScreen');
    }
    else{
      this.props.navigation.navigate('chatListScreen')
    }
  }
  checkLoginMenu=() =>{
    if(log_status==true){
      this.props.navigation.openDrawer()
   //   this._handleMenu('DrawerOpen');
    }
    else{
      this.props.navigation.navigate('loginScreen');

    }
  }
  /*
  _handleMenu(menuitem) {
    this.props.navigation.navigate(menuitem);
  }
  */

  navigatess = () => {
    this.props.navigation.navigate('productDetailsScreen')
  }
//  item.user.profileImage.imageURL
  _renderItem = ({ item }) => (

      <TouchableOpacity
        onPress={ ()=>this.navigatess()}>
      <View style={styles.imagesSubView}>

        <View>

        {item.primaryImage===null || item.primaryImage.imageKey===null ?   <Image  source={Images.trollie} style={styles.rowImage} /> :
            <Image source={{ uri: "https://s3-ap-southeast-1.amazonaws.com/bbb-app-images/"+item.primaryImage.imageKey+""}} style={styles.rowImage} />
        }
          <TouchableOpacity style={styles.favoriteIconSec} onPress={() => alert("https://s3-ap-southeast-1.amazonaws.com/bbb-app-images/"+item.primaryImage.imageKey+"")}>
          <View >

            <BBBIcon
              name="Favorite"
              size={Layout.moderateScale(18)}
              //color={Colors.tintColor}
              color={item.liked ? Colors.tintColor : Colors.white}
              style={{alignSelf: 'center', justifyContent: 'center', backgroundColor: 'transparent', marginTop: Layout.moderateScale(3) }}
            />
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatIconSec} onPress={() => this.checkLoginChat()}>
          <View >
            <BBBIcon
              name="Chat"
              size={Layout.moderateScale(18)}
              color={item.chatExists ? Colors.tintColor : Colors.white}
              style={{alignSelf: 'center', justifyContent: 'center', backgroundColor: 'transparent', marginTop: Layout.moderateScale(3) }}
          />
          </View>
          </TouchableOpacity>
        </View>

        <Item style={styles.userItemDetailsSec}>
          <View style={styles.userProfileSec}>


            {item.user.profileImage===null || item.user.profileImage.imageKey===null ?   <Image  source={Images.tempUser} style={styles.userProfile} /> :
                <Image source={{ uri: "https://s3-ap-southeast-1.amazonaws.com/bbb-app-images/"+item.user.primaryImage.imageKey+""}} style={styles.userProfile} />
            }
            
            <View style={item.user.online ? styles.userOnline : styles.userOffline} />
          </View>
          <View style={styles.userNameSec}>
            <Text style={styles.userName}>{item.user.profileName}</Text>
          </View>
          <View style={styles.activeuserSec}>
            <IdentityVerification
              width={Layout.moderateScale(30)}
              height={Layout.moderateScale(30)}
              level={item.user.idVerification}
            />
          </View>
        </Item>

        <View>
          <Text style={styles.postDesc} numberOfLines={3}>{item.description}</Text>
        </View>

        <View style={styles.productreviewSec}>
          <View style={styles.ratingSec}>
            <Stars
              size={Layout.moderateScale(14)}
              styleOn={{ color: Colors.starcolor, marginTop: Layout.moderateScale(2) }}
              styleOff={{ color: Colors.lightGray, marginTop: Layout.moderateScale(2) }}
              repeats={item.user.sellerRating}
            />
            <Text style={styles.ratingmsgct}> ({item.user.sellerRatingCount}) </Text>
          </View>
          <View style={styles.priceSec}>
            <Text style={styles.pricetext}>{item.saleMode.currency.currencySymbol}{item.saleMode.price}</Text>
          </View>
        </View>

      </View>
              </TouchableOpacity>
    );

  render() {
    var leftComponent = (
      <Button transparent onPress={() => this.checkLoginMenu() }>
        <BBBIcon
          name="Menu"
          size={Layout.moderateScale(18)}
          color={Colors.white}
          style={{ color: Colors.white }}
        />
      </Button>
    );

    var rightComponent = (
      <Button transparent onPress={() => this._handleMenu('categoryScreen')}>
        <BBBIcon
          name="CategoryIcon"
          size={Layout.moderateScale(18)}
          style={{ color: Colors.white }}
        />
      </Button>
    );
    //console.log(this.state.data);
    //console.log(listItemData);
    return (
      <Container>
      <App />
        <BBBHeader
          title="Bebe Bargains"
          leftComponent={leftComponent}
          rightComponent={rightComponent}
        />
        <Content style={styles.container}>
          <View>
            <View style={styles.searchSec}>
              <Item regular style={styles.searchItem}>
                <Input
                  placeholder="What are you looking for?"
                  style={styles.mainSearch}
                  keyboardType="default"
                  returnKeyType="search"
                  onSubmitEditing={() =>
                    this.props.navigation.navigate('strollersScreen')
                  }
                />
                <BBBIcon name="Search" style={styles.searchicon} />
              </Item>
            </View>

            <View style={styles.imagesMainView}>
              <View style={styles.populerSec}>
                <Text style={styles.populerText}>Most Recent Items</Text>
              </View>
              <FlatList
                horizontal={true}
                data={this.state.mostRecentList}
              	renderItem={this._renderItem}
                contentContainerStyle={styles.listContent}
                onEndReached={this.onEndReached.bind(this)}
                onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={this.renderFooter.bind(this)}
              />
            </View>
            <View style={styles.adSec}>
              <Text style={styles.mainadText}>
                Do you have something to sell or give away?
              </Text>
              <Text style={styles.subtitle}>
                Post it with us and well give you an audience.
              </Text>
            </View>
            <View style={styles.imagesMainView}>
              <View style={styles.populerSec}>
                <Text style={styles.populerText}>
                  Most Visited Items
                </Text>
              </View>
              {this.state.mostVisitedList.length == 0 ?
                <Text style={styles.noDataText}>
                  No Data Found
                </Text>
                :
              <FlatList
                horizontal={true}
                data={this.state.mostVisitedList}
                renderItem={this._renderItem}
                contentContainerStyle={styles.listContent}
                onEndReached={this.visited_onEndReached.bind(this)}
                onMomentumScrollBegin={() => { this.visitedOnEndReachedCalledDuringMomentum = false; }}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={this.visited_renderFooter.bind(this)}
              />
              }
            </View>

            <View style={styles.imagesMainView}>
              <View style={styles.populerSec}>
                <Text style={styles.populerText}>
                  Most Liked Items
                </Text>
              </View>
              {this.state.mostLikedList.length == 0 ?
                <Text style={styles.noDataText}>
                  No Data Found
                </Text>
                :
              <FlatList
                horizontal={true}
                data={this.state.mostLikedList}
                renderItem={this._renderItem}
                contentContainerStyle={styles.listContent}
                onEndReached={this.liked_onEndReached.bind(this)}
                onMomentumScrollBegin={() => { this.likedOnEndReachedCalledDuringMomentum = false; }}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={this.liked_renderFooter.bind(this)}
              />
              }
            </View>

            {log_status == true ?

            <View style={styles.imagesMainView}>
              <View style={styles.populerSec}>
                <Text style={styles.populerText}>
                  Your Recently Visited
                </Text>
              </View>
              {this.state.yourVisitedList.length == 0 ?
                <Text style={styles.noDataText}>
                  No Data Found
                </Text>
                :
              <FlatList
                horizontal={true}
                data={this.state.yourVisitedList}
                renderItem={this._renderItem}
                contentContainerStyle={styles.listContent}
                onEndReached={this.your_visited_onEndReached.bind(this)}
                onMomentumScrollBegin={() => { this.yourVisitedOnEndReachedCalledDuringMomentum = false; }}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={this.your_visited_renderFooter.bind(this)}
              />
              }
            </View>
            : null }
            { log_status ?
           <View style={styles.imagesMainView}>
              <View style={styles.populerSec}>
                <Text style={styles.populerText}>
                  Your Recently Liked
                </Text>
              </View>
              {this.state.yourLikedList.length == 0 ?
                <Text style={styles.noDataText}>
                  No Data Found
                </Text>
                :
              <FlatList
                horizontal={true}
                data={this.state.yourLikedList}
                renderItem={this._renderItem}
                contentContainerStyle={styles.listContent}
                onEndReached={this.your_liked_onEndReached.bind(this)}
                onMomentumScrollBegin={() => { this.yourLikedOnEndReachedCalledDuringMomentum = false; }}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={this.your_visited_renderFooter.bind(this)}
              />
              }
            </View>
            : null }

              { log_status ?
            <View style={styles.imagesMainView}>
              <View style={styles.populerSec}>
                <Text style={styles.populerText}>
                  Your Listings
                </Text>
              </View>
              {this.state.yourList.length == 0 ?
                <Text style={styles.noDataText}>
                  No Data Found
                </Text>
                :
              <FlatList
                horizontal={true}
                data={this.state.yourList}
                renderItem={this._renderItem}
                contentContainerStyle={styles.listContent}
                onEndReached={this.your_onEndReached.bind(this)}
                onMomentumScrollBegin={() => { this.yourOnEndReachedCalledDuringMomentum = false; }}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={this.your_renderFooter.bind(this)}
              />
              }
            </View>
            : null }

          </View>
        </Content>
        <Fab
          active={this.state.active}
          direction="up"
          style={styles.fabStyle}
          position="bottomRight"
          onPress={() => this.checkLogin()}
        /*onPress={() => this.props.navigation.navigate('createNewItemScreen')}*/
          >
          <Icon name="ios-add" style={{ fontSize: Layout.moderateScale(20) }} />
        </Fab>
        <ProgressDialog
            visible={this.state.progressVisible}
             message="Please Wait..."
            activityIndicatorSize="large"
                       />
      </Container>
    );
  }

  /* START POPULAR LISTING*/
  renderFooter () {
        return this.state.isLoadingMore && !this.state.loadMoreCompleted ?   <View style={{ flex: 1,  flexDirection: 'row', padding: 10 }}>
            <ActivityIndicator size="small" />
            </View>  : null
    }
    onEndReached = ({ distanceFromEnd }) => {
      console.log("Popular"+distanceFromEnd);
      console.log(this.onEndReachedCalledDuringMomentum);
      if(!this.onEndReachedCalledDuringMomentum && !this.state.isLoadingMore){
          this.setState({ isLoadingMore: true });
          this._fetchMostRecentListing();
          this.onEndReachedCalledDuringMomentum = true;
      }
  }
/* END POPULAR LISTING*/

/* START MOST VISITED LISTING*/
visited_renderFooter () {
      return this.state.visitedLoadingMore && !this.state.visitedLoadMoreCompleted ?   <View style={{ flex: 1,  flexDirection: 'row', padding: 10 }}>
          <ActivityIndicator size="small" />
          </View>  : null
  }
  visited_onEndReached = ({ distanceFromEnd }) => {
    console.log("Visited"+ distanceFromEnd);
    console.log(this.visitedOnEndReachedCalledDuringMomentum);
    if(!this.visitedOnEndReachedCalledDuringMomentum && !this.state.visitedLoadingMore){
        this.setState({ visitedLoadingMore: true });
        this._fetchMostVisitedListing();
        this.visitedOnEndReachedCalledDuringMomentum = true;
    }
}
/* END MOST VISITED LISTING*/

/* START MOST LIKED LISTING*/
liked_renderFooter () {
      return this.state.likedLoadingMore && !this.state.likedLoadMoreCompleted ?   <View style={{ flex: 1,  flexDirection: 'row', padding: 10 }}>
          <ActivityIndicator size="small" />
          </View>  : null
  }
  liked_onEndReached = ({ distanceFromEnd }) => {
    console.log("liked"+ distanceFromEnd);
    console.log(this.likedOnEndReachedCalledDuringMomentum);
    if(!this.likedOnEndReachedCalledDuringMomentum && !this.state.likedLoadingMore){
        this.setState({ likedLoadingMore: true });
        this._fetchMostLikedListing();
        this.likedOnEndReachedCalledDuringMomentum = true;
    }
}
/* END MOST LIKED LISTING*/

/* START YOUR LIKED LISTING*/
your_liked_renderFooter () {
      return this.state.yourLikedLoadingMore && !this.state.yourLikedLoadMoreCompleted ?   <View style={{ flex: 1,  flexDirection: 'row', padding: 10 }}>
          <ActivityIndicator size="small" />
          </View>  : null
  }
  your_liked_onEndReached = ({ distanceFromEnd }) => {
    console.log("your liked"+ distanceFromEnd);
    console.log(this.yourLikedOnEndReachedCalledDuringMomentum);
    if(!this.yourLikedOnEndReachedCalledDuringMomentum && !this.state.yourLikedLoadingMore){
        this.setState({ yourLikedLoadingMore: true });
        this._fetchUserLikedListing();
        this.yourLikedOnEndReachedCalledDuringMomentum = true;
    }
}
/* END YOUR LIKED LISTING*/

/* START YOUR LIKED LISTING*/
your_visited_renderFooter () {
      return this.state.yourVisitedLoadingMore && !this.state.yourVisitedLoadMoreCompleted ?   <View style={{ flex: 1,  flexDirection: 'row', padding: 10 }}>
          <ActivityIndicator size="small" />
          </View>  : null
  }
  your_visited_onEndReached = ({ distanceFromEnd }) => {
    console.log("your visited"+ distanceFromEnd);
    console.log(this.yourVisitedOnEndReachedCalledDuringMomentum);
    if(!this.yourVisitedOnEndReachedCalledDuringMomentum && !this.state.yourVisitedLoadingMore){
        this.setState({ yourVisitedLoadingMore: true });
        this._fetchUserVisitedListing();
        this.yourVisitedOnEndReachedCalledDuringMomentum = true;
    }
}
/* END YOUR LIKED LISTING*/

/* START YOUR LISTING*/
your_renderFooter () {
      return this.state.yourLoadingMore && !this.state.yourLoadMoreCompleted ?   <View style={{ flex: 1,  flexDirection: 'row', padding: 10 }}>
          <ActivityIndicator size="small" />
          </View>  : null
  }
  your_onEndReached = ({ distanceFromEnd }) => {
    console.log("your visited"+ distanceFromEnd);
    console.log(this.yourOnEndReachedCalledDuringMomentum);
    if(!this.yourOnEndReachedCalledDuringMomentum && !this.state.yourLoadingMore){
        this.setState({ yourLoadingMore: true });
        this._fetchUserPostedListing();
        this.yourOnEndReachedCalledDuringMomentum = true;
    }
}
/* END YOUR LISTING*/


}
