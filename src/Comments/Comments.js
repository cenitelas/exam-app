import React from 'react';
import Comment from '../Comment/Comment'
import './Comments.css'
class Comments extends React.Component{
    render(){
        return(
            <div className="comments">
                <h4>Комментарии:</h4>
                {this.props.comments.map((item,i)=><Comment key={i} comment={item}></Comment>)}
            </div>
        )
    }
}

export default Comments;