import './App.css';
import { AllArticles } from './Components/AllArticles';
import { Header } from './Components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ArticlesByTopic } from './Components/ArticlesByTopic';
import { TopicPicker } from './Components/TopicPicker';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <TopicPicker />
        <Routes>
          <Route path="/" element={<AllArticles />} />
          <Route path="/topics/:topic" element={<ArticlesByTopic />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
