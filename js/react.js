// Loading other libraries
import React from 'react'
import ReactDOM from 'react-dom'
import Posts from '../components/Posts'

window.renderView = (data) => {
    ReactDOM.render(
        <Posts data={data} />,
        document.getElementById('posts')
    )
}

renderView(posts)
