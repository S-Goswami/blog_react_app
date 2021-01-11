import React from 'react'
import './RecentArticles.css'
import hardcodedData from '../../../hardcoded_data/hardcoded.json'
import { Link } from 'react-router-dom';
import * as apiService from './../../../api/api-service';

class RecentArticles extends React.Component{

    constructor(props) 
    { 
        super(props); 
        this.state = { recentArticles : [] }; 
        console.log(this.state.recentData);
    }
    
    async componentDidMount(){
        let recentArticlesData = await apiService.fetchData('GET','recentArticles');
        this.setState({recentArticles : recentArticlesData});
    }
    handleClick(event) {
        console.log('this is:', this);
        console.log('event:', event);
      }

    render(){
        return(
            <div className="main-display recent-articles">
                {this.state.recentArticles.map((article, index) => (
                    <div key={index} className={`main-article-`+(index+1)}>

                        <Link className="click remove-underline" to={`/Article/${article.category}/${article.articleId}`}>
                        <div className="article-container">
                            <img src={article.imageUrl} alt="post"></img>
                            <div className="article-text-content">
                                <div className="article-title">{article.articleTitle}</div>
                                <div className="timestamp">
                                    <span className="category">{article.category} </span> / {article.articleDateTIme}
                                </div>
                            </div>
                        </div>
                      
                        {/* <div>{article.articleTitle}</div> */}
                    </Link>
                    </div>

                    )
                    )}
            </div>
        )
    }
}

export default RecentArticles;