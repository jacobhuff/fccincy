import React from 'react'
import { Link } from 'react-router-dom';

const ArticlePreview = ({articleHeadline, articleDescription, articlePhoto, articlePhotoCredits, articleLink}) => {

    return (
        <div className="article-container">
            <div className="article-headline">{articleHeadline}</div>
            <div className="article-photo"><img src={articlePhoto} alt="" /></div>
            <div className="article-photo-credits">{articlePhotoCredits}</div>
            <div className="article-description">{articleDescription}</div>
            <div className="article-details"><Link className="article-link" to={articleLink}>Read more</Link></div>
        </div>
    )
}

export default ArticlePreview
