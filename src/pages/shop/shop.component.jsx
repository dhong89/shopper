import React from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux'

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { updateCollections } from '../../redux/shop/shop.actions.js';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

//Created functional component before moving on to a class component.
// const ShopPage = ({ match }) => (
//   <div className="shop-page">
//     <Route exact path={`${match.path}`} component={CollectionsOverview} />
//     <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//   </div>
// );


class ShopPage extends React.Component {

  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collection')

    collectionRef.onSnapshot( async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
     updateCollections(collectionsMap);
    } )
  }
  
  render(){
    const { match } = this.props
    return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
    )
  }
}


const mapDispatchToprops = dispatch => ({
  updateCollections: collectionsMap => 
  dispatch(updateCollections(collectionsMap))
})

export default connect (null, mapDispatchToprops)(ShopPage);
