import { useId } from "react";
import style from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {

  const dispath = useDispatch();
  const idInput = useId();

  const searchValue = useSelector(selectNameFilter);

  return (
    <div className={style.searchContainer}>
      <label htmlFor={idInput}>Find contacts by name</label>
      <input
        type="text"
        id={idInput}
        value={searchValue}
        onChange={(e) => dispath(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
