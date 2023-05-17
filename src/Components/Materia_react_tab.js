import React, { useState } from 'react';
import { Tab, Tabs } from '@material-ui/core';
export default function Materia_react_tab () {
    const [value, setValue] = useState(0)
    const handleChange = (e, val) => {
        setValue(val)
    }

    return (

        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
            </Tabs>

            <TabPanel value={value} index={0}>
                Item One
                </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
                </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
                </TabPanel>
        </div>

    );

}
function TabPanel(props)
{
    const{children,value,index}=props;
    {
        return(<div>
            {
                value ==index && (<h1>{children}</h1>)
            }
            </div>
            )
    }
}


