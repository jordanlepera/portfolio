import React from "react"
import { mount } from "enzyme"
// import { render } from '@testing-library/react';
import App from "./App"

test("renders App component", () => {
  const mounted = mount(<App />)
  // const linkElement = getByText(/Projec?ts/gi);
  expect(mounted.contains(/Projec?ts/gi)).toBe(true)
})
