import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "../Utils/ApiCalls";
export const TopicPicker = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTopics().then((topics) => {
      setTopics(topics);
      setLoading(false);
    });
  });

  if (loading) return <p>Loading topics...</p>;

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
