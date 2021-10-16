import React from "react";
import Header from "./components/Header";
import Article from "./components/ArticleContainer";
import './style.scss'

import data from './mock/data.json'

function App() {
    const {news} = data;

    return (
    <>
        <Header />
        <main>
            {news.map((article, i) => (
                <Article key={i}
                    date={article.date}
                    title={article.title}
                    text={article.text}
                />
            ))}
        </main>
    </>
    );
}

export default App;
