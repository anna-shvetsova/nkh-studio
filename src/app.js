import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainMenu from './main-menu/main-menu';

import Task1 from './task1';
import Task2 from './task2/task2';
import Task3 from './task3';
import Task4 from './task4';
import Task5 from './task5';
import Task6 from './task6';
import Task7 from './task7';
import Task8 from './task8';
import Task9 from './task9';

import { getHeading, getPath, getKey } from './utils'

import './app.css';
import { Fragment } from 'react';

function app() {
	const items = 8;
	const columns = 4;

	const arrTasks = [
		{
			Comp: Task1,
			descr: 'Grid 2x4 made with flex'
		},
		{
			Comp: Task2,
			descr: 'Grid 2x4 (flex) with changed axises'
		},
		{
			Comp: Task3,
			descr: 'Grid 2x4 (flex) with one cross axis justified row'
		},
		{
			Comp: Task4,
			descr: 'Grid 2x4 (flex) with flex-end justify'
		},
		{
			Comp: Task5,
			descr: 'Grid 2x4 made with inline-block'
		},
		{
			Comp: Task6,
			descr: 'Grid 2x4 made with float'
		},
		{
			Comp: Task7,
			descr: 'Grid 2x4 made with html-table'
		},
		{
			Comp: Task8,
			descr: 'Grid 2x4 made with div'
		},
		{
			Comp: Task9,
			descr: 'Accordion'
		}
	];

	const renderRoute = (idx, root = false) => {
		const { Comp, descr } = arrTasks[idx];
		const path = root ? '/' : getPath(idx);
		const mainClass = getKey(idx);
		const heading = getHeading(idx);
		return <Route
			exact={root}
			key={mainClass}
			path={path}
			render={() => {
				return (
					<Fragment>
						<MainMenu tasks={arrTasks} />
						<Comp mainClass={mainClass} heading={heading} descr={descr} items={items} columns={columns} />
					</Fragment>
				)
			}}
		/>;
	}

	return (
		<div className="app">
			{/* <BrowserRouter basename='/nkh-studio'> */}
			<BrowserRouter>
				<Switch>
					{
						renderRoute(0, true)
					}
					{
						arrTasks.map((el, idx) => renderRoute(idx))
					}
					<Route render={() => <h2>Looks like page doesn't exist</h2>} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default app;
