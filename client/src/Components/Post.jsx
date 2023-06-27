import React from 'react'

const Post = () => {
  return (
    <div className="post">
    <div className="image">
    <img
      src="https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1239009531.jpg?w=1390&crop=1"
      alt=""
    />
    </div>

    <div className="texts">
      <h2>Meta launches new VR subscription ‘Meta Quest+’ for $7.99</h2>
      <p className="info">
        <span className="author">John Ndungu</span>
        <time>2023-04-05 20:20</time>
      </p>
      <p className="summary">
        Meta Quest users can subscribe to a new service that gives them
        access to the top two titles every month. Dubbed Meta Quest+, the
        virtual reality subscription costs $7.99 per month or $59.99
        annually.
      </p>
    </div>
  </div>
  )
}

export default Post