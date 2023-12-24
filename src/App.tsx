import Parse from "parse"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import config from "./config"
import CattleForm from "./pages/Cattle/Form"
import Cattle from "./pages/Cattle/List"
import Home from "./pages/Home"
import NoMatch from "./pages/NoMatch"
import Semen from "./pages/Semen"

Parse.initialize(
  config?.parseServer?.appId || "",
  config?.parseServer?.jsKey || ""
)
Parse.serverURL = config.parseServer.serverURL
Parse.masterKey = config.parseServer.masterKey
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cattle" element={<Cattle />} />
        <Route path="/cattle/create" element={<CattleForm mode='create'/>} />
        <Route path="/cattle/:id" element={<CattleForm mode='update'/>} />
        <Route path="/semen" element={<Semen />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

export default App
