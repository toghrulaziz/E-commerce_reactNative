import React from 'react'
import { StyledText, StyledView } from '@common/StyledComponents'
import { StyledTouchableOpacity } from '../../../common/StyledComponents';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import AddBasketIcon from "@icons/AddBasket.svg"

const InfoCard = ({ item }) => {
    const navigation = useNavigation();
    return (
        <StyledTouchableOpacity
            onPress={() => {
                //navigation.navigate('DetailsPage', { item });
                navigation.navigate('DetailsPage'); // EN SON BURA BAXDIN. FIX IT!!!
            }}
            className="flex-1 m-2 border border-gray-300 rounded-lg overflow-hidden bg-white shadow shadow-zinc-300"
        >
            <Image
                source={{ uri: item.images[0] }}
                className="h-40 w-full"
                style={{ resizeMode: 'cover' }}
            />
            <StyledView className="p-3 flex-row justify-between items-end">
                <StyledView>
                    <StyledText className="text-lg font-semibold">{item.title}</StyledText>
                    <StyledText className="text-gray-500">{item.price} AZN</StyledText>
                </StyledView>
                <StyledTouchableOpacity className="p-2 rounded flex items-center justify-center">
                    <AddBasketIcon />
                </StyledTouchableOpacity>
            </StyledView>
        </StyledTouchableOpacity>
    );
}

export default InfoCard
