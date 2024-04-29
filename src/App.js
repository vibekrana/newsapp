// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import News from './pages/News';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react'

export default class App extends Component {

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ Progress: progress })
  }

  render() {
    return (
      <>
        <Navbar title='FreshPress' color="'rgb(255, 32, 78)" />
        <div><LoadingBar
          color='#f11946'
          Progress={this.state.progress}
        /></div>
        <Routes basename="/newsapp"> {/* Set basename to the subdirectory */}
          <Route path="/" element={<News setProgress={this.setProgress} title="Top-Articles" country='in' />} />
          <Route path="/general" element={<News setProgress={this.setProgress} key="general" title="Top-Articles on General" country='in' category='general' />} />
          <Route path="/business" element={<News setProgress={this.setProgress} key="business" title="Top-Articles on Business" country='in' category='business' />} />
          <Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" title="Top-Articles on Entertainment" country='in' category='entertainment' />} />
          <Route path="/health" element={<News setProgress={this.setProgress} key="health" title="Top-Articles on Health" country='in' category='health' />} />
          <Route path="/science" element={<News setProgress={this.setProgress} key="science" title="Top-Articles on Science" country='in' category='science' />} />
          <Route path="/sports" element={<News setProgress={this.setProgress} key="sports" title="Top-Articles on Sports" country='in' category='sports' />} />
          <Route path="/technology" element={<News setProgress={this.setProgress} key="technology" title="Top-Articles on Technology" country='in' category='technology' />} />
        </Routes>
        {/* <News  setProgress = {this.setProgress} title= "Top-Articles" country='in' category = 'business'/> */}
      </>
    );
  }
}

// import {route, routes} from 'react-router-dom';

// function App() {
//   return (
//     <>
//     <Navbar title = 'FreshPress' color= "'rgb(255, 32, 78)"/>
//     <LoadingBar
//         color='#f11946'
//         progress={progress}
//       />
//     <Routes>
//     <Route path = "/" element = {<News  setProgress = {this.setProgress} title= "Top-Articles" country='in'/>} />
//     <Route path = "/general" element = {<News  setProgress = {this.setProgress} key = "general" title= "Top-Articles on General" country='in' category = 'general'/>}/>
//     <Route path = "/business" element = {<News  setProgress = {this.setProgress} key = "business" title= "Top-Articles on Business" country='in' category = 'business'/>}/>
//     <Route path = "/entertainment" element = {<News  setProgress = {this.setProgress} key = "entertainment" title= "Top-Articles on Entertainment" country='in' category = 'entertainment'/>}/>
//     <Route path = "/health" element = {<News  setProgress = {this.setProgress} key = "health" title= "Top-Articles on Health" country='in' category = 'health'/>}/>
//     <Route path = "/science" element = {<News  setProgress = {this.setProgress} key = "science" title= "Top-Articles on Science" country='in' category = 'science'/>}/>
//     <Route path = "/sports" element = {<News  setProgress = {this.setProgress} key = "sports" title= "Top-Articles on Sports" country='in' category = 'sports'/>}/>
//     <Route path = "/technology" element = {<News  setProgress = {this.setProgress} key = "technology" title= "Top-Articles on Technology" country='in' category = 'technology'/>}/>
//     </Routes>
//     {/* <News  setProgress = {this.setProgress} title= "Top-Articles" country='in' category = 'business'/> */}
//     </>
//   );
// }

// export default App;