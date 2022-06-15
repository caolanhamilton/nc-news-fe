export const ArticleSorter = ({setSortOrder, setSortParameter}) => {
  return (
    <>
      <select
        onChange={(e) => {
          setSortParameter(e.target.value);
        }}
      >
        <option value="created_at">Date created</option>
        <option value="comment_count">No. comments</option>
        <option value="votes">No. votes</option>
      </select>
      <select
        onChange={(e) => {
          setSortOrder(e.target.value);
        }}
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </>
  );
};
