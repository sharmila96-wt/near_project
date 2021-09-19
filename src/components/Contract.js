import React, {useEffect, useState} from 'react';
import * as nearAPI from 'near-api-js';
import { handleSale } from '../state/actions';
import { 
	isAccountTaken,
	networkId,
} from '../utils/near-utils';

const {
	KeyPair,
} = nearAPI;

export const Contract = ({ near, update, account }) => {
	if (!account) return <p>Please connect your NEAR Wallet</p>;

	const [media, setMedia] = useState('');
	const [validMedia, setValidMedia] = useState('');
	const [receiver, setReceiver] = useState([]);
        const [price, setPrice] = useState([]);
	return <>
		<h4>Upload image link to sell</h4>
		<input className="full-width" placeholder="Image Link" value={media} onChange={(e) => setMedia(e.target.value)} />
		<img src={media} onLoad={() => setValidMedia(true)} onError={() => setValidMedia(false)} />
		
		{ !validMedia && <p>(Image link is invalid)</p> }
		
		<h4>Account ID</h4>
		
		<input className="full-width" placeholder="Account ID" value={receiver} onChange={(e) => setReceiver(e.target.value)} />

				<button onClick={async () => {
			const exists = await isAccountTaken(receiver);
			handleSale(account, media, validMedia);
			if (!exists) return alert(`Account: ${receiver} does not exist on ${networkId ==='default' ? 'testnet' : 'mainnet'}.`);
			
			
		}}>upload</button>
		{
			}


		
		
	
	</>;
};
