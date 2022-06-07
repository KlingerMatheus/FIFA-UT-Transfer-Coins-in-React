import { useState } from "react";
import Navbar from "../components/Navbar";
import PlayersTable from "../components/PlayersTable";
import "../css/Home.css";

export default function Home() {
  const [coins, setCoins] = useState<number>(0);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="container">
          <div id="group-set-coins">
            <div className="input-group">
              <label className="label-top" htmlFor="input-set-coins">
                Insert the amount of coins to be transfered
              </label>
              <span className="range-label mr">0</span>
              <input
                type="range"
                className="slider"
                name="input-set-coins"
                min={0}
                max={1000000}
                step={10000}
                id="input-set-coins"
                placeholder="Type here..."
                onChange={(e) => setCoins(parseInt(e.target.value))}
              />
              <span className="range-label ml">1,000,000</span>
            </div>

            <p className="alert-amount-of-coins">
              You've set
              <strong> {isNaN(coins) ? 0 : coins.toLocaleString("En")} </strong>
              to be transfered.
            </p>
          </div>

          <PlayersTable coinsToBeTransfered={coins} />
        </section>
      </main>
    </div>
  );
}
