import * as React from "react"
import { Box } from "../../../UI/Box/Box"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import styled from "styled-components"
import { Divider } from "@material-ui/core"

interface Props {}

/**
 * Styled Components
 */

const Container = styled.div`
  flex: 2 0 50%;
  max-width: 50%;
  @media (max-width: 600px) {
    flex: 1 0 100%;
    max-width: 100%;
  }
`
const Circle = styled.div`
  width: 50%;
  margin: auto;
  padding: 20px 0;
`

const BottomLine = styled.div`
  margin: auto 30px;
  display: flex;
  justify-content: space-between;
  position: relative;
`

const Completed = styled.div`
  flex: 2 0 49%;
  font-weight: 600;
  font-size: 20px !important;
  text-align: center;

  & span {
    font-size: 13px;
    display: block;
    padding-top: 10px;
  }
`

const Level = styled.div`
  flex: 2 0 49%;
  font-size: 18px;
  color: #3e98c7;
  text-align: center;
`

const Line = styled.div`
  flex: 2 0 2%;
  border-right: 1px solid #ccc;
`

export const Counter: React.FC<Props> = ({}) => {
  const percentage = 66
  return (
    <Container>
      <Box>
        <Circle>
          <CircularProgressbar
            strokeWidth={3}
            value={percentage}
            text={`${percentage}%`}
          />
        </Circle>
        <Divider />
        <BottomLine>
          <Level>
            <p>Lv 1</p>
          </Level>
          <Line />
          <Completed>
            <span>Completed Tests</span>
            50
          </Completed>
        </BottomLine>
      </Box>
    </Container>
  )
}
