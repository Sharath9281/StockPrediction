import React, { useState, createContext } from 'react';

export const GraphContext = createContext();

const GraphProvider = ({ children }) => {
    const [companyId, setCompanyId] = useState('');
    const handelGraph = (data) => {
        console.log('context', data)
        setCompanyId(data);
    }

    const GraphContextValue = {
        companyId,
        handelGraph,
    }

    return (
        <GraphContext.Provider value={GraphContextValue}>
            {children}
        </GraphContext.Provider>
    )
}

export default GraphProvider