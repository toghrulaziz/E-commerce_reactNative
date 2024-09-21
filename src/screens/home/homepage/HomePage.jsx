import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ActionBox from '../components/ActionBox';
import Categories from '../components/Categories';
import Layout from '../../../common/Layout';
import Products from '../components/Products';
import { useState } from 'react';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Layout title="Home">
      <Header/>
      <SearchBar onSearch={handleSearch}/>
      <Categories/>
      <ActionBox/>
      <Products searchTerm={searchTerm} />
    </Layout>
  );
};

export default HomePage;
