import Main from "./components/Main.jsx";
import { AuthProvider } from "./context/AuthContext";

function App() {
    return (
        <AuthProvider>
            <Main />
        </AuthProvider>
    );
}

export default App;
