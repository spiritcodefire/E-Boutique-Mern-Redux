import React from 'react';


const PaginationContext = React.createContext()
export const usePagination = () => { 
    const context = React.useContext(PaginationContext)
    if (!context) { 
        throw Error('context must be within Provider')
    }
    return context
}

const PaginationProvider = ({ children }) => { 
    const [PageIndex, setPageIndex] = React.useState(0)
    const updatePage = (event, index) => { 
        event.preventDefault()
        setPageIndex(index)
    }
    const value = React.useMemo(() => { 
        return {
            PageIndex, 
            updatePage
        }
    }, [PageIndex])
    return <PaginationContext.Provider {...value}>{children}</PaginationContext.Provider>
}
export default PaginationProvider