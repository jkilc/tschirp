import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home';
import Chirp from './pages/chirp';
import Post from './pages/post';


class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			name: null
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/hello');
			let name = await r.json();
			this.setState({ name });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<BrowserRouter>
				<Home />
				<Switch>

					<Route path='/chirps/:chirpid'>
						<Chirp />
					</Route>

					<Route path='/post'>
						<Post />
					</Route>

				</Switch>

			</BrowserRouter>
		);

	}
}

export interface IAppProps { }

export interface IAppState {
	name: string;
}

export default App;

//
// const App = (props: AppProps) => {
// 	const [greeting, setGreeting] = React.useState<string>('');

// 	React.useEffect(() => {
// 		(async () => {
// 			try {
// 				const res = await fetch('/api/hello');
// 				const greeting = await res.json();
// 				setGreeting(greeting);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		})();
// 	}, []);

// 	return (
// 		<div className="min-vh-100 d-flex justify-content-center align-items-center">
// 			<h1 className="display-1">Hello {greeting}!</h1>
// 		</div>
// 	);
// };

// interface AppProps {}

// export default App;