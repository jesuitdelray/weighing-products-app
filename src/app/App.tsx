import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Header } from "@/widgets/Header"
import { ProductsSectionPage } from "@/pages/ProductsSectionPage"
import { ProductsListPage } from "@/pages/ProductsListPage"
import { SearchedListPage } from "@/pages/SearchedListPage"
import { EPageRoutes } from "@/shared/const/Routes"

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to={EPageRoutes.getSectionPageRoute()} />} />
                <Route path={EPageRoutes.getSectionPageRoute()} element={<ProductsSectionPage />} />
                <Route
                    path={EPageRoutes.getProductsPageRoute(`:id`)}
                    element={<ProductsListPage />}
                />
                <Route
                    path={EPageRoutes.getSearchedListPageRoute()}
                    element={<SearchedListPage />}
                />
            </Routes>
        </Router>
    )
}

export default App
