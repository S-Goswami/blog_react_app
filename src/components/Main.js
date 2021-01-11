import React from 'react';
import Header from './header/Header'
import Home from './home/Home'
import Category from './category-page/CategoryPage'
import {Route} from 'react-router-dom'
import Article from './article/Article';

class Main extends React.Component{
    render(){
        return(
            <div className='page-border'>
                <Header/>
                <Route exact path='/' component={Home}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/category/:categoryName' component={Category}/>
                <Route exact path='/Article/:categoryName/:articleId' component={Article}/>
            </div>
        )
    }
}

export default Main;