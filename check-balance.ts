import "dotenv/config";
import {
	Connection,
	LAMPORTS_PER_SOL, //miner units -> 1 SOL is 1 billion LAMPORTS
	PublicKey,
	clusterApiUrl,
} from "@solana/web3.js";

import {
	getKeypairFromEnvironment,
	airdropIfRequired,
} from "@solana-developers/helpers";

const connection = new Connection(clusterApiUrl("devnet"));
console.log("Connected to devnet");
const publicKey = new PublicKey("Csow2ZKPGyC9QzpUufvZozMvQgvmRX9jymMoZ6NeTQ3q");

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

await airdropIfRequired(
	connection,
	publicKey,
	1 * LAMPORTS_PER_SOL,
	0.5 * LAMPORTS_PER_SOL //give me 1 sol if my balance is below 0.5
)

console.log(`Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL})`);

const NIHAR = "3PYjgAg4U15Cqoufkon3tpGehX3Wi59NMuEgkLhkQy7c";

const UMAR = "Enrpz9wpuquKAT5bQkDjgmLfvAPt4bJnef1dakeAsWdW";

const SATYA = "ZSha4rZbkZof5wKPMtHXbqoBGGykMZ5xYwvpnTgrwAf";

const AADIL = "5vh9gQ7nXWUgfEFFpjxeTSnn1DnMbTDzQhZBcUe6QD31";

const PAVAN = "Csow2ZKPGyC9QzpUufvZozMvQgvmRX9jymMoZ6NeTQ3q";

const DAN = "H3uNooa5N6ERh5n12dZ1AV29guQEELF43JSMQ4C1VZDp";

const JESS = "6rKoL5ZqgWQMsjarZyxjrSfnnPwvJSUVQP2W9rBRj7xT";

const DREW = "Hxsgo2tPiu6967VUaEquk232riDKkaqK89wBvdSCgjH7";

const MIKE = "5JhJhCj5yXhnZxtPRUvAnzGBfQNJhY2js4HoLVXzBTmG";

async function checkBal(name, publicAddr){
	const publicKey = new PublicKey(publicAddr);

	const balanceInLamports = await connection.getBalance(publicKey);

	const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

	console.log(name, balanceInSOL);
}


checkBal('NIHAR', NIHAR);
checkBal('UMAR', UMAR);
checkBal('SATYA', SATYA);
checkBal('AADIL', AADIL);
checkBal('PAVAN', PAVAN);
checkBal('DAN', DAN);
checkBal('JESS', JESS);
checkBal('DREW', DREW);
checkBal('MIKE', MIKE);