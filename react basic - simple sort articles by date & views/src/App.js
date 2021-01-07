import React, { useEffect, useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
    const [articlesState, setArticlesState] = useState(articles);
    const sortOnVotes = () => {
        let articleDeepCopy = [...articlesState];
        const sortedArray = articleDeepCopy.sort((currentArticle, nextArticle) => nextArticle.upvotes - currentArticle.upvotes);
        setArticlesState(sortedArray);
    }
    const sortOnDate = () => {
        let articleDeepCopy = [...articlesState];
        const sortedArray = articleDeepCopy.sort((currentArticle, nextArticle) => new Date(nextArticle.date).getTime() - new Date(currentArticle.date).getTime());
        setArticlesState(sortedArray);
    }

    useEffect(() => {
        sortOnVotes();
    }, []);

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={sortOnVotes}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={sortOnDate}>Most Recent</button>
            </div>
            <Articles articles={articlesState}/>
        </div>
    );

}

export default App;
