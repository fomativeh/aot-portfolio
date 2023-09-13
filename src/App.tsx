import App_module from './App.module.scss';
import { Navbar } from './components/navbar/navbar';
import { Contact } from './components/contact/contact';
function App() {
    return (
        <main className={App_module['page-wrapper']}>
            <Navbar />
            <Contact />
        </main>
    );
}

export default App;
