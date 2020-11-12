import * as React from "react"
import { useState, useRef } from "react"
import { SearchTest } from "../SearchTest/SearchTest"
import { Test } from "../Test/Test"
import { PatientsFields } from "../PatientsFields/PatientsFields"
import { Divider } from "@material-ui/core"
import styled from "styled-components"
import { tests } from "../../../../utils/tests"
import { ComponentToPrint } from "../PrintTemplate/PrintTemplate"
import ReactToPrint from "react-to-print"

interface Props {}

const Center = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`

interface IPatient {
  name: string
  referedby: string
  sex: string
  age: number
  date: string
}
export const Container: React.FC<Props> = ({}) => {
  const [resultData, setResultData] = useState<any[]>([])
  const [patientData, setPatientData] = useState<IPatient | undefined>()
  const componentRef = useRef<any>()

  const addResultHandler = (value: any) => {
    setResultData(resultData => [...resultData, value])
  }

  const changeResultsHandler = (e: any, index: number) => {
    const newValue = e.target.value
    console.log(newValue, index)
    const newResults: any = [...resultData]
    newResults[index].results = newValue
    setResultData(newResults)
  }

  const filterResultHandler = (id: number) => {
    const oldResultData = [...resultData]

    const newResultData = oldResultData.filter(data => data.id !== id)
    setResultData(newResultData)
  }

  const printOut = () => {
    return <button>Print this out!</button>
  }

  /**
   * Patient Data
   */
  const [sex, setSex] = React.useState("")
  const [name, setName] = useState<string>("")
  const [referedBy, setReferedBy] = useState<string>("")
  const [age, setAge] = useState<string>("")
  const [cost, setCost] = useState<string>("")

  const nameHandler = (e: any): void => {
    const name = e.target.value
    setName(name)
  }

  const referedByHandler = (e: any): void => {
    const name = e.target.value
    setReferedBy(name)
  }

  const ageHandler = (e: any): void => {
    const name = e.target.value
    setAge(name)
  }

  const costHandler = (e: any): void => {
    const name = e.target.value
    setCost(name)
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSex(event.target.value as string)
  }

  return (
    <>
      <PatientsFields
        nameHandler={nameHandler}
        referedByHandler={referedByHandler}
        ageHandler={ageHandler}
        costHandler={costHandler}
        handleChange={handleChange}
        name={name}
        age={age}
        referedBy={referedBy}
        sex={sex}
        cost={cost}
      />
      <Divider />
      <Center>
        <SearchTest addResult={addResultHandler} dropList={tests} />
      </Center>
      <Test
        resultData={resultData}
        changeResult={changeResultsHandler}
        filterResult={filterResultHandler}
      />

      <ReactToPrint
        trigger={printOut}
        content={() => componentRef.current}
        // pageStyle={style}
      />
      <div style={{ display: "none" }}>
        <ComponentToPrint
          ref={componentRef}
          //   data={patientData}
          name={name}
          age={age}
          referedBy={referedBy}
          sex={sex}
          PrintResult={
            <Test
              resultData={resultData}
              changeResult={changeResultsHandler}
              filterResult={filterResultHandler}
            />
          }
        />
      </div>
    </>
  )
}
