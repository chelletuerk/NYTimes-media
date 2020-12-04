import React, { Component } from 'react'
import Button from './Button'
import './App.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
      article: [],
    }
  }

  componentDidMount() {
    fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=7Q3tvUFMHDhcZIFn4MyNAc0FBos0WzSE`)
    .then((res) => res.json())
    .then(data => this.setState({article: data.results.map((e, i) => {
      return(
        <div className='article' key={i}>
          <img className='thumbnail' alt='' src={e.thumbnail_standard}>
          </img>< br/>
          <span>
            <a className='title' href={e.url} rel="noreferrer" target="_blank">
            {e.title}</a>< br/>< br/>
            {e.abstract}< br/>< br/>
            Published: {e.first_published_date.split('T')[0]}
            at {e.first_published_date.split('T')[1]}
          </span>
        </div>
      )
    })
  }))
}

  render() {
    return (
      <div className='App'>
        <div className='banner'>
          <span className='nytLogo'></span>
        </div>
        <div id='articleList' className="list">{this.state.article}</div>
        <Button
          className='subscribe'
          text='Subscribe'/>
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
    )
  }
}

export default App;
