import { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import './App.css';
import News from './Components/News/News';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-09-01&sortBy=publishedAt&apiKey=a5b104fca4684417816cf9745d0cfb86')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])
  return (
    <div>
      {
        //conditional formatting
        news.length === 0 ?
          <Spinner animation="border" />
          :
          <Row xs={1} md={3} className="g-4">
            {
              news.map(nw => <News news={nw}></News>)
            }
          </Row>
      }
    </div>
  );
}

export default App;
