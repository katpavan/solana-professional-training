import "dotenv/config";
import {
	LAMPORTS_PER_SOL, //miner units -> 1 SOL is 1 billion LAMPORTS
	PublicKey,
	SystemProgram,
	Transaction,
	clusterApiUrl,
	Connection,
	sendAndConfirmTransaction,
	TransactionInstruction,
} from "@solana/web3.js";

import {
	getKeypairFromEnvironment,
} from "@solana-developers/helpers";

const sender = getKeypairFromEnvironment("SECRET_KEY");

const connection = new Connection(clusterApiUrl("devnet"));

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

const memoProgram = new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");

const memoText = "Hello from Solana!";

const addMemoInstruction = new TransactionInstruction({
	keys: [{ pubkey: sender.publicKey, isSigner: true, isWritable: true }],
	data: Buffer.from(memoText, "utf-8"),
	programId: memoProgram,
});

console.log(`memo is ${memoText}`);

transaction.add(addMemoInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [
	sender,
]);

console.log(`Transaction confirmed, signature: ${signature}!`);
