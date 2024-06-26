import SuggestionsListItem from "../SuggestionsListItem/SuggestionsListItem"
import ReactPaginate from "react-paginate"
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSuggestions } from "../../../store/suggestions";
import "./SuggestionsList.css"


const SuggestionsList = ({userId}) => {
  const dispatch = useDispatch();
  const suggestions = useSelector(state => Object.values(state.suggestions));
  // React Pagination
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 5;
  const offset = currentPage * itemsPerPage;
  const currentItems = suggestions.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(suggestions.length / itemsPerPage);


  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  useEffect(() => {
    dispatch(fetchAllSuggestions())
  }, [dispatch])

  return (
  <div className="suggestions-container">
      {suggestions && (
        <ul className="suggestions-list">
          {currentItems.map(suggestion => 
            <SuggestionsListItem userId={userId} suggestion={suggestion}/>
          )}
        </ul>
      )}
      <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
    </div>
)
}

export default SuggestionsList;