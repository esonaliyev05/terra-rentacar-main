import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home/HomePage";
import CarsPage from "./pages/cars/CarsPage";
import BrandsPage from "./pages/brands/BrandsPage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import BlogPage from "./pages/blog/BlogPage";
import ServicePage from "./pages/services/ServicePage";
import SingleCarPage from "./pages/single-car/SingleCarPage";
import SingleBrandPage from "./pages/single-brand/SingleBrandPage";
import SingleBlogPage from "./pages/single-blog/SingleBlogPage";
import UslugBuggiesPage from "./pages/uslug-buggies/UslugBuggiesPage";
import UslugCarPage from "./pages/uslug-car/UslugCarPage";
import SingleBlogPage2 from "./pages/single-blog/SingleBlogPage2";
import SingleBlogPage3 from "./pages/single-blog/SingleBlogPage3";
import { SearchProvider } from "./components/SearchContext/SearchContext ";
import { useSearch } from "./components/SearchContext/SearchContext ";
import TermsPage from './pages/terms/TermsPage';

function App() {

  return (
    <SearchProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cars" element={<CarsPage />} />
          <Route path="cars/:id" element={<SingleCarPage />} />
          <Route path="brands" element={<BrandsPage />} />
          <Route path="brands/:id" element={<SingleBrandPage />} />
          <Route path="services/uslugbuggies" element={<UslugBuggiesPage />} />
          <Route path="services/uslugcar" element={<UslugCarPage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/singleblog" element={<SingleBlogPage />} />
          <Route path="blog/singleblog2" element={<SingleBlogPage2 />} />
          <Route path="blog/singleblog3" element={<SingleBlogPage3 />} />
          <Route path="conditions" element={<TermsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
