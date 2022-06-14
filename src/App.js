import './App.css';
import { AllArticles } from './Components/AllArticles';
import { Header } from './Components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ArticlesByTopic } from './Components/ArticlesByTopic';
import { TopicPicker } from './Components/TopicPicker';
import { SingleArticle } from './Components/SingleArticle';
import { Error } from './Components/Error';
import { UserContext } from '../src/Contexts/User'

function App() {
  return (
    <UserContext.Provider value={{ username: "grumpy19" }}>
      <BrowserRouter>
        <div className="App">
          <Header className="mainHeader" />
          <TopicPicker />
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<AllArticles />} />
            <Route path="/topics/:topic" element={<ArticlesByTopic />} />
            <Route path="/articles/:articleID" element={<SingleArticle />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
