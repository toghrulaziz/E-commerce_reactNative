import SearchIcon from '@icons/Search.svg';
import { StyledTextInput, StyledView } from '@common/StyledComponents';

const SearchBar = ({ onSearch }) => {
  const handleChange = (text) => {
    onSearch(text);
  };

  return (
    <StyledView className="flex-row items-center p-1 border border-gray-300 rounded-lg ml-3 mr-3">
      <SearchIcon className="ml-1" />
      <StyledTextInput
        placeholder="Search"
        className="flex-1 ml-2"
        onChangeText={handleChange}
      />
    </StyledView>
  );
};

export default SearchBar;
