import React from "react"
import { render } from "@testing-library/react"
import App from "../App/App"

test("renders projects button", () => {
  const { getByText } = render(<App />)
  const buttonElement = getByText(/Projec?ts/gi)
  expect(buttonElement).toBeInTheDocument()
})

test("renders articles button", () => {
  const { getByText } = render(<App />)
  const buttonElement = getByText(/Articles/gi)
  expect(buttonElement).toBeInTheDocument()
})

test("renders about button", () => {
  const { getByText } = render(<App />)
  const buttonElement = getByText(/About|À Propos/gi)
  expect(buttonElement).toBeInTheDocument()
})
