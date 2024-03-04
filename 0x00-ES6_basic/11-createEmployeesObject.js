export default function createEmployeeObject(departmentName, employees) {
    const employeesObject = {
        [departmentName] : employees
    }
    return employeesObject
}