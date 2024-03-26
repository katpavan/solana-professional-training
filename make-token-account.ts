import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import "dotenv/config";
import {
    getExplorerLink,
    getKeypairFromEnvironment,
} from "@solana-developers/helpers";
import {Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
const connection = new Connection(clusterApiUrl("devnet"));

const sender = getKeypairFromEnvironment("SECRET_KEY");

console.log(`Loaded our keypair securely, using an env file! Our public key is: ${sender.publicKey.toBase58()}`);

//sub in your token mint account from make-token.ts
const tokenMintAccount = new PublicKey("7NzkrKbimu5As7e9SjoLckjjWfvySHjxVSPpRZSPhfK4"); //token address

//sub in a recipient from check-balance.ts
const recipient = new PublicKey("5vh9gQ7nXWUgfEFFpjxeTSnn1DnMbTDzQhZBcUe6QD31"); //aadil

const tokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    sender,
    tokenMintAccount,
    recipient
);

console.log(`Token Account: ${tokenAccount.address.toBase58()}`);

const link = getExplorerLink(
    "address",
    tokenAccount.address.toBase58(),
    "devnet"
);

console.log(`Created token Account: ${link}`);

