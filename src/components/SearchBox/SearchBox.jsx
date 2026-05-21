import css from "./SearchBox.module.css";
const SearchBox = ({ onSearch }) => {
  return (
    <>
      <div className={css.find}>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="search"
          onChange={(evt) => onSearch(evt.target.value)}
        />
      </div>
    </>
  );
};

export default SearchBox;
