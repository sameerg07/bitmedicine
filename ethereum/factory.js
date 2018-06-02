import web3 from './web3';
import PatientFactory from './build/PatientFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(PatientFactory.interface),
  '0x1020f54b15f30e140d8D2cDc43ec276A8b55Fb64'
);

export default instance;
