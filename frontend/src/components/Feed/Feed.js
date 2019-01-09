import React from 'react';
import { Sidebar, Card } from 'semantic-ui-react';
import FeedVideo from './FeedVideo';


const Feed = (props) => {
  return (
    <Sidebar.Pusher>
    <Card.Group centered itemsPerRow={3} style={{margin:"10px auto", width:"70%"}}>
      {props.videos && props.videos.length > 0? props.videos.map((video, index) => <FeedVideo video={video} key={index}/>): <span>Loading...</span>}
    </Card.Group>
    </Sidebar.Pusher>
  )
}

export default Feed;