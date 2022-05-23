import LocalStorageContextProvider, { Updater as LocalStorageContextUpdater } from 'contexts/LocalStorage'
import { useAnalytics } from 'hooks'

function App({ Component, pageProps }) {
  useAnalytics()

  return (
    <LocalStorageContextProvider>
      <LocalStorageContextUpdater />
      <Component {...pageProps} />
    </LocalStorageContextProvider>
  )
}

export default App
