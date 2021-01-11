import React from 'react'
import RecentArticles from './recent_articles/RecentArticles'
import TheLatestSection from './the-latest-section/TheLatestSection'
import LatestArticles from './latest-articles/LatestArticles'
import LatestStories from './latest-stories/LatestStories'

class Home extends React.Component{

    render(){
        return(
            <div>
                <RecentArticles/>
                <TheLatestSection/>
                <LatestArticles/>
                <LatestStories/>
            </div>
        )
    }
}

export default Home;