import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "../Utils/ApiCalls";
export const TopicPicker = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchTopics().then((topics) => {
      setTopics(topics);
      setLoading(false);
    }).catch(() => {
      setError(true);
      setLoading(false);
    });
  });

  if (loading) return <p>Loading topics...</p>;
  if (error) return (
    <h2>
      Error loading topics... <span aria-hidden="true">😢</span>
    </h2>
  );

  return (
    <nav className="topicNav">
      <>
        <Link className="navLink" key={"all"} to="/">
          ALL
        </Link>
        {topics.map((topic) => {
          return (
            <Link
              className="navLink"
              key={topic.slug}
              to={`/topics/${topic.slug}`}
            >
              {topic.slug.toUpperCase()}
            </Link>
          );
        })}
      </>
    </nav>
  );
};
