import React from 'react'

function PageContainer({ children }) {
    return (
        <div className='min-h-[90vh] flex flex-col items-center justify-center gap-5'>
            {children}
        </div>
    )
}

export default PageContainer