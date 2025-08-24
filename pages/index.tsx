import Layout from '@/components/Layout';
import WalletConnector from '@/components/WalletConnector';
import { useEffect, useMemo, useState } from 'react';

export default function Swap() {
  const [fromAmount, setFromAmount] = useState('');
  const [price, setPrice] = useState<number | null>(null);
  const feeBps = 17; // 0.017%

  const outAmount = useMemo(() => {
    const amt = parseFloat(fromAmount || '0');
    if (!price || !amt) return '0';
    const gross = amt * price;
    const fee = gross * (feeBps / 10000);
    return (gross - fee).toFixed(6);
  }, [fromAmount, price, feeBps]);

  useEffect(() => { setPrice(1); }, []);

  return (
    <Layout>
      <div className="card mt-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Swap</h1>
          <WalletConnector />
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-neutral-400">From</label>
            <div className="mt-2 flex items-center gap-2">
              <input className="input" placeholder="0.0" value={fromAmount} onChange={e=>setFromAmount(e.target.value)} />
              <button className="btn">FIVE</button>
            </div>
          </div>
          <div>
            <label className="text-sm text-neutral-400">To (estimated)</label>
            <div className="mt-2 flex items-center gap-2">
              <input className="input" placeholder="0.0" value={outAmount} readOnly />
              <button className="btn">USDT</button>
            </div>
            <p className="text-xs text-neutral-400 mt-2">Fee: {feeBps/100}% • Route: FIVE → USDT</p>
          </div>
          <button className="btn w-full py-3 text-center text-lg">Swap</button>
        </div>
      </div>
    </Layout>
  );
}
