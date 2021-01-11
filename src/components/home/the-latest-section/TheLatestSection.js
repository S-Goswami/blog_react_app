import React, {Component} from 'react';
import './TheLatestSection.css'
import hardcodedData from '../../../hardcoded_data/hardcoded.json'
import { Link } from 'react-router-dom';
import * as apiService from './../../../api/api-service';
// import images from './../../../Images/rail-journey_0.jpg'

class TheLatestSection extends Component{
    constructor(props){
        super(props);
        this.state = {theLatestSection: []}
    }

    async componentDidMount(){
        let theLatestSectionData = await apiService.fetchData('GET','theLatestSection');
        this.setState({theLatestSection : theLatestSectionData});
    }
    
    render(){
        return(
            <div className="the-latest-section">
                 <div className="heading">
                    The Latest
                    <hr className="rule"/>
                </div>
                <div className="flex">
                {this.state.theLatestSection.map((article, index) => (
                    <div key={index} className="single-section">
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
                {/* <img src={article.imageUrl} alt="hi"></img> */}

                    {/* <div className="image" style={{backgroundImage: `url("${this.state.images2}")`}}></div> */}

                </div>
            </div>
        )        
    }
}

export default TheLatestSection;