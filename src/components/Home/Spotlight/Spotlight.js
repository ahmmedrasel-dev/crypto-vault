import React from 'react';
import './spotlight.css'

const Spotlight = () => {
  return (
    <section>
      <div class="spotlight flex bg-[#f5f6fa]">
        <div class="spotlight__content flex flex-col justify-center items-center p-8 border-r border-[#80808033]">
          <span class="spotlight__content--header text-4xl">Spotlight</span>
          <a href="#" target="_blank" rel="noreferrer" class="spotlight__content--link text-gradient">View full Spotlight</a>
        </div>
        <div class="spotlight__marquee flex relative w-full max-w-full overflow-x-hidden">
          <div class="spotlight__marquee--track">
            <div class="spotlight__marquee--content flex items-center">
              <span>Top 3 token traded on Binance Smart Chain by 24-hour trading volume</span>
              <span>Top gainer on CoinMarketCap and top 10 on PancakeSwap</span>
              <span>LZ Pool (formerly PoolX): Top 3 BSC Dapp on Dapp Radar</span>
              <span>Star project titled by Binance Smart Chain</span>
              <span>12 Projects Added To The BSC Projects Page.</span>
              <span>Top 4 in term of daily active users based on Dapp Radar</span>
              <span>Top Yield Farming with best APYs &amp; cheapest on LiquidityMining</span>
              <span>Top 21 on CoinGecko’s list of the most popular yield-farming projects</span>
              <span>Top on the list of trending crypto on CoinMarketCap</span>
              <span>Top 30 trending searches on CoinGecko</span>
              <span>Top 20 most discussed new coins on Twitter in February 2021</span>
              <span>$BSCX (now $LZ) traded on BitMartExchangea</span>
              <span>Top Dapps with best social signal on Binance Smart Chain</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;