'use strict';

import React from 'react';

import LinkStore from '../stores/LinkStore';
import FolderStore from '../stores/FolderStore';
import LinkActions from '../actions/LinkActions';

import LinkForm from './LinkForm';

function getStateFromStores(parentFolderId) {
  return {
    links: LinkStore.getLinksForFolder(parentFolderId) || [],
    selectedFolderId: FolderStore.getSelectedFolderId() 
  };
};

function updateSelectedLink (link) {
  LinkActions.updateSelectedLink(link);
};

function getLinkListItem(link) {
  let iconSource = 'assets/icons/link.png';

  return (
    <div key={link.id} className="link" onClick={updateSelectedLink.bind(null, link)}>
      <img className="folderIcon" src={iconSource} />
      {link.name}
    </div>
  );
};

let LinkList = React.createClass({

  getInitialState () {
    return getStateFromStores(this.props.parentFolderId);
  },

  componentDidMount () {
    LinkStore.addChangeListener(this._onChange);
    FolderStore.addChangeListener(this._onChange);
  },

  componentWillUnmount () {
    LinkStore.removeChangeListener(this._onChange);
    FolderStore.removeChangeListener(this._onChange);
  },

  render () {

    let linkListItems = this.state.links.map(getLinkListItem);

    let parentFolderId = this.props.parentFolderId;

    let linkForm;

    if (this.state.selectedFolderId === parentFolderId) {
      linkForm = <LinkForm parentId={this.props.parentFolderId} />
    }

    return (
      <div className="linkList">
        {linkListItems}
        {linkForm}
      </div>
    );
  },

  _onChange () {
    this.setState(getStateFromStores(this.props.parentFolderId));
  }

});

export default LinkList;