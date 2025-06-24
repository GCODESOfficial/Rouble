/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import Wallets from "../components/wallets";

const Page = () => {
  return (
    <div className=''>
        <section className="w-full md:py-40 py-20 px-5">
		
            <div className="bg-gradient-to-t  h-72 from-[#E32058] to-[#100B214D] w-full flex flex-col justify-center relative items-center text-center rounded-4xl" >
           
            <img
					src="/images/breadcrumb_shape01.png.svg"
					alt=""
					className="absolute md:bottom-1/2 md:left-32 -bottom-5 right-0 bounce-y scale-110"
				/>
           
           <img
					src="/images/breadcrumb_shape02.png.svg"
					alt=""
					className="absolute md:bottom-2/3 md:block hidden md:right-20 slow-spin scale-110"
				/>
           
            <h2 className="text-white font-extrabold md:text-6xl text-5xl px-4 font-['Plus_Jakarta_Sans']">
            Connect Wallet
					</h2>

                    {/* Breadcrumb */}
			<div className="mb-10 font-bold text-white md:text-lg px-4 md:px-12 pt-5">
				<Link href="/" className="font-bold cursor-pointer mr-2 hover:text-[#E32058]">
					HOME
				</Link>{" "}
				&gt; <span className="font-bold ml-2">CONNECT WALLET</span>
			</div>
            </div>


            <Wallets />
        </section>
    </div>
  )
}

export default Page