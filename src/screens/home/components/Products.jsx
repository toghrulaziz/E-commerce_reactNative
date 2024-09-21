import { useEffect, useState } from "react";
import { StyledView } from "@common/StyledComponents";
import { ActivityIndicator, FlatList } from "react-native";
import { API_URL } from '@env';
import InfoCard from "./InfoCard";
import NoData from "./NoData";



const Products = ({ searchTerm }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = `${API_URL}/product/`;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <StyledView className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" color="#0000ff" />
            </StyledView>
        );
    }

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <StyledView className="flex-1">
            <FlatList
                contentContainerStyle={{ paddingHorizontal: 8, paddingVertical: 10 }}
                data={filteredProducts}
                renderItem={({ item }) => <InfoCard item={item} />}
                keyExtractor={item => item._id}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                ListEmptyComponent={() => <NoData />}
            />
        </StyledView>
    );
};

export default Products;
