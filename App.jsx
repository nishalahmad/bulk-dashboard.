import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Discord, GitHub, Twitter } from 'lucide-react'

export default function App(){
  const [active, setActive] = useState('about')
  const [openModal, setOpenModal] = useState(null)

  const links = {
    x: 'https://x.com/bulktrade',
    site: 'https://www.bulk.trade/',
    discord: 'https://discord.com/invite/bulk',
    docs: 'https://alphadocs.bulk.trade/',
    alphanet: 'https://alphadocs.bulk.trade/' // fallback
  }

  const sections = [
    { id: 'about', title: 'About', short: 'What is Bulk Trade?' },
    { id: 'features', title: 'Features', short: 'What makes it different' },
    { id: 'roadmap', title: 'Roadmap', short: 'Where it\'s headed' },
    { id: 'contribute', title: 'Contribute', short: 'How you can help' },
    { id: 'resources', title: 'Resources', short: 'Quick links & tools' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-[#0f172a] text-slate-100 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg">
              <span className="font-extrabold text-lg">B</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Bulk Trade — Quick Explorer</h1>
              <p className="text-sm text-slate-400">On‑chain perpetuals on Solana — interactive intro & shortcuts</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href={links.x} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white">
              <Twitter size={16} /> @BulkTrade
            </a>
            <a href={links.site} target="_blank" rel="noreferrer" className="p-2 rounded-md bg-slate-800 hover:bg-slate-700 text-sm flex items-center gap-2">
              Visit site <ExternalLink size={14} />
            </a>
          </div>
        </header>

        <main className="grid grid-cols-12 gap-6">
          <aside className="col-span-3 bg-slate-800/30 rounded-2xl p-4 sticky top-6 h-fit">
            <nav className="space-y-3">
              {sections.map(s => (
                <button key={s.id} onClick={() => setActive(s.id)} className={`w-full text-left p-3 rounded-lg transition-colors ${active===s.id ? 'bg-gradient-to-r from-purple-600/50 to-indigo-500/30 ring-1 ring-purple-500/30' : 'hover:bg-slate-700/40'}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm font-semibold">{s.title}</div>
                      <div className="text-xs text-slate-400">{s.short}</div>
                    </div>
                    <div className="text-xs text-slate-300">{active===s.id ? 'Active' : 'Open'}</div>
                  </div>
                </button>
              ))}

              <div className="mt-4 border-t border-slate-700/30 pt-4">
                <div className="text-xs text-slate-400 mb-2">Quick Actions</div>
                <div className="flex flex-col gap-2">
                  <a href={links.discord} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-700/40 hover:bg-slate-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-2"><Discord size={16} /> Join Discord</div>
                    <ExternalLink size={14} />
                  </a>
                  <a href={links.docs} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-700/40 hover:bg-slate-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-2"><GitHub size={16} /> View Docs</div>
                    <ExternalLink size={14} />
                  </a>
                  <a href={links.alphanet} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 text-black font-semibold hover:brightness-95 flex items-center justify-between">
                    Try Alphanet
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </nav>
          </aside>

          <section className="col-span-9">
            <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.35}} className="bg-slate-800/30 rounded-2xl p-6 mb-6">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 className="text-xl font-bold">{(active==='about' && 'What is Bulk Trade?') || (active==='features' && 'Key Features') || (active==='roadmap' && 'Roadmap') || (active==='contribute' && 'How to Contribute') || (active==='resources' && 'Resources')}</h2>
                  <p className="text-slate-300 mt-2 max-w-2xl">
                    {active==='about' ? 'Bulk Trade aims to deliver CEX‑like latency for on‑chain perpetuals on Solana — a high‑performant, non‑custodial perp DEX focusing on matching engine speed, low fee UX and community‑first development.' : active==='features' ? 'Sub‑20ms matching claims, co‑located execution architecture, gasless orders, and validator incentive model.' : active==='roadmap' ? 'Alphanet → expanded markets & liquidity mining → mainnet launch and validator expansion.' : active==='contribute' ? 'Reproduce bugs, open issues, submit docs PRs, build small utilities or run alphanet tests.' : 'Quick links to site, docs, Discord, and alphanet plus starter tasks.'}
                  </p>

                  <div className="mt-4 flex gap-3">
                    <a href={links.site} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-slate-700/60 hover:bg-slate-700/80">Visit Site</a>
                    <button onClick={() => setOpenModal('share')} className="px-4 py-2 rounded-md border border-slate-600 hover:bg-slate-700/30">Share</button>
                  </div>
                </div>

                <div className="w-64 bg-gradient-to-b from-[#0b1220] to-[#081024] rounded-xl p-3 ring-1 ring-slate-700/40">
                  <div className="text-xs text-slate-400">Alphanet Status</div>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <div className="text-sm font-medium">Online</div>
                  </div>
                  <div className="mt-3 text-xs text-slate-400">Market Snapshot</div>
                  <div className="mt-2 h-20 bg-slate-900/40 rounded-md flex items-center justify-center text-slate-400">(Chart)</div>
                  <div className="mt-3 flex gap-2">
                    <a href={links.alphanet} target="_blank" rel="noreferrer" className="flex-1 text-center py-1 rounded-md bg-gradient-to-r from-purple-600 to-indigo-500 text-black font-semibold">Try Alphanet</a>
                    <a href={links.docs} target="_blank" rel="noreferrer" className="py-1 px-2 rounded-md border border-slate-700 text-xs">Docs</a>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div initial={{opacity:0}} animate={{opacity:1}} className="bg-slate-800/25 rounded-2xl p-4">
                <h3 className="font-semibold">Quick Starter Tasks</h3>
                <ol className="mt-2 text-slate-300 list-decimal list-inside space-y-2 text-sm">
                  <li>Join Discord & introduce yourself in #introductions.</li>
                  <li>Open alphanet and place a test order. Save screenshots & logs.</li>
                  <li>File 1 reproducible bug report or suggestion in GitHub/Discord.</li>
                  <li>Share results using <span className="font-medium">#BulkAlphanet</span> on X.</li>
                </ol>
                <div className="mt-3 flex gap-2">
                  <a href={links.discord} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-md bg-slate-700/40">Join Discord</a>
                  <a href={links.alphanet} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-md bg-gradient-to-r from-purple-600 to-indigo-500 text-black">Go Test</a>
                </div>
              </motion.div>

              <motion.div initial={{opacity:0}} animate={{opacity:1}} className="bg-slate-800/25 rounded-2xl p-4">
                <h3 className="font-semibold">Resources</h3>
                <ul className="mt-2 space-y-2 text-sm text-slate-300">
                  <li><a href={links.docs} target="_blank" rel="noreferrer" className="underline">Developer Docs</a></li>
                  <li><a href={links.site} target="_blank" rel="noreferrer" className="underline">Official Website</a></li>
                  <li><a href={links.x} target="_blank" rel="noreferrer" className="underline">X / Announcements</a></li>
                </ul>

                <div className="mt-4">
                  <details className="text-sm text-slate-400">
                    <summary className="cursor-pointer">Starter PR ideas</summary>
                    <ul className="mt-2 list-disc list-inside text-slate-300">
                      <li>Onboarding doc: step‑by‑step wallet setup + first trade.</li>
                      <li>Small utility: orderbook snapshotter or Discord posting bot.</li>
                      <li>Testing checklist CSV for alphanet runs.</li>
                    </ul>
                  </details>
                </div>
              </motion.div>

              <motion.div initial={{opacity:0}} animate={{opacity:1}} className="bg-slate-800/25 rounded-2xl p-4">
                <h3 className="font-semibold">Recent Activity</h3>
                <div className="mt-2 text-slate-300 text-sm">No activity loaded — click the buttons to open live sources. (This demo does not fetch X/Discord API.)</div>
                <div className="mt-3 flex gap-2">
                  <button onClick={() => setOpenModal('postExample')} className="px-3 py-1 rounded-md border border-slate-700">Example Post</button>
                  <button onClick={() => setOpenModal('tasks')} className="px-3 py-1 rounded-md border border-slate-700">Daily Tasks</button>
                </div>
              </motion.div>

              <motion.div initial={{opacity:0}} animate={{opacity:1}} className="bg-slate-800/25 rounded-2xl p-4">
                <h3 className="font-semibold">Community</h3>
                <p className="text-slate-300 text-sm mt-2">Invite others to tests, coordinate runs, and post results. Good contributors pin artifacts: issues, PRs, repos, test CSVs.</p>
                <div className="mt-3">
                  <a href={links.discord} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-md bg-slate-700/40">Open Discord</a>
                </div>
              </motion.div>
            </div>

            <footer className="mt-6 p-4 text-xs text-slate-400 flex justify-between items-center">
              <div>Built for early contributors • Explore, test, contribute.</div>
              <div className="text-right">Created by <a href="https://x.com/Nishal4193" target="_blank" rel="noreferrer" className="underline">@Nishal4193</a></div>
            </footer>
          </section>
        </main>
      </div>

      {openModal==='share' && (
        <Modal onClose={() => setOpenModal(null)}>
          <h3 className="text-lg font-bold">Share this dashboard</h3>
          <p className="mt-2 text-slate-300">Copy this blurb to post on X or Discord:</p>
          <textarea readOnly className="w-full mt-2 p-2 bg-slate-900 text-slate-200 rounded" value={`Explore Bulk Trade alphanet: ${links.alphanet} \nDocs: ${links.docs} \nJoin: ${links.discord} \nCreated by @Nishal4193`} />
          <div className="mt-3 flex justify-end">
            <button onClick={() => { navigator.clipboard?.writeText(`Explore Bulk Trade alphanet: ${links.alphanet} \nDocs: ${links.docs} \nJoin: ${links.discord} \nCreated by @Nishal4193`); alert('Copied!'); }} className="px-3 py-1 rounded-md bg-gradient-to-r from-purple-600 to-indigo-500 text-black">Copy</button>
          </div>
        </Modal>
      )}

      {openModal==='postExample' && (
        <Modal onClose={() => setOpenModal(null)}>
          <h3 className="text-lg font-bold">Example Day‑1 Post</h3>
          <pre className="mt-2 p-2 bg-slate-900 text-slate-200 rounded text-sm">🚀 Day 1 on the Bulk alphanet! Placed my first test order — latency: xx ms. Screenshots + logs attached. #BulkAlphanet</pre>
        </Modal>
      )}

      {openModal==='tasks' && (
        <Modal onClose={() => setOpenModal(null)}>
          <h3 className="text-lg font-bold">Daily Micro‑Tasks</h3>
          <ol className="mt-2 list-decimal list-inside text-slate-300">
            <li>Run alphanet trade & save latency screenshot.</li>
            <li>Look for one minor doc clarity fix; propose PR.</li>
            <li>Share results in Discord + tag maintainers.</li>
          </ol>
        </Modal>
      )}

    </div>
  )
}

function Modal({children, onClose}){
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} className="relative z-10 w-full max-w-lg bg-slate-900 rounded-2xl p-6 ring-1 ring-slate-700/40">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400">✕</button>
        {children}
      </motion.div>
    </div>
  )
}
