import React, { Component } from 'react';
import Button from './Button'
import './App.css';
import './media.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      article: [],
      footerDate: '',
      firstArticleImg: [],
      firstArticleTitle: '',
      firstArticleAbstract: [],
      firstArticleDate: [],
      firstArticleUrl: '',
    }
  }

  componentDidMount() {
    fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=7Q3tvUFMHDhcZIFn4MyNAc0FBos0WzSE`)
    .then((res) => res.json())
    .then(data => this.setState({article: data.results.map((e, i) => {
      const date = e.first_published_date.split('T')[0]
      const firstArticleImg = data.results[0].thumbnail_standard
      const firstArticleTitle = data.results[0].title
      const firstArticleAbstract = data.results[0].abstract
      const firstArticleDate = data.results[0].first_published_date
        .split('T')[0] + ' at ' + data.results[0].first_published_date
        .split('T')[1]
        .split('-')[0]
      const firstArticleUrl = data.results[0].url
      this.setState({footerDate: date})
      this.setState({firstArticleImg: firstArticleImg})
      this.setState({firstArticleTitle: firstArticleTitle})
      this.setState({firstArticleAbstract: firstArticleAbstract})
      this.setState({firstArticleDate: firstArticleDate})
      this.setState({firstArticleUrl: firstArticleUrl})

      return(
        <div className='article' key={i}>
          <img
            className='thumbnail'
            alt=''
            src={e.thumbnail_standard}>
          </img>< br/>
          <span className='listSpan'>
            <a
              className='title'
              href={e.url} rel="noreferrer"
              target="_blank">{e.title}
            </a>< br/>< br/>
            {e.abstract}< br/>< br/>
            Published: {e.first_published_date.split('T')[0]} at {e.first_published_date.split('T')[1].split('-')[0]}
          </span>
        </div>
        )
  })}))
}

  render() {
    return (
      <div className='App'>
        <div className='banner'>
          <span className='nytLogo'></span>
        </div>

        <div id='containerDiv' className='container'>
          <div className='firstArticle'>
            <img className='firstThumbnail' alt=''
            src={this.state.firstArticleImg}></img>< br/>
            <span className='firstArticleSpan'>
              <a className='title' href={this.state.firstArticleUrl}
              rel='noreferrer' target='_blank'>{this.state.firstArticleTitle}
              </a>< br/>< br/>
              {this.state.firstArticleAbstract}< br/>< br/>
              {this.state.firstArticleDate}
            </span>
          </div>
          <div id='articleList' className="list">
            {this.state.article.slice(14)}
          </div>
        </div>

        <div className='footer'>
        <div className='date'>{this.state.footerDate}</div>
        <Button
          className='subscribe'
          text='Subscribe' />
        <Button
          className='digitalEdition'
          text='Digital Edition' />
        <Button
          className='archives'
          text='Archives' />
        <Button
          className='renewal'
          text='Renewal' />
        </div>
      </div>
    )
  }
}

export default App;
