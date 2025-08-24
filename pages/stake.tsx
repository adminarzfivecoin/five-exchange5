import Layout from '@/components/Layout';
import WalletConnector from '@/components/WalletConnector';

export default function Stake() {
  return (
    <Layout>
      <div className="card mt-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Stake LP</h1>
          <WalletConnector />
        </div>
        <p className="text-neutral-300 text-sm">
          Liquidity mining enabled. Rewards in FIVE. Locking boosts APR.
        </p>
        <div className="mt-4">
          <button className="btn">Stake</button>
        </div>
      </div>
    </Layout>
  );
}
