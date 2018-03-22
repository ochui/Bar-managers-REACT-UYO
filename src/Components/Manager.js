import React, { Component } from 'react';

class Manager extends Component {
    handleUpVote = () => {
        this.props.onVote(this.props.id);
       }

       handleDownVote = () => {
        this.props.onVoteDown(this.props.id);
       }

       handleDelete = () => {
        this.props.onDelete(this.props.id);
       }

    render() 
    {
        const { managerImageUrl, votes, url, title, description, submitterAvatarUrl } = this.props
        return (
            <div className='container'>
            <div className="row">
            <div className='col-md-12'>
            <div className="main">
            <div className="image"> 
            <img src={managerImageUrl} />
            </div> 
            <div className='header'>
            <a onClick= {this.handleUpVote}>
            <i className='fa fa-2x fa-caret-up' />
            </a>
            {votes}
            <a onClick= {this.handleDownVote}>
            <i className='fa fa-2x fa-caret-down' />
            </a>
            <a onClick= {this.handleDelete}>
            <i className='fa fa-2x fa-remove danger' />
            </a>
            </div>
            <div className='description'>
            <a href={url}>
            {title}
            </a>
            <p>
            {description}
            </p>
 </div>
 <div className='extra'>
 <span>Submitted by:</span>
 <img
 className='avatar'
 src={submitterAvatarUrl}
 />
 </div>
 </div> 
 </div>
 </div>
 </div>
        )
}



}

export default Manager;