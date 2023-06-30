const ethers=require('ethers');
const fs=require('fs-extra')
require('dotenv').config();

const RPC_URL=process.env.RPC_URL;
const PRIVATE_KEY=process.env.PRIVATE_KEY;
const PRIVATE_KEY_PASSWORD=process.env.PRIVATE_KEY_PASSWORD;

async function main() {
    const wallet=new ethers.Wallet(PRIVATE_KEY);
    const encryptedJson=await wallet.encrypt(
        PRIVATE_KEY_PASSWORD
    );
    // console.log('encryptedJson::', encryptedJson)
    fs.writeFileSync('./encryptKey.json', encryptedJson);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1)
    })
