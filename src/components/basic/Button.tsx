import React from 'react';
import { useState } from 'react';
import { NextiComponent } from '../../types/interfaces';
import NextiWrapperDefault from '../../classes/NextiWrapperDefault';

export default class Button implements NextiComponent {
	public config = {
		name: 'Button',
		wrapper: new NextiWrapperDefault({}),
	};

	public component() {
		const [counter, setCounter] = useState(1);
		return (
			<button onClick={() => setCounter((v) => v + 1)}>
				Button Component
			</button>
		);
	}
}
