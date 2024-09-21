import { StyledText, StyledView } from "@common/StyledComponents"

const NoData = () => {
  return (
    <StyledView className="w-screen h-screen items-center justify-center">
      <StyledText className="mt-60">Data not found</StyledText>
    </StyledView>
  )
}

export default NoData