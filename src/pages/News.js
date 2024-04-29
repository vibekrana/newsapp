import React, { Component } from 'react'
import Newsitm from './Newsitm'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {
  static defaultProps ={
    country : 'in',
    pageSize: 10,
    category: "general"
  }
  static propTypes= {
    name: PropTypes.array,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  constructor(){
    super();
    console.log("Hello i am constructor");
    this.state ={
      articles : [],
      loading : false,
      page: 1
    }
    
  }

  async componentDidMount() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a63d6c20da904eca878f4096901845a3&page=1&pageSize=10`
    this.setState({loading: true})
    let data = await fetch(url)
    let paresdata = await data.json();
    console.log(paresdata);
    this.setState({articles: paresdata.articles,
       totalResults: paresdata.totalResults,
      loading: false,
    })
    
    this.props.setProgress(100)
  }

  handleNext = async ()=>{
    console.log("Hii")
    if(!(this.state.page +1 > Math.ceil(this.state.totalResults/8))){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a63d6c20da904eca878f4096901845a3&page=${this.state.page +1}&pageSize=10`;
    this.setState({loading: true});
    let data = await fetch(url)
    let paresdata = await data.json();
    console.log(paresdata);
    this.setState({
      page: this.state.page +1,
      articles: paresdata.articles,
      loading: false
    })
  }
  }
  
  handlePrev = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a63d6c20da904eca878f4096901845a3&page=${this.state.page -1}&pageSize=10`;
    this.setState({loading: true})
    let data = await fetch(url)
    let paresdata = await data.json();
    console.log(paresdata);
    this.setState({
      page: this.state.page -1,
      articles: paresdata.articles,
      loading: false
    })

  }


  render() {
    const { title } = this.props;
    const { articles, loading } = this.state;
  
    return (
      <>
        <div className='container my-3'>
          <h1 className='text-center' style={{ top: '50px', margin:"90px", height: "-0px"}}>{title}</h1>
          {loading && <Spinner />}
          <div className='row'>
            {!loading && articles && articles.map((element) => (
              <div className='col-md-3' key={element.url}>
                <Newsitm
                  title={element.title ? element.title : ''}
                  content={element.description ? element.description : ''}
                  url={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source = {element.source.name}
                />
              </div>
            ))}
          </div>&nbsp;
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <1 } type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 8)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
          </div>
        </div>
      </>
    )
  }  
}