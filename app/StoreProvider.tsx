'use client'

import { Provider } from 'react-redux'
import { store } from '@/lib/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store)

export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    return <Provider store={store}>
        {children}
    </Provider>
}