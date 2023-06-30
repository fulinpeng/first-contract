#### web3学习历程
https://www.bilibili.com/video/BV1Je4y1r7uB/?spm_id_from=333.337.search-card.all.click

https://www.bilibili.com/video/BV1UB4y117g7/?spm_id_from=autoNext&vd_source=51b79462e11eeb432242cec85dfb0af5

### solcjs
solcjs 编译sol，`yarn solcjs --bin --abi --include-path node_modules/ --base-path . -o . SimpleStorage.sol`

### ganache
像remix中的vm虚拟机，启动一个本地区块链`https://trufflesuite.com/ganache/`

### ether.js/web3.js
可以让我们在多个区块链上交互

地址：https://docs.ethers.io

corepack enable 是什么？

### 运行

1. 启动ganache

2. `yarn run compile`

3. `node deploy.js`