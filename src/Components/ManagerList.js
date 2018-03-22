import React, {
    Component
} from 'react';
import Seed from '../seed';
import Manager from './Manager';

class ManagerList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        managers: [],
        }; 
        }
        componentDidMount() {
        this.setState({ managers: Seed.managers });
        }

        
        handleManagerUpVote = (managerId) => {
            const managers = this.state.managers; 
            managers.forEach((manager) => {
            if (manager.id === managerId) { 
            manager.votes = manager.votes + 1;
            } 
            });
            this.setState({ managers: managers });
           };

           handleManagerDownVote = (managerId) => {
            const managers = this.state.managers; 
            managers.forEach((manager) => {
            if (manager.id === managerId) { 
            manager.votes = manager.votes - 1;
            } 
            });
            this.setState({ managers: managers });
           };

           handleManagerDelete = (managerId) => {
            const managers = this.state.managers; 
            managers.forEach((manager, index) => {
            if (manager.id === managerId) { 
             //alert(index, manager.id)
             managers.splice(index, 1)
            } 
            });
            this.setState({ managers: managers });
           };
    render() {
        const managers = Seed.managers.sort((a, b) => {
            return b.votes - a.votes
         });
        const managerList = Seed.managers.map(manager => {
        const { id, title, description, url, votes, submitterAvatarUrl, 
        managerImageUrl } = manager;
        
        return (
        <Manager
        key={'manager-' + manager.id}
        id={id}
        title={title}
        description={description}
        url={url}
        votes={votes}
        submitterAvatarUrl={submitterAvatarUrl}
        managerImageUrl={managerImageUrl}
        onVote={this.handleManagerUpVote}
        onVoteDown={this.handleManagerDownVote}
        onDelete={this.handleManagerDelete}
        />
        )
        });
        
        return (
        <div className="container">
        <h1>Popular managers</h1>
        <hr />
        {managerList}
        </div>
        )
        }
}
export default ManagerList;