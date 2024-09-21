import { StyledText, StyledTouchableOpacity, StyledView } from "../../../common/StyledComponents"
import CategoryIcon1 from '@icons/CategoryIcon1.svg';
import CategoryIcon2 from '@icons/CategoryIcon2.svg';
import CategoryIcon3 from '@icons/CategoryIcon3.svg';
import CategoryIcon4 from '@icons/CategoryIcon4.svg';
import CategoryIcon5 from '@icons/CategoryIcon5.svg';

const categories = [
    { id: 1, icon: CategoryIcon1, name: 'Food' },
    { id: 2, icon: CategoryIcon2, name: 'Gift' },
    { id: 3, icon: CategoryIcon3, name: 'Fashion' },
    { id: 4, icon: CategoryIcon4, name: 'Gadget' },
    { id: 5, icon: CategoryIcon5, name: 'Accessory' },
];


const handleCategoryPress = (category) => {
    //console.log(`Navigating to ${category.name}`);
    console.log("hi");
};


const Categories = () => {
    return (
        <StyledView className="p-3">
            <StyledText className="mb-3">Categories</StyledText>
            <StyledView className="flex-row justify-between">
                {categories.map((category) => (
                    <StyledTouchableOpacity 
                        key={category.id} 
                        onPress={() => handleCategoryPress(category)} 
                        className="flex-1 items-center"
                    >
                        <category.icon className="w-16 h-16" />
                        <StyledText className="mt-2 text-center">{category.name}</StyledText>
                    </StyledTouchableOpacity>
                ))}
            </StyledView>
        </StyledView>
    )
}

export default Categories

