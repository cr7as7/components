import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
<div className="ui container comments">
  <ApprovalCard >
   <CommentDetail 
   author="Amber" 
   timeAgo="Today at 4:45PM"
   comment="I m the best "
   avatar={faker.image.avatar()}
   />
  </ApprovalCard>
  <ApprovalCard>
   <CommentDetail 
   author="Akash" 
   timeAgo="Today at 2:00AM" 
   comment="okay ,but I strongly disagree "
   avatar={faker.image.avatar()}
   />
  </ApprovalCard>
  <ApprovalCard>
   <CommentDetail 
   author="Inu" 
   timeAgo="Yeasteday at 5:00PM"
   comment="poha mast cheez hai"
   avatar={faker.image.avatar()}
   />
  </ApprovalCard>
  
</div>
  );
}
ReactDOM.render(<App />,document.querySelector('#root'));
