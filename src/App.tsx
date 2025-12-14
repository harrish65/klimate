import { BrowserRouter } from "react-router-dom"
import Layout from "./components/layout"
import { Routes, Route } from "react-router-dom"
import WeatherDashboard from "./pages/weather-dashboard"
import { ThemeProvider } from "./components/context/theme-provider"
import CityPage from "./pages/city-page"



function App() {
  return (
    <BrowserRouter>
    <ThemeProvider defaultTheme="dark" storageKey="weather-dashboard-theme">
    <Layout>
      <Routes>
        <Route path="/" element={<WeatherDashboard />} />
        <Route path="/city/:cityName" element={<CityPage/>} />
      </Routes>

    </Layout>
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
