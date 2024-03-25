import { Keypair } from "@solana/web3.js";
const keypair = Keypair.generate();
console.log('The public key is', keypair.publicKey.toBase58()); //how we store public keys 
console.log('The private key is', keypair.secretKey);
console.log(keypair, `Generated keypair!`);