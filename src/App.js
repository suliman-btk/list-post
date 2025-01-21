import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Posts from './Posts'
import ListOfButtons from './ListOfButtons';

function App() {

  
  return (
    <div className='page'>
      <Header/>   
      <div className='flexing-body'>
        <div className='posts-list'>

          <Posts/>
          <Posts/>
          <Posts/>
          <Posts/>
          <Posts/>
        </div>

      <ListOfButtons/>
      </div>

    </div>

  );
  // eslint-disable-next-line no-unused-vars
}




export default App;
