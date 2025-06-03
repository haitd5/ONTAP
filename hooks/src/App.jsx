import "./App.css";
import AppCount from "./components/AppCount/AppCount";
import CheckboxGroup from "./components/CheckboxGroup/CheckboxGroup";
import RadioGroup from "./components/RadioGroup/RadioGroup";

function App() {
    return (
        <>
            <div className="container">
                Wellcom to React
                {/* <AppCount/> */}
                <CheckboxGroup />
            </div>
        </>
    );
}

export default App;
