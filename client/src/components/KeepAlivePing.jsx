import { useEffect } from 'react';

const KEEP_ALIVE_URL =
  import.meta.env.VITE_KEEP_ALIVE_URL ||
  'https://new-green-agri-coal.onrender.com/api/health';

const KEEP_ALIVE_INTERVAL_MS = 14 * 60 * 1000;

async function pingBackend() {
  try {
    const response = await fetch(KEEP_ALIVE_URL, {
      method: 'GET',
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    if (import.meta.env.DEV) {  
      console.log('[Keep-Alive] Ping successful:', data.status);
    }
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('[Keep-Alive] Ping failed:', error.message);
    }
  }
}

function KeepAlivePing() {
  useEffect(() => {
    let intervalId;

    const startPinging = () => {
      if (intervalId || document.visibilityState === 'hidden') {
        return;
      }

      pingBackend();
      intervalId = window.setInterval(pingBackend, KEEP_ALIVE_INTERVAL_MS);
    };

    const stopPinging = () => {
      if (!intervalId) {
        return;
      }

      window.clearInterval(intervalId);
      intervalId = undefined;
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        startPinging();
        return;
      }

      stopPinging();
    };

    handleVisibilityChange();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stopPinging();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null;
}

export default KeepAlivePing;
