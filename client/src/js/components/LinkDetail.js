'use strict';

import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import '../../stylesheets/components/linkDetail.scss';


let LinkDetail = React.createClass({


  
  render () {

    let link = this.props.currentLink;

    return (
      <div className="linkDetail">
        <div className="linkName"> {link.name} </div>
        <div className="linkURL"> <a href={link.url} target="_blank"> {link.url} </a> </div>
        <CommentList comments={this.props.comments} />
        <CommentForm addComment={this.props.addComment} />
      </div>
    );
  }
});

export default LinkDetail;