import React, {Component} from 'react';
import './TopPosts.css'
import { Link } from 'react-router-dom';

class TopPosts extends Component{

    
    componentDidMount(){
        // this.setState({topPosts : hardcodedData.topPosts});
    }
    handleClick(event) {
        console.log('this is:', this);
        console.log('event:', event);
      }
    render(){
        return(
            <div className="top-posts">
                <div className="heading">
                    Top Posts
                    <hr className="rule"/>
                </div>
                <div className="posts">
                {this.props.topPosts.map((post, index) => (
                    <div key={index} className="single-post">
                        <Link className="click remove-underline" to={`/Article/${post.category}/${post.articleId}`}>
                        <div className="image-container"><img className="top-post-image" src={post.imageUrl} alt="post"></img></div>
                        <div className="title-and-index">
                           <div className="post-title">{post.articleTitle}</div>
                            <div className="timestamp">
                                <span className="category">{post.category} </span> / {post.articleDateTIme}
                            </div>
                        </div>
                        <div className="post-index"><span>{index+1}</span></div>

                        </Link>

                    </div>
                    )
                )} 
               </div>
            </div>
        )
    }
}

export default TopPosts;