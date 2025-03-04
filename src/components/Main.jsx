import MediaHeader from "./MediaHeader.jsx";
import RequestFormButton from "./RequestFormButton.jsx";
import DroneServices from "./DroneServices.jsx";
import Footer from "./Footer.jsx";
import AuthComponent from "./AuthComponent.jsx";

export default function Main() {
    return (
        <div className="min-h-screen flex flex-col bg-cover bg-center text-white" style={{ backgroundImage: "url('/background.jpg')" }}>
              <main className="flex flex-col items-center text-center mt-16 p-6">
                <div className="w-full max-w-lg">
                    <MediaHeader />
                    <AuthComponent />
                    <DroneServices/>
                    <RequestFormButton/>
                    <Footer/>
                </div>
            </main>
        </div>
    );
}
