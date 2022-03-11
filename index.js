const employee = {
    name: "Gio",
    streetAddress: "16 Cornell",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value){
    const newObject = Object.assign({}, employee);
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    delete employee[key];
    return employee;
}