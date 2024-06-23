import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Search from './Search'

const Main = (props) => {
    return (
        <HelmetProvider>
            <Helmet

                titleTemplate="%s | Webs Youtube"
                defaultTitle="Webs Youtube"
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />


            </Helmet>

            <main id="main" role="main">
                <Search />
                <div className="text">
                    <div className="main-text">
                        <h1>WHAT</h1>
                        <em>TO</em>
                        <p>WEAR</p>
                    </div>
                </div>
                {props.children}
            </main>
        </HelmetProvider>
    )
}

export default Main