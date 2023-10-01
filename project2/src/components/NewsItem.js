import React from 'react'

const NewsItem = (props) =>  {
        let {title,description,imageUrl,newsUrl,author,date} = props
        return (
            <div>
                <div className="card " style={{width: "18rem"}} >
                    <img src={!imageUrl ? 'https://image.cnbcfm.com/api/v1/image/107223512-1681243273349-gettyimages-1481446098-dji_0046_mtqhg3nn.jpeg?v=1695903858&w=1920&h=1080':imageUrl } className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author ?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">ReadMore</a>
                    </div>
                </div>
            </div>
        )
    }
export default NewsItem
