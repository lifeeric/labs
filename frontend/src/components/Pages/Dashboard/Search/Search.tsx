import * as React from "react"
import styled from "styled-components"
import { RiSearchLine } from "react-icons/ri"

interface Props {}

/**
 * Styled Components
 */

const SearchComp = styled.div`
  display: flex;
  width: 100%;
  max-width: 252px;
  background-color: #f6f7fb;
  padding: 8px 12px;
  border-radius: 25px;
  overflow: hidden;
  color: #999;
`

const Input = styled.input`
  width: 100%;
  border: none;
  background: inherit;
  outline: none;
  padding-left: 4px;
`

export const Search: React.FC<Props> = () => {
  return (
    <SearchComp title="if you didn't find something, search here">
      <RiSearchLine />
      <Input type="text" className="search__input" placeholder="Search..." />
    </SearchComp>
  )
}
