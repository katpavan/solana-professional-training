import "dotenv/config";
import {
	LAMPORTS_PER_SOL, //miner units -> 1 SOL is 1 billion LAMPORTS
	PublicKey,
	SystemProgram,
	Transaction,
	clusterApiUrl,
	Connection,
	sendAndConfirmTransaction,
} from "@solana/web3.js";

import {
	getKeypairFromEnvironment,
} from "@solana-developers/helpers";

const sender = getKeypairFromEnvironment("SECRET_KEY");

const connection = new Connection(clusterApiURL("devnet"));

console.log(`Loaded our keypair securely, using an env file! Our public key is: ${sender.publicKey.toBase58()}`);

const recipient = new PublicKey("H3uNooa5N6ERh5n12dZ1AV29guQEELF43JSMQ4C1VZDp"); //Dan

console.log(`Attempting to send 0.01 SOL to ${recipient.toBase58()}`);

const transaction = new Transaction();

const sendSolInstruction = SystemProgram.transfer({
	fromPubkey: sender.publicKey,
	toPubkey: recipient,
	lamports: 0.01 * LAMPORTS_PER_SOL,
});

transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [
	sender,
]);

console.log(`Transaction confirmed, signature: ${signature}!`);