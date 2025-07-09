import AppAreaChart from '@/components/AppAreaChart';
import AppBarChart from '@/components/AppBarChart';
import CardList from '@/components/CardList';
import TodoList from '@/components/TodoList';

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4">
      <div className="bg-primary-foreground rounded-lg p-4">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <CardList title="Latest Transactions" />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <TodoList />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <CardList title="Popular Content" />
      </div>
    </div>
  );
}
