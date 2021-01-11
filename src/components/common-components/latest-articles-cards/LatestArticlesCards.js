import React, {Component} from 'react';
import './LatestArticlesCards.css';
import { Link } from 'react-router-dom';

class LatestArticlesCards extends Component{

    
    componentDidMount(){
        // this.setState({latestSectionCards : hardcodedData.latestSectionCards});
    }
    handleClick(event) {
        console.log('this is:', this);
        console.log('event:', event);
      }
    render(){
        return(
            <div className="latest-articles-cards">
                {/* <div>{this.props.category}</div> */}
                {/* {this.props.category && <div className="articles-cards">{this.props.category}</div>} */}
                {this.props.latestSectionCards.map((article, index) => (
                        <div key={index} className="articles-cards">
                            <Link className="click remove-underline" to={`/Article/${article.category}/${article.articleId}`}>
                            <img src={article.imageUrl} alt="post"></img>
                            <div className="section-details">
                            <span className="article-title">{article.articleTitle}</span>
                                <div className="article-desc">{article.description}</div>
                                <div className="timestamp">
                                    <span className="category">{article.category} </span> / {article.articleDateTIme}
                                </div>
                            </div>
                            </Link>

                        </div>
                        )
                    )} 
            </div>
        )
    }
}

export default LatestArticlesCards;