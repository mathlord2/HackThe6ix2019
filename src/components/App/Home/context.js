import React from 'react';
const DataContext = React.createContext(null);

const withDataContext = Component => props => (
    <DataContext.Consumer>
        {data => <Component {...props} value={data} />}
    </DataContext.Consumer>
)

export {DataContext, withDataContext};