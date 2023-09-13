import App_module from './App.module.scss';
import { Navbar } from './components/navbar/navbar';
import { HeroSection } from './components/hero-section/hero-section';
function App() {
    return (
            <main className={App_module['page-wrapper']}>
                <Navbar />
                <HeroSection />
            </main>
    );
}

export default App;
