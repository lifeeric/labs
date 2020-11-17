import * as React from "react"
import { useState, useRef } from "react"
import { SearchTest } from "../SearchTest/SearchTest"
import { Test } from "../Test/Test"
import { PatientsFields } from "../PatientsFields/PatientsFields"
import { Button, Divider } from "@material-ui/core"
import styled from "styled-components"
import { tests, ITest } from "../../../../utils/tests"
import { ComponentToPrint } from "../PrintTemplate/PrintTemplate"
import ReactToPrint from "react-to-print"
import { useMutation } from "@apollo/client"
import { ADD_REPORT } from "../../../../utils/gql"
import { customHook } from "../../../../utils/customHook"
import { useSnackbar } from "notistack"

/**
 * Styled Compoennts
 */

const FloatRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`

interface Props {}

const Center = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`

interface IPatient {
  name: string | undefined
  referedby: string | undefined
  age: number
  pid: string | undefined
  sex: string
}
export const Container: React.FC<Props> = ({}) => {
  const [reportResultData, setReportResultData] = useState<ITest[]>([])
  const [patientData, setPatientData] = useState<
    React.SetStateAction<IPatient>
  >()
  const [addReport, { data, loading }] = useMutation(ADD_REPORT)
  const { currentUser } = customHook()
  const componentRef = useRef(null)
  const [sex, setSex] = useState<string>("")
  const nameRef = useRef<HTMLInputElement>(null)
  const referedByRef = useRef<HTMLInputElement>(null)
  const ageRef = useRef<HTMLInputElement>(null)
  const PIDRef = useRef<HTMLInputElement>(null)
  const costRef = useRef<HTMLInputElement>(null)
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const addNewReportHandler = (value: any) => {
    if (!value) return
    setReportResultData((reportResultData: ITest[]) => [
      ...reportResultData,
      value,
    ])
  }

  const changeResultsHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
    index: number
  ) => {
    const value = e.target.value
    const oldResults = [...JSON.parse(JSON.stringify(reportResultData))]
    const oldTestsR = [...oldResults[id].test]

    oldTestsR[index].results = value
    oldResults[id].test = oldTestsR
    console.log(oldResults, typeof value, " =>")

    // oldResults[id].test[index] = reports
    setReportResultData(oldResults)
  }

  const filterResultHandler = (id: number) => {
    const oldResultData: ITest[] = [...reportResultData]

    const newResultData = oldResultData.filter(data => data.id !== id)
    setReportResultData(newResultData)
  }

  const printOut = () => {
    return (
      <Button variant="contained" color="primary">
        Print out
      </Button>
    )
  }

  const submitHandler = () => {
    const name = nameRef?.current?.value
    const age = ageRef?.current?.value
    const referedBy = referedByRef?.current?.value
    const cost = costRef.current?.value
    const PID = PIDRef.current?.value

    /**
     * Empty validating
     */
    if (!name || !age || !referedBy || !cost || !reportResultData.length) {
      enqueueSnackbar("All Fields are required", { variant: "error" })
      return
    }

    // removing unnessassary fields
    const newReportOfUser = reportResultData.map(rs => ({
      id: rs.id,
      name: rs.name,
      test: rs.test.map(ts => ({
        test_name: ts.test_name,
        results: ts.results,
        normalRanges: ts.normalRanges,
        unit: ts.unit,
      })),
    }))

    addReport({
      variables: {
        id: currentUser._id,
        patient_id: Number(PID),
        patient_name: name,
        patient_age: Number(age),
        patient_sex: sex,
        patient_referedby: referedBy,
        date: new Date().toISOString(),
        price: Number(cost),
        tests: newReportOfUser,
      },
    })
  }

  React.useEffect(() => {
    if (!data) return
    enqueueSnackbar("Report Successfully Added!", { variant: "success" })

    // removing data
    setReportResultData([])
  }, [data])

  const sexHandler = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setSex(event.target.value as string)
  }

  const collectPatientDataHandler = () => {
    const name = nameRef.current?.value
    const rf = referedByRef.current?.value
    const age = ageRef.current?.value
    const pid = PIDRef.current?.value

    const patient = {
      name,
      referedby: rf,
      age: Number(age),
      pid,
      sex,
    }

    setPatientData(patient)
  }

  return (
    <>
      <PatientsFields
        nameRef={nameRef}
        ageRef={ageRef}
        referedByRef={referedByRef}
        costRef={costRef}
        PIDRef={PIDRef}
        sexHandler={sexHandler}
      />
      <Divider />
      <Center>
        <SearchTest addNewReport={addNewReportHandler} />
      </Center>
      <Test
        resultData={reportResultData}
        changeResult={changeResultsHandler}
        filterResult={filterResultHandler}
      />

      <FloatRight>
        <Button onClick={submitHandler}>Save</Button>
        <ReactToPrint
          trigger={printOut}
          content={() => componentRef.current}
          onBeforeGetContent={collectPatientDataHandler}
          onAfterPrint={collectPatientDataHandler}

          // pageStyle={style}
        />
        <div style={{ display: "none" }}>
          <ComponentToPrint
            ref={componentRef}
            {...patientData}
            sex={sex}
            PrintResult={
              <Test
                resultData={reportResultData}
                changeResult={changeResultsHandler}
                filterResult={filterResultHandler}
              />
            }
          />
        </div>
      </FloatRight>
    </>
  )
}
