import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MarketingApp from './components/MarketingApp'
import Header from './components/Header'
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default function App() {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}
