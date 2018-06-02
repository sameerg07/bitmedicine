pragma solidity ^0.4.24;

contract PatientFactory {
    address[] public deployedPatients;

    function createPatient(string name) public {
        address newPatient = new Patient(name, msg.sender);
        deployedPatients.push(newPatient);
    }

    function getDeployedPatients() public view returns (address[]) {
        return deployedPatients;
    }
}

contract Patient {

    string[] public requests;
    string public PatientName;
    address public manager;
    bool public rwaccess;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor(string name,address creator) public {
        manager = creator;
        PatientName = name;
        rwaccess = true;
    }

    function grantAccess() public restricted {
        rwaccess = true;
    }
    
    function revokeAccess() public restricted
    {
        rwaccess = false;
    }

    function createRequest(string description) public restricted {
        require(rwaccess);

        requests.push(description);
    }

    function getName() public view returns (string) {
        return (PatientName);
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}
