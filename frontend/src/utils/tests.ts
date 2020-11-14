export interface ATest {
  test_name: string
  normalRanges: any[]
  unit: string
  results: string
}
export interface ITest {
  id: number
  name: string
  test: ATest[]
}

export const tests: ITest[] = [
  {
    id: 3892831,
    name: "ALP",
    test: [
      {
        test_name: "ALP",
        normalRanges: ["Adults: 80--210", "Child: 145--950"],
        unit: "U/L",
        results: "",
      },
      {
        test_name: "SGPT/ALT",
        normalRanges: ["< 40"],
        unit: "U/L",
        results: "",
      },
      {
        test_name: "SBR",
        normalRanges: [" Up to 1"],
        unit: "mg/dl",
        results: "",
      },
    ],
  },
  {
    id: 3898830,
    name: "TYPHIDOT",
    test: [
      {
        test_name: "TYPHIDOT IgG",
        normalRanges: [""],
        unit: "",
        results: "POSITIVE +IV",
      },
      {
        test_name: "TYPHIDOT IgM",
        normalRanges: [""],
        unit: "",
        results: "POSITIVE +IV",
      },
    ],
  },
]
