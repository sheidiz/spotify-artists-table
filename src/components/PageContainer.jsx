import React from 'react'

function PageContainer({ children }) {
    return (
        <div className='pt-5 lg:pt-0 bg-primary min-h-[84vh] flex flex-col items-center justify-center gap-5'>
            {children}
        </div>
    )
}

export default PageContainer