import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResult, setTotalResult] = useState(0)
  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b7821a64bf974bcba4ec36a6264ae09e&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(parsedData.articles)
    setTotalResult(parsedData.totalResults)
    setLoading(false)

  }
  useEffect(() => {
    updateNews();
  }, [])


  const handleNextClick = async () => {
    setPage(page + 1)
    updateNews()
  }
  const handlePrevClick = async () => {
    setPage(page - 1);
    updateNews()
  }
  return (<>
    <div className='container my-3'>
      <h1 className='text-center'>News App - Top headlines</h1>
      {loading && <Spinner />}
      <div className='row'>
        {
          !loading && articles.map((element) => {
            return <div className='col-md-4 my-4' key={element.imageUrl}>
              <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url}
                author={element.author} date={element.publishedAt} />
            </div>
          })}
      </div>
      <div className='container d-flex justify-content-between'>
        <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
        <button type="button" disabled={page + 1 > Math.ceil(totalResult / props.pageSize)} className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
      </div>
    </div>
  </>
  )
}
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'

}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News;
