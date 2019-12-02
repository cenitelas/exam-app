import React from 'react';
import './Comment.css';

class Comment extends React.Component{
    render(){
        var comment = this.props.comment;
        return(
            <div className="comment">
                <p>{comment.name}</p>
                <p>{comment.text}</p>
                <span>Дата: {new Date(comment.date).toLocaleString('ru',{year: 'numeric',month: 'long',day: 'numeric',hour:'numeric',minute:'numeric',second:'numeric'})}</span>
            </div>
        )
    }
}

export default Comment;