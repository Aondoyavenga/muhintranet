import '../styles/globals.css'

import '../node_modules/@syncfusion/ej2-base/styles/material.css';
import '../node_modules/@syncfusion/ej2-icons/styles/material.css';
import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
import "../node_modules/@syncfusion/ej2-react-filemanager/styles/material.css";
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import { Provider } from 'react-redux'
import {store} from '../app/store'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <Fragment>
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    </Fragment>
  )
}

export default MyApp
