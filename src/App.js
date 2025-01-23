import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Posts from './Posts'
import ListOfButtons from './ListOfButtons';

function App() {

  const posts=[
    {id:1,title:"hi"},
    {id:2,title:"no problem"},
    {id:3,title:"how to show this"},
    {id:4,title:"react is the best of framwork in ever"},
    {id:4,title:"if you want to be great in react"}
  ]
  let ArrayOfPosts=posts.map((post)=>{
     return <Posts key={post.id} title={post.title}>Hello world this the main challenge in </Posts> 
  });
  return (
    <div className='page'>
      <Header/>   
      <div className='flexing-body'>
        <div className='posts-list'>

            
         {ArrayOfPosts}
        </div>

      <ListOfButtons/>
      </div>

    </div>

  );
  // eslint-disable-next-line no-unused-vars
}




export default App;
