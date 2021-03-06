import React from 'react';
import { Link, withRouter } from "react-router-dom";

class TagIndexItem extends React.Component{
    constructor(props) {
        super(props)
    }

    tag_search(name) {
        
        this.props.history.push(`tag_search/q=${name}`);
    }
    render() {
        return (
            <div>
                <li key={this.props.tag.id}
                    onClick={() => this.tag_search(this.props.tag.name)}
                >{this.props.tag.name}</li>
            </div>
        );    
    }
}



export default withRouter(TagIndexItem);
