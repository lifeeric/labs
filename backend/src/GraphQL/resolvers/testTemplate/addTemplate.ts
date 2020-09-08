export default {
  addTestTemplate: async (parent: any, args: any, context: any, info: any) => {
    /**
     * Simplify
     */
    const {
      test_name,
      test_label1,
      test_value1,
      test_label2,
      test_value2,
    } = args.add;
console.log(test_name, 'efle')
    return {
      test_name,
      test_label1,
      test_value1,
      test_label2: test_label2 && test_label2,
      test_value2: test_value2 && test_value2,
    };
  },
};
