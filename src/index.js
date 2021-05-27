import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
<div className="ui container comments">
  <CommentDetail 
   author="Amber" 
   timeAgo="Today at 4:45PM"
   comment="I m the best "
   avatar={faker.image.avatar()}
   />
  <CommentDetail 
   author="Akash" 
   timeAgo="Today at 2:00AM" 
   comment="okay ,but I strongly disagree "
   avatar={faker.image.avatar()}
   />
  <CommentDetail 
   author="Inu" 
   timeAgo="Yeasteday at 5:00PM"
   comment="poha mast cheez hai"
   avatar={faker.image.avatar()}
   />
</div>
  );
}
ReactDOM.render(<App />,document.querySelector('#root'));
