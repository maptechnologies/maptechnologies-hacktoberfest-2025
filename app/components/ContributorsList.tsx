'use client';

import { useEffect, useState } from 'react';

type Contributor = {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
  contributions: number;
};

export default function ContributorsList({
  owner,
  repo,
  className = '',
}: {
  owner: string;
  repo: string;
  className?: string;
}) {
  const [data, setData] = useState<Contributor[]>([]);
  const [status, setStatus] = useState<'idle'|'loading'|'error'|'done'>('idle');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    let cancel = false;
    (async () => {
      setStatus('loading');
      setError('');
      setData([]);
      try {
        const perPage = 100;
        let page = 1;
        const acc: Contributor[] = [];
        while (true) {
          const url = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contributors?per_page=${perPage}&page=${page}`;
          const res = await fetch(url, { headers: { Accept: 'application/vnd.github+json' } });
          if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
          const chunk: Contributor[] = await res.json();
          if (!chunk?.length) break;
          acc.push(...chunk);
          if (chunk.length < perPage || page >= 10) break; // límite de seguridad
          page++;
        }
        if (!cancel) {
          const map = new Map<number, Contributor>();
          for (const c of acc) map.set(c.id, c);
          setData(Array.from(map.values()));
          setStatus('done');
        }
      } catch (e: any) {
        if (!cancel) {
          setError(e?.message || 'Failed to fetch contributors');
          setStatus('error');
        }
      }
    })();
    return () => { cancel = true; };
  }, [owner, repo]);

  return (
    <section className={`w-full ${className}`} aria-label="GitHub contributors">
      <div className="flex items-end justify-between mb-3">
        <div>
          <h2 className="text-xl font-semibold">Contributors</h2>
          <p className="text-sm text-neutral-500">{owner}/{repo}</p>
        </div>
        {status === 'loading' && <span className="text-sm text-neutral-500" aria-live="polite">Fetching…</span>}
      </div>

      {status === 'error' && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
          Error: {error}. Check repo/owner or GitHub rate-limit.
        </div>
      )}

      {status === 'done' && data.length === 0 && (
        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-3 text-sm text-neutral-400">
          No contributors found.
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map(c => (
          <article key={c.id} className="rounded-xl border border-neutral-800 bg-neutral-900 p-4 flex items-center gap-3">
            <img
              src={c.avatar_url}
              alt={`${c.login} avatar`}
              width={44}
              height={44}
              className="rounded-full border border-neutral-800"
              loading="lazy"
            />
            <div className="min-w-0">
              <a className="font-medium hover:underline truncate block" href={c.html_url} target="_blank" rel="noreferrer">
                {c.login}
              </a>
              <span className="text-xs text-neutral-400">Contributions: {c.contributions ?? '-'}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
