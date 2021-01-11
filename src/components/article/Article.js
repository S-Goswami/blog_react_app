import React, {Component} from 'react';
import './Article.css';
import * as apiService from './../../api/api-service';


class Article extends Component{
    constructor(props){
        super(props);
        this.categoryWiseData = [];
        this.fetchData = this.fetchData.bind(this);
        this.state = {
            articleDetails: []
        }
    }
    async componentDidMount(){
        console.log(this.props.match);
        console.log(this.state.articleDetails);
        this.categoryWiseData = await apiService.fetchData('GET','categoryData');
        var requestedArticleDetails = this.fetchData();
        requestedArticleDetails = requestedArticleDetails.length ? requestedArticleDetails[0] : null;
        console.log(requestedArticleDetails);
        this.setState({
            articleDetails: requestedArticleDetails
                });
        console.log('sdsds');
    }
    componentDidUpdate(prevProps) {
        if(this.props.match.params.categoryName !== prevProps.match.params.categoryName ||
            this.props.match.params.articleId !== prevProps.match.params.articleId){
                var requestedArticleDetails = this.fetchData();
                requestedArticleDetails = requestedArticleDetails.length ? requestedArticleDetails[0] : null;
                console.log(requestedArticleDetails);
                this.setState({
                    articleDetails: requestedArticleDetails
                        });
        }
        console.log(this.props.match)
    }
    fetchData() { 
        const dataArray = this.categoryWiseData[0][this.props.match.params.categoryName];
        return dataArray.filter((data) => {
            if(data.articleId == this.props.match.params.articleId){
                return true;
            }
        })
    }
    handleClick(event) {
        console.log('this is:', this);
        console.log('event:', event);
      }
    render(){
        return(
            <div className="article-page">
                <div className="text-center">
                    <h2>{this.state.articleDetails.articleTitle}</h2>
                    <div className="flex">
                        <div className="author">
                            <div className="author-pic">
                                <img className="profile-icon" src={this.state.articleDetails.authorPicUrl}></img>
                                <div className="author-detais">
                                    <div className="author-name">{this.state.articleDetails.authorName}</div>
                                    <span>{this.state.articleDetails.articleDateTime} {this.state.articleDetails.readingTime}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* <i className="fa fa-spinner fa-spin"></i> */}
                            <i className="fab fa-facebook-square fa-lg social-icon"></i>
                            <i className="fab fa-twitter-square fa-lg social-icon"></i>
                            <i className="fab fa-instagram-square fa-lg social-icon"></i>
                            <i className="fab fa-youtube-square fa-lg social-icon"></i>
                        </div>
                    </div>
                    <div>
                        <div className="article-images">
                            <img src={this.state.articleDetails.imageUrl}></img>
                        </div>
                        <div>
                            
                            {this.state.articleDetails.articleContent && this.state.articleDetails.articleContent.map((article, index) => (
                                <div key={index}>
                                    {article.para}
                                    <img className="article-images" src={article.image}></img>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        {this.state.articleDetails.tags && this.state.articleDetails.tags.map((tag, index) => (
                            <div key={index} className="tag-class">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="column-flex fixed-position"> 
                <i class="far fa-thumbs-up fa-lg social-icon"></i>
                <i class="fas fa-share-alt  fa-lg social-icon"></i>
                </div>
                {/* Article Page
               {this.state.articleDetails &&  <div>
                   
                <div>{this.state.articleDetails.articleTitle}</div>
                <div>{this.state.articleDetails.description}</div></div>}
                <Link className="click" to={`/Article/Travel/2`}>Travel 2</Link> */}

            </div>
        )
    }
}

export default Article;