import React from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from '../components/navbar/routes'
import PageContainer from '../components/PageContainer'

function NotFoundComponent() {
    return (
        <PageContainer>
            <div className="container flex flex-col items-center">
                <div className="flex flex-col gap-6 max-w-md text-center">
                    <h2 className="font-extrabold text-9xl text-secondary">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl md:text-3xl dark:text-gray-300">{"Sorry, we couldn't find this page."}</p>
                    <NavLink to={routes.publics.INDEX} className="px-8 py-4 text-xl font-semibold rounded bg-tertiary text-gray-50 hover:text-gray-200">
                        Back to home
                    </NavLink>
                </div>
            </div>
        </PageContainer>
    )
}

export default NotFoundComponent