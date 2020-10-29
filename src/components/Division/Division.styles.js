import styled from '@emotion/styled'

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const Thead = styled.thead`
  font-size: ${props => props.theme.size.copy.h4};
`
export const Tr = styled.tr`
  padding: ${props => `${props.theme.size.space.xs} 0`};
`

export const BodyRow = styled(Tr)`
  :nth-of-type(odd) {
    background-color: lightslategray;
  }
`

export const Th = styled.th`
  padding: ${props => props.theme.size.space.xs};
`

export const Tbody = styled.tbody`
  font-size: ${props => props.theme.size.copy.h5};
  text-align: center;
`
export const Td = styled.td`
  padding: ${props => props.theme.size.space.xs};
  :first-of-type {
    border-radius: 5px 0 0 5px;
  }
  :last-of-type {
    border-radius: 0 5px 5px 0;
  }
`

export const TeamAndLogo = styled.span`
  display: flex;
  justify-content: center;
  > img {
    margin-top: 0;
    margin-left: ${props => (props.isMobile ? 0 : props.theme.size.space.xs)};
  }
`
