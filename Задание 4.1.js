const testResults = [
    { id: 1, name: 'Login Test', status: 'passed', time: 120 },
    { id: 2, name: 'Payment Test', status: 'failed', time: 300 },
    { id: 3, name: 'Profile Test', status: 'passed', time: 90 },
    { id: 4, name: 'Cart Test', status: 'skipped', time: 10 }
];
const failedTests = testResults.filter(function(test) {
    return test.status === 'failed'
    });
const passedTestIds = testResults
    .filter(function(test) {
        return test.status === 'passed'
    })
    .map(function(test) {
        return test.id
    });
const totalExecutionTime = testResults.reduce(function(total, test) {
    return total + test.time
    }, 0);
console.log(`Failed Tests (failedTests):`, failedTests);
console.log(`Passed Test Ids (passedTestIds):`, passedTestIds);
console.log(`Total Execution Time (totalExecutionTime):`, totalExecutionTime);