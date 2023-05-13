import React from 'react'

type MyContextType = {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyContext = React.createContext<MyContextType | undefined>(undefined);

export default MyContext;