import React, { ReactNode } from 'react';
import { NextiComponent } from '../types/interfaces';

export default class NextiWrapperDefault {
	constructor(private options) {}

	admin({ children }) {
		return <div className='is-admin'>{children}</div>;
	}

	public({ children }) {
		return <>{children}</>;
	}
}
