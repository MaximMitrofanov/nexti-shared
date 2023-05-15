import React from 'react';
import { useState } from 'react';

export default function Button() {
	const [state, setState] = useState(1);

	return <button onClick={() => setState((v) => v + 1)}>{state}</button>;
}
