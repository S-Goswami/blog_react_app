import React, {Component} from 'react';
import './LatestStories.css';
import hardcodedData from '../../../hardcoded_data/hardcoded.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router-dom';
import * as apiService from './../../../api/api-service';


// import images from './../../../Images/rail-journey_0.jpg'

class LatestStories extends Component{
    constructor(props){
        super(props);
        this.state = {LatestStories: []}
    }

    async componentDidMount(){
        let latestStoriesData = await apiService.fetchData('GET','recentArticles');
        this.setState({LatestStories : hardcodedData.latestStories});
    }
    

    render(){
        return(
            <div className="latest-stories">
                <div className="heading">
                    Latest Stories
                    <hr className="rule"/>
                </div>
                <hr className="latest-stories-rule"/>
                <div className="flex">
                {this.state.LatestStories.map((article, index) => (
                    <div key={index} className="single-section">
                        <Link className="click remove-underline" to={`/Article/${article.category}/${article.articleId}`}>
                        
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
                <hr className="latest-stories-rule"/>
                <div className="view-more-link"> View More <FontAwesomeIcon icon={faArrowRight} style={{ color: 'red' }}/></div>
            </div>
        )        
    }
}

export default LatestStories;