import React from 'react'
import CryptoStreamer from './CryptoStreamer'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

test('header renders with correct text', () => {
    render(<CryptoStreamer />);
    const headerEl = screen.getByTestId("stream-button");

    expect(headerEl.textContent).toContain("Start Stream")   
    
})