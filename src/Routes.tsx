import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
// import PageNotFound from "./pages/404"
import Home from "./pages/Home"
import Inscricao from "./pages/Inscricao"

export function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/inscricao" element={<Inscricao />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</Router>
	)
}
