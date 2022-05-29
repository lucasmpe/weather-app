import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { GeolocationContext, GeolocationProvider } from './GeolocationContext'

test('Consumer shows initial value', () => {
  const Consumer = () => {
    const geolocation = React.useContext(GeolocationContext)
    return (
      <>The dataGeo is: {JSON.stringify(geolocation.dataGeo)}</>
    )
  }

  render(
    <GeolocationProvider>
      <Consumer />
    </GeolocationProvider>,
  )
  expect(screen.getByText(/^The dataGeo is:/)).toHaveTextContent('{}');
});