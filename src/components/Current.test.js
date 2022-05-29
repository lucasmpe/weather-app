import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Current from './Current';

test('renders component', () => {
	const props = {
		city: 'Nueve de Julio', 
		humidity: 66,
		speed: 1.33,
		temp: 9.96,
		time: 1653780310,
		weather: [{description: 'nubes', icon: '10n'}]
	}
	
	render(<Current {...props} />);

	expect(screen.getByRole('heading')).toBeInTheDocument();
	expect(screen.getByRole('heading')).toHaveTextContent(props.weather[0].description);
	expect(screen.getByRole('img')).toBeInTheDocument();
	expect(screen.getByRole('detail')).toBeInTheDocument();
	expect(screen.getByRole('current-location')).toBeInTheDocument();
	expect(screen.getByRole('current-location')).toHaveTextContent(props.city);

});
