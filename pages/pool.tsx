import Layout from '@/components/Layout';
import WalletConnector from '@/components/WalletConnector';
import { useState } from 'react';

export default function Pool() {
  const [amountA, setAmountA] = useState('');
  const [amountB, setAmountB] = useState('');

  return (
    <Layout>
      <div className="card mt-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Add Liquidity</h1>
          <WalletConnector />
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-neutral-400">FIVE</label>
            <input className="input mt-2" placeholder="0.0" value={amountA} onChange={e=>setAmountA(e.target.value)} />
          </div>
          <div>
            <label className="text-sm text-neutral-400">USDT</label>
            <input className="input mt-2" placeholder="0.0" value={amountB} onChange={e=>setAmountB(e.target.value)} />
          </div>
          <button className="btn w-full py-3">Provide Liquidity</button>
        </div>
      </div>
    </Layout>
  );
}
