import React, {Component} from 'react';
import './LatestArticles.css'
import LatestArticlesCards from '../../common-components/latest-articles-cards/LatestArticlesCards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/fontawesome-free-solid'
import TopPosts from './../../common-components/top-posts/TopPosts'
import * as apiService from './../../../api/api-service';
import hardcodedData from './../../../hardcoded_data/hardcoded.json'
import { Link } from 'react-router-dom';


class LatestArticles extends Component{

    constructor(props){
        super(props);
        this.state = {
            verticalGallery: {},
            latestSectionCards: [],
            topPosts : []
        }
    }
    async componentDidMount(){
        let latestArticlesData = await apiService.fetchData('GET','latestArticles');
        this.setState(
            {verticalGallery : latestArticlesData[0].verticalGallery,
            latestSectionCards : latestArticlesData[0].latestSectionCards,
            topPosts : latestArticlesData[0].topPosts}
            );
    }
    handleClick(event) {
        console.log('this is:', this);
        console.log('event:', event);
      }
    render(){
        return(
            <div className="latest-articles">
                <div className="heading">
                    Latest Articles
                    <hr className="rule"/>
                </div>
                <div className="segregate-section">
                    <div className="articles-card-section-1">
                        <LatestArticlesCards latestSectionCards={this.state.latestSectionCards}/>
                        <div><FontAwesomeIcon icon={faArrowDown} style={{ color: 'red' }}/> Load More</div>
                        <div className="vertical-gallery-tile">
                        <Link className="click remove-underline" to={`/Article/${this.state.verticalGallery.category}/${this.state.verticalGallery.articleId}`}>
                            <div className="image-tile" style={{backgroundImage: `url("${this.state.verticalGallery.imageUrl}")`}}>
                                <div className="article-text">
                                <div className="article-title">{this.state.verticalGallery.articleTitle}</div>
                                <div className="timestamp">
                                <span className="category">{this.state.verticalGallery.category} </span> / {this.state.verticalGallery.articleDateTIme}
                                </div>
                                </div>
                            </div>
                            </Link>
                            {/* <div className="image-tile">
                                <img src={this.state.verticalGallery.imageUrl}/>
                                {this.state.verticalGallery.articleTitle}
                            </div> */}
                        </div>
                    </div>
                    <div className="articles-card-section-2">
                        <div className="advertisement">Advertisement</div>
                        <TopPosts topPosts={this.state.topPosts}/>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default LatestArticles;