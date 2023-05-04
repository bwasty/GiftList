const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  const merkleTree = new MerkleTree(niceList);
  const name = process.argv[2] || 'Katrina Hansen';  
  const proof = merkleTree.getProof(niceList.findIndex(n => n === name));
  //const badProof = proof.slice(2)

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name, 
    proof
    //proof: badProof
  });

  console.log({ gift });
}

main();