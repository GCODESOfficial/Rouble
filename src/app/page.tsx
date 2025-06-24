/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function Home() {
	return (
		<div className="w-full font-['Outfit'] overflow-hidden">
			<div className="w-full md:py-60 py-20 relative md:block hidden">
				<div className=" skew-x-[30deg]  opacity-30 md:z-0 z-20 w-full h-full">
					<span className="ripple-1 absolute w-[350px] h-[350px] -right-72 rounded-full border-[1px] border-[#E32058] bg-transparent"></span>
					<span className="ripple-2 absolute w-[350px] h-[350px] -right-72  rounded-full border-[1px] border-[#E32058] bg-transparent"></span>
					<span className="ripple-3 absolute w-[350px] h-[350px] -right-72   rounded-full border-[1px] border-[#E32058] bg-transparent"></span>
					<span className="ripple-4 absolute w-[350px] h-[350px] -right-72  rounded-full border-[1px] border-[#E32058] bg-transparent"></span>
					<span className="ripple-5 absolute w-[350px] h-[350px] -right-72  rounded-full border-[1px] border-[#E32058] bg-transparent"></span>
				</div>

				<img
					src="/images/gradient.svg"
					alt=""
					className="absolute top-0 right-0 "
				/>
				<img
					src="/images/gradientside.svg"
					alt=""
					className="absolute top-0 left-0 "
				/>
				<img
					src="/images/gradientbox.svg"
					alt=""
					className="absolute bottom-0 w-72 right-10 bounce-y "
				/>
				<div className="space-y-14">
					<h2 className="text-[#fad2de] font-extrabold md:text-[10rem] text-5xl md:leading-44 px-4 font-['Plus_Jakarta_Sans']">
						Connect <br /> Everything
					</h2>
					<p className="text-[#fad2de] md:text-[28px] pl-4 md:pr-8 pr-4">
						Flare is the blockchain for data, providing developers with secure
						decentralized access to high-integrity data from other chains and
						the internet.
					</p>
					<button className="px-4 cursor-pointer hover:text-white hover:bg-black">
						<a
							href="/connect"
							className="border  font-semibold text-[#242425] bg-white py-4 px-8 rounded-full"
						>
							Connect
						</a>
					</button>
				</div>
			</div>



			<div className="w-full md:py-60 py-20 relative md:hidden">
    {/* Background gradients */}
    <img src="/images/gradient.svg" alt="" className="absolute top-0 right-0 z-0" />
    <img src="/images/gradientside.svg" alt="" className="absolute top-0 left-0 z-0" />

    {/* Ripple effects */}
    <div className="skew-x-[30deg] opacity-30 md:z-0 z-20 w-full h-full">
        <span className="ripple-1 absolute w-[350px] h-[350px] -right-72 rounded-full border-[1px] border-[#E32058] bg-transparent z-10"></span>
        <span className="ripple-2 absolute w-[350px] h-[350px] -right-72 rounded-full border-[1px] border-[#E32058] bg-transparent z-10"></span>
        <span className="ripple-3 absolute w-[350px] h-[350px] -right-72 rounded-full border-[1px] border-[#E32058] bg-transparent z-10"></span>
        <span className="ripple-4 absolute w-[350px] h-[350px] -right-72 rounded-full border-[1px] border-[#E32058] bg-transparent z-10"></span>
        <span className="ripple-5 absolute w-[350px] h-[350px] -right-72 rounded-full border-[1px] border-[#E32058] bg-transparent z-10"></span>
    </div>

    {/* Text content */}
    <div className="space-y-14 relative z-30">
        <h2 className="text-[#fad2de] font-extrabold md:text-[10rem] text-5xl md:leading-44 px-4 font-['Plus_Jakarta_Sans']">
            Connect <br /> Everything
        </h2>
        <p className="text-[#fad2de] md:text-[28px] pl-4 md:pr-8 pr-4">
            Flare is the blockchain for data, providing developers with secure
            decentralized access to high-integrity data from other chains and
            the internet.
        </p>
        <button className="px-4 cursor-pointer ">
            <a href="/connect" className="border cursor-pointer font-semibold text-[#242425] bg-white hover:text-white hover:bg-black py-4 px-8 rounded-full">
                Connect
            </a>
        </button>
    </div>

    {/* Animated gradient box */}
    <img src="/images/gradientbox.svg" alt="" className="absolute bottom-0 w-72 right-10 bounce-y z-25" />
</div>

			<section id="whyflare" className="relative px-4">
				<div className="absolute top-0 left-0">
					{/* bounce2 goes BEHIND */}
					<img
						src="/images/img1.svg"
						alt=""
						className="bounce-y absolute scale-200"
					/>

					{/* img.svg on top of bounce2 */}
					<img
						src="/images/img1.svg"
						alt=""
						className="absolute animate-[slideLeftRight_4s_ease-in-out_infinite]"
					/>
				</div>

				<div className="text-center pt-28 md:pt-0 justify-center text-white  md:text-5xl text-4xl font-bold font-['Plus_Jakarta_Sans']  relative">
					Why Flare?
				</div>

				<div className="text-center py-14 justify-center text-zinc-400 text-lg font-normal font-['Outfit']  relative">
					Decentralized finance network and liquidity hub built on the EVM
					<br />
					Network.
				</div>

				<div className="md:w-full md:max-w-7xl mx-auto md:flex-row flex flex-col justify-center space-x-10 md:justify-between relative">
					<div className="pt-14 pb-8 md:pb-0 bg-[#13141E] rounded-3xl relative w-full md:w-lg z-10">
						<div className="md:px-12 px-4 text-white md:text-4xl text-3xl font-medium font-['Plus_Jakarta_Sans']">
							Flare Time Series Oracle
						</div>
						<div className="pt-14 md:w-[30rem] md:px-12 px-4 text-zinc-400 md:text-justify font-normal font-['Outfit']">
							The FTSO delivers highly-decentralized price and data feeds to
							dapps on Flare, without relying on centralized providers
						</div>
						<img className="md:pt-24 pt-10" src="/images/flare3.svg" />
					</div>

					<div className="space-y-20 relative pt-20 md:pt-0">
						<div className="relative md:pl-10 md:py-5 py-10 md:pr-5 px-4 md:flex md:justify-between bg-[#13141E] rounded-3xl z-10">
							<div className="md:pt-14 space-y-10">
								<div className="text-white md:text-4xl text-3xl font-medium font-['Plus_Jakarta_Sans']">
									State Connector
								</div>
								<div className="text-zinc-400 font-normal font-['Outfit'] hidden md:block">
									The State Connector enables information from
									<br />
									other blockchains and the internet to be used
									<br />
									securely and trustlessly with smart contracts
									<br />
									on Flare.
								</div>
								<div className="text-zinc-400 font-normal pb-2  font-['Outfit'] md:hidden">
									The State Connector enables information from
									other blockchains and the internet to be used
									securely and trustlessly with smart contracts
									on Flare.
								</div>
							</div>
							<img src="/images/flare1.svg" />
						</div>

						<div className="md:pl-10 md:py-5 py-10 md:pr-5 px-4 md:flex justify-between relative bg-[#13141E] rounded-3xl">
							<div className="md:pt-14 space-y-10">
								<div className="text-white md:text-4xl text-3xl font-medium font-['Plus_Jakarta_Sans']">
									Secure & Safe
								</div>
								<div className="text-zinc-400 font-normal font-['Outfit'] hidden md:block">
									EVM-based layer 1 blockchain with two
									<br />
									native data acquisition protocols.
								</div>

								<div className="text-zinc-400 pb-2 font-normal font-['Outfit'] md:hidden">
									EVM-based layer 1 blockchain with two
									native data acquisition protocols.
								</div>
							</div>
							<img src="/images/flare2.svg" />
						</div>
					</div>
				</div>
			</section>

			<section
				id="feature"
				className="bg-gradient-to-b from-[#E32058] to-[#100B214D] w-full "
			>
				<div className="md:max-w-7xl mx-auto px-4 md:px-20 mt-40 md:p-32 md:pb-40 md:flex justify-between relative">
				<img
					src="/images/gradientf2.svg"
					alt=""
					className="absolute bottom-20 -right-32 bounce-y "
				/>

				<img
					src="/images/gradientf2.svg"
					alt=""
					className="absolute bottom-10 -left-32 bounce-y scale-110"
				/>

				<div className="relative">
					<img
						src="/images/gradientrotate.svg"
						alt=""
						className="absolute bottom-20 slow-spin"
					/>
					<img
						className="w-96 h-[477.36px] relative bounce-y"
						src="/images/tick.svg"
					/>
				</div>

				<div>
					<div className=" text-white md:text-base text-sm font-semibold font-['Outfit']">
						FEATURES
					</div>
					<div className=" text-white md:text-5xl text-2xl font-bold font-['Plus_Jakarta_Sans'] pt-3 leading-snug">
						The Flare Blockchain
						<br />
						spreads trust
						<br />
						everywhere
					</div>
					<div className=" text-white text-base font-normal font-['Outfit'] pt-14 hidden md:block">
						Flare is a layer 1 EVM-based blockchain that has 2 core data
						<br />
						acquisition protocols, the State Connector and Flare Time Series
						<br />
						Oracle (FTSO). Flare is the decentralized finance network and
						liquidity
						<br />
						hub built on the EVM Network. It is a layer-1 smart contract
						platform
						<br />
						that is scalable, EVM-compatible, and optimized for DeFi with
						built-in
						<br />
						liquidity and ready-made financial applications. With its trustless
						<br />
						exchange, decentralized stablecoin (aUSD), BNB Liquid Staking
						<br />
						(LBNB), and EVM+, Flare lets developers access the best of EVM
						<br />
						networks , XRP and the full power of Substrate.
					</div>


					<div className=" text-white text-base font-normal font-['Outfit'] pt-14 md:hidden">
						Flare is a layer 1 EVM-based blockchain that has 2 core data
						acquisition protocols, the State Connector and Flare Time Series
						Oracle (FTSO). Flare is the decentralized finance network and
						liquidity
						hub built on the EVM Network. It is a layer-1 smart contract
						platform
						that is scalable, EVM-compatible, and optimized for DeFi with
						built-in
						liquidity and ready-made financial applications. With its trustless
						exchange, decentralized stablecoin (aUSD), BNB Liquid Staking
						(LBNB), and EVM+, Flare lets developers access the best of EVM
						networks , XRP and the full power of Substrate.
					</div>
				</div>
				</div>
			</section>

			<section className="md:flex justify-between  items-center px-4 md:mt-40 mt-60">
				<div>
					<div className=" text-white md:text-5xl text-3xl font-bold font-['Plus_Jakarta_Sans']">
						What does it mean for
						<br />
						your business?
					</div>
				</div>

				<div className="md:space-y-20 space-y-5 pt-10 md:pt-0 ">
					<a
						href="/"
						className="cursor-pointer text-zinc-400 hover:text-white md:text-3xl text-2xl font-bold font-['Plus_Jakarta_Sans'] underline leading-10 block"
					>
						Smart contracts
					</a>

					<a
						href="/"
						className="cursor-pointer text-zinc-400 hover:text-white md:text-3xl text-2xl font-bold font-['Plus_Jakarta_Sans'] underline leading-10 block"
					>
						Staking to Flare
						<br />
						Validators
					</a>
				</div>

				<div className="md:space-y-20 space-y-5 pt-5 md:pt-0">
					<a
						href="/"
						className="cursor-pointer text-zinc-400 hover:text-white md:text-3xl text-2xl font-bold font-['Plus_Jakarta_Sans'] underline leading-10 block"
					>
						Delegating to the
						<br />
						FTSO
					</a>

					<a
						href="/"
						className="cursor-pointer text-zinc-400 hover:text-white md:text-3xl text-2xl font-bold font-['Plus_Jakarta_Sans'] underline leading-10 block"
					>
						FlareDrops
					</a>
				</div>
			</section>

			<section className="w-full md:pt-4 pt-14 ">
				<div className="bg-gradient-to-b from-[#E5F8C6] to-[#61B998] md:max-w-7xl mx-auto w-full rounded-2xl md:px-28 px-4 md:py-20 py-10 md:flex items-center justify-between">
					<div>
						<img className="relative bounce-y" src="/images/bitcoin.svg" />
					</div>

					<div>
						<div className=" text-gray-900 text-base font-semibold font-['Outfit']">
							FEATURES
						</div>
						<div className=" text-gray-900 md:text-5xl text-3xl pt-4 font-bold font-['Plus_Jakarta_Sans']">
							What is Flare?
						</div>
						<div className=" text-gray-900 text-base pt-14 font-normal font-['Outfit'] md:block hidden">
							It is a Layer 1 like Ethereum, with added data acquisition
							functionality. Flare
							<br />
							can therefore offer developers decentralized access to
							high-integrity data
							<br />
							from other chains and the internet. This enables the creation of
							dapps with
							<br />
							new use cases and monetization models. It also allows these dapps
							to serve
							<br />
							multiple chains through a single deployment.
						</div>

						<div className=" text-gray-900 text-base pt-14 font-normal font-['Outfit'] md:hidden">
							It is a Layer 1 like Ethereum, with added data acquisition
							functionality. Flare
							can therefore offer developers decentralized access to
							high-integrity data
							from other chains and the internet. This enables the creation of
							dapps with
							new use cases and monetization models. It also allows these dapps
							to serve
							multiple chains through a single deployment.
						</div>
						<div className="md:pt-20 pt-14 flex justify-center w-full md:justify-start">
							<a
								href="/connect"
								className="font-semibold hover:text-white hover:bg-black text-[#242425] py-4 px-8 bg-white  rounded-full "
							>
								Claim Flare
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full pt-48 pb-20">
				<div className="bg-gradient-to-b from-[#E5F8C6] to-[#61B998] md:max-w-7xl mx-auto  w-full rounded-2xl px-4 md:px-28 md:pt-16 md:pb-8 py-14 md:flex justify-between">
					<div>
					<img className="relative md:hidden" src="/images/eth.svg" />

						<div className=" text-gray-900 pt-10 md:text-5xl text-3xl font-bold font-['Plus_Jakarta_Sans']">
							Be part of the future
						</div>
						<div className=" text-gray-900 text-lg pt-10 font-normal font-['Outfit'] hidden md:block">
							FLR is the native token used for payments and transaction
							<br />
							fees. FLR can also be wrapped into an ERC-20 variant,
							<br />
							WFLR. WFLR tokens have additional functionality and can
							<br />
							be delegated to FTSO data providers or used to participate
							<br />
							in network governance.
						</div>


						<div className=" text-gray-900  pt-10 font-normal font-['Outfit'] md:hidden">
							FLR is the native token used for payments and transaction
							fees. FLR can also be wrapped into an ERC-20 variant,
							WFLR. WFLR tokens have additional functionality and can
							be delegated to FTSO data providers or used to participate
							in network governance.
						</div>
						<div className="pt-10 flex justify-center w-full md:justify-start">
							<a
								href="/connect"
								className="font-semibold hover:text-white hover:bg-black text-[#242425]  py-4 px-8 bg-white  rounded-full "
							>
								Connect Wallet
							</a>
						</div>
					</div>
					<div>
						<img className="relative md:-mt-24 hidden md:block" src="/images/eth.svg" />
					</div>
				</div>
			</section>
		</div>
	);
}
