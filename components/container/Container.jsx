
const { default: styled } = require("styled-components");

const StyledContainer = styled.div`

`
    
export const Container = ( {children } ) => {
    return(
            <StyledContainer>
                {children}
            </StyledContainer>
    )
}
