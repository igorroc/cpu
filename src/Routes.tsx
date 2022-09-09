import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Home from "./pages/Home"
import Inscricao from "./pages/Inscricao"

export function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="*" element={<Home />} />
				<Route path="/inscricao" element={<Inscricao />} />
			</Routes>
		</Router>
	)
}
