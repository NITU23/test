import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (<>
      <div className='container my-3'> 
      <h1>News App - Top headlines</h1>
      <div className='row'>
        <div className='col-md-4'>
        <NewsItem title='newTitle' description='description'/>
        </div>
        <div className='col-md-4'>
        <NewsItem title='newTitle' description='description'/>
        </div>
        <div className='col-md-4'>
        <NewsItem title='newTitle' description='description'/>
        </div>
        <div className='col-md-4'>
        <NewsItem title='newTitle' description='description'/>
        </div>
        <div className='col-md-4'>
        <NewsItem title='newTitle' description='description'/>
        </div>
      </div>
      </div>
      </>
    )
  }
}
