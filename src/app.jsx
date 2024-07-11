import Form from "./components/form";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
    return (
        <div>
            <Header />
            <div className="form-wrapper">
                <Form />
            </div>
            <Footer />
        </div>
    );
}

export default App;
