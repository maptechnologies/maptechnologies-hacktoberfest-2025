'use client';

import { useState } from 'react';
import ContributorsList from '../components/ContributorsList';

export default function ContributorsPage() {
  const [owner, setOwner] = useState('maptechnologies');
  const [repo, setRepo] = useState('maptechnologies-hacktoberfest-2025');

  // Permite pegar "owner/repo" en un campo
  function normalize() {
    const rx = /^([\w.-]+)\/([\w.-]+)$/i;
    if (rx.test(owner) && !repo) {
      const m = rx.exec(owner)!; setOwner(m[1]); setRepo(m[2]);
    } else if (rx.test(repo) && !owner) {
      const m = rx.exec(repo)!; setOwner(m[1]); setRepo(m[2]);
    }
  }

  return (
    <main className="mx-auto max-w-5xl w-full p-6 space-y-6">
      <header>
        <h1 className="text-2xl font-bold">GitHub Contributors (Demo)</h1>
        <p className="text-neutral-500">Fetch contributors for any public repo using GitHub API.</p>
      </header>

      <form
        onSubmit={(e) => { e.preventDefault(); normalize(); }}
        className="grid gap-3 sm:grid-cols-3"
      >
        <label className="flex flex-col gap-1">
          <span className="text-sm">Owner / Org</span>
          <input
            className="rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 outline-none focus:border-cyan-400"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            placeholder="e.g. maptechnologies"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm">Repository</span>
          <input
            className="rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 outline-none focus:border-cyan-400"
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            placeholder="e.g. maptechnologies-hacktoberfest-2025"
          />
        </label>

        <button
          type="submit"
          className="self-end rounded-lg border border-neutral-800 bg-cyan-400 text-black font-semibold px-3 py-2 hover:brightness-95"
        >
          Fetch
        </button>
      </form>

      <ContributorsList owner={owner} repo={repo} />
    </main>
  );
}
