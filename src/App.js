import React, { Component } from 'react';

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
          {e.abstract}
        </div>
      )
    })
  }))
}

  render() {
    return (
      <div className='App'>
        <div id='articleList' className="list">{this.state.article}</div>
      </div>
    )
  }
}

export default App;
