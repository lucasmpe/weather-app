import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { CacheContext, CacheProvider } from './CacheContext'

test('Consumer shows initial value', () => {
  const Consumer = () => {
    const cache = React.useContext(CacheContext)
    return (
      <>The state is: {JSON.stringify(cache.state)}</>
    )
  }

  render(
    <CacheProvider>
      <Consumer />
    </CacheProvider>,
  )
  expect(screen.getByText(/^The state is:/)).toHaveTextContent('{}');
});
