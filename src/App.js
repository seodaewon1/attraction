import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import VideoPage from './pages/VideoPage'
import ChannelPage from './pages/ChannelPage'

import Header from './components/section/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchpage" element={<SearchPage />} />
        <Route path="/videopage" element={<VideoPage />} />
        <Route path="/channelpage" element={<ChannelPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App