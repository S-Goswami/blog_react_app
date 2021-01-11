import React, {Component} from 'react';
import './CategoryPage.css';
import hardcodedData from './../../hardcoded_data/hardcoded.json';
import LatestArticlesCards from '../common-components/latest-articles-cards/LatestArticlesCards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/fontawesome-free-solid';
import TopPosts from '../common-components/top-posts/TopPosts';
import * as apiService from './../../api/api-service';


class CategoryPage extends Component{

    constructor(props){
        super(props);
        this.categoryWiseData = [];
        this.latestArticlesData =[];
        this.state = {
            categoryCards: [],
            topPosts: []
        }
    }
    async componentDidMount(){
        this.categoryWiseData = await apiService.fetchData('GET','categoryData');
        this.latestArticlesData = await apiService.fetchData('GET','latestArticles');
        this.setState({
                    categoryCards: this.categoryWiseData[0][this.props.match.params.categoryName],
                    topPosts: this.latestArticlesData[0].topPosts
                });
    }
    componentDidUpdate(prevProps) {
        if(this.props.match.params.categoryName !== prevProps.match.params.categoryName){
            this.setState({
                categoryCards: this.categoryWiseData[0][this.props.match.params.categoryName]
            });
        }
    }

    render(){
        return (
            <div className="category-page">
                <div className="segregate-section">
                    <div className="articles-card-section-1">
                {this.props.match.params.categoryName && 
                    <div className="heading">
                        {this.props.match.params.categoryName}
                        <hr className="rule"/>
                    </div>
                }
                        <LatestArticlesCards latestSectionCards={this.state.categoryCards}/>
                        <div><FontAwesomeIcon icon={faArrowDown} style={{ color: 'red' }}/> Load More</div>
                        
                    </div>
                    <div className="articles-card-section-2">
                        <TopPosts topPosts={this.state.topPosts}/>
                        <div className="advertisement">Advertisement</div>
                    </div>
                </div>
            </div>
        )
    
    }
}

export default CategoryPage;

