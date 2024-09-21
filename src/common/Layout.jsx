import { StyledView } from "./StyledComponents"

const Layout = ({ children, title }) => {
    return (
        <StyledView className="flex-1">
            {children}
        </StyledView>
    )
}

export default Layout
