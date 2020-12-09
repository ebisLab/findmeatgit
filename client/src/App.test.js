import { render, cleanup, screen, waitForElement } from '@testing-library/react';
import { expectsResolvedDragConstraints } from 'framer-motion/types/gestures/drag/VisualElementDragControls';
import App from './App';

// TESTS
afterEach(cleanup)

test('<App />', async ()=>{
  const {debug, getAllByTextId, getByTextId}=render(<App />)
  // const linkElement=  screen.getByText(/Search/i);
  // expect(linkElement).toBeInTheDocument()
// await waitForElement(()=>getByTextId("User_rendered"))
})

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Search/i);
//   expect(linkElement).toBeInTheDocument();

//   await waitForElement(() => getByTestId('User_rendered') )


// });
