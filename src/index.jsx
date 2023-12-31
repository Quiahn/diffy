import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/Home.jsx';
import { NotFound } from './pages/_404.jsx';
import { Diff } from './pages/Diff/Diff.jsx';
import { Validate } from './pages/Validate/Validate.jsx';
import './index.css';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route default component={NotFound} />
					<Route path="/diff" component={Diff} />
					<Route path="/validate" component={Validate} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
