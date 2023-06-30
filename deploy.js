const ethers=require('ethers');
const fs=require('fs-extra')
require('dotenv').config();

const RPC_URL=process.env.RPC_URL;
const PRIVATE_KEY_PASSWORD=process.env.PRIVATE_KEY_PASSWORD;

async function main() {
    console.log('hi');
    const provider=new ethers.JsonRpcProvider(RPC_URL);
    // const wallet=new ethers.Wallet(PRIVATE_KEY, provider);
    const encryptedJson=fs.readFileSync('./encryptKey.json', 'utf-8');
    let wallet=ethers.Wallet.fromEncryptedJsonSync(
        encryptedJson,
        PRIVATE_KEY_PASSWORD
    );
    // 连接 provider 和 wallet
    wallet=await wallet.connect(provider)

    const abi=fs.readFileSync('./SimpleStorage_sol_SimpleStorage.abi', 'utf-8');
    const binary=fs.readFileSync('./SimpleStorage_sol_SimpleStorage.bin', 'utf-8');

    const contractFactory=new ethers.ContractFactory(abi, binary, wallet)
    console.log('Deploying, please wait...')
    const contract=await contractFactory.deploy();

    // get number
    const currentFavoriteNumber=await contract.retrieve();
    console.log('currentFavoriteNumber::', currentFavoriteNumber.toString())
    const transactionRespose=await contract.store('7');
    console.log('transactionRespose::...')
    const transactionReceipt=await transactionRespose.wait(1);
    console.log('transactionReceipt::...')
    const updateFavoriteNumber=await contract.retrieve();
    console.log('updateFavoriteNumber::', updateFavoriteNumber.toString())


}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1)
    })
