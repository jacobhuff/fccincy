import React from 'react'
import ArticlePreview from '../components/ArticlePreview'

const Home = () => {
    return (
        <div className="container-for-articles">
            <ArticlePreview 
                articleHeadline="Hot Takes: Player Ratings at Atlanta"
                articlePhoto="images/articles/atlantasep15ratings.jpg"
                articlePhotoCredits="ALBERT CESARE / THE ENQUIRER"
                articleDescription="Cincinnati falls to a late goal from a red hot Atlanta side. Here are our early player ratings."
                articleLink="atlantasep15ratings"
            />
            <ArticlePreview 
                articleHeadline="Match Preview: FCC Heads to Atlanta"
                articlePhoto="images/articles/atlantasep15.jpg"
                articlePhotoCredits="ALBERT CESARE / THE ENQUIRER"
                articleDescription="Can The Orange and Blue muster together their second winning streak of the season?"
                articleLink="atlantasep15preview"
            />
            <ArticlePreview 
                articleHeadline="TQL Stadium Gets Its First Win"
                articlePhoto="images/articles/torontosep11.jpg"
                articlePhotoCredits="ALBERT CESARE / THE ENQUIRER"
                articleDescription="FC Cincinnati finally won in front of their fans at home, and boy did it feel good."
                articleLink="torontosep11ratings"
            />
        </div>
    )
}

export default Home
