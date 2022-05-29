import * as React from 'react'
import { render, screen } from '@testing-library/react'
import SmallCard from './SmallCard'

test('renders components childs', () => {
	const props = { time: 1653782400, icon: '04n', temp: 10.02 };

	render(<SmallCard {...props} />);

	expect(screen.getByRole('heading')).toBeInTheDocument();
	expect(screen.getByRole('heading')).toHaveTextContent('21:00');
	expect(screen.getByRole('img')).toBeInTheDocument();
	expect(screen.getByText(/10/i)).toBeInTheDocument();
});
