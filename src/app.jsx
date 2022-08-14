import './app.css';
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Body from "./components/body/body";

function App() {
	return (
		<div className="app">
			<Header title={`Test`} />
			<Menu />
			<Body />
		</div>
	);
}

export default App;
