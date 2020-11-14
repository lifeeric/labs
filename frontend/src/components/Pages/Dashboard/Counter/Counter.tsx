import * as React from "react"
import { Box } from "../../../UI/Box/Box"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import styled from "styled-components"
import { Divider } from "@material-ui/core"
import { useQuery } from "@apollo/client"
import { TOTAL_RECORDS } from "../../../../utils/gql"
import { customHook } from "../../../../utils/customHook"
import { Spinner } from "../../../UI/Spinner/Spinner"

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
  const { currentUser } = customHook()
  const { data, loading } = useQuery(TOTAL_RECORDS, {
    variables: { id: currentUser._id },
  })

  const total = data && data.getTotalRecord.totalTests
  const level = data && data.getTotalRecord.level

  let percentage = 0
  if (level === "Lv 1") percentage = (total / 50) * 100
  if (level === "Lv 2") percentage = (total / 150) * 100
  if (level === "Lv 3") percentage = (total / 300) * 100
  if (level === "Lv 4") percentage = (total / 500) * 100
  if (level === "Lv 5") percentage = (total / 1000) * 100

  return (
    <Container>
      <Box>
        {loading ? (
          <Circle>
            <Spinner loading={loading} />
          </Circle>
        ) : (
          <>
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
                <p>{level}</p>
              </Level>
              <Line />
              <Completed>
                <span>Completed Tests</span>
                {total}
              </Completed>
            </BottomLine>
          </>
        )}
      </Box>
    </Container>
  )
}
