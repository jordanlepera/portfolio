import React from "react"
import { mount } from "enzyme"
import App from "./App"

it("test render App component", () => {
  const mounted = mount(<App />)
  expect(mounted.contains(/Projec?ts/gi)).toBe(true)
})
