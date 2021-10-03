import React from 'react';
import { Text } from 'react-native'; 

const H1 = (props) => {
    return ( 
        <Text 
        {...props} 
        style={{ 
            fontSize: 40, 
            margin: 15, 
            fontWeight: 'bold' }}>{props.children}</Text>
     );
}
 
const H3 = (props) => {
    return ( 
        <Text 
        {...props} 
        style={{ 
            fontSize: 30, 
            margin: 10, 
            fontWeight: 'bold' }}>{props.children}</Text>
        );
}
    
const H5 = (props) => {
    return ( 
            <Text 
            {...props} 
            style={{ 
                fontSize: 20, 
                margin: 5 }}>{props.children}</Text>
            );
}
        
export default H1;
export { H3, H5 };