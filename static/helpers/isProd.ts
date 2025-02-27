const devDomains = [
  'localhost',
  'localhost.nftstake',
  'nftstakedemo.localhost',
  'shendel.github.io',
  'localhost.lottery',
  'lottery.local',
  'localhost.feo.crimea'
]

const isProd = () => {
  if (typeof window === 'undefined') return ''
  const curDomain = window.location.hostname || document.location.host || ''
  return devDomains.indexOf(curDomain) === -1
}


export default isProd