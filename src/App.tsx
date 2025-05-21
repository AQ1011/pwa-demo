import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

const queryClient = new QueryClient();

async function fetchDashboard() {
  const res = await fetch('/api/dashboard');
  if (!res.ok) throw new Error('Network error');
  return res.json();
}

function Dashboard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dashboard'],
    staleTime: 5 * 60 * 1000, // 5 minutes cache
    queryFn: fetchDashboard
  });

  if (isLoading) return <div>Loading dashboard...</div>;
  if (error) return <div>Error loading dashboard: {error.message}</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>
  );
}
