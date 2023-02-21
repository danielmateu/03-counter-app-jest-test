import React from 'react'
import PropTypes from 'prop-types'


const newMessage = {
    title: '',
    subtitle: 1,
    body: 'React is working!',
    name: '',
    age: 30,
    hero: true,
    power: 'Super Speed',
};

// const getResult = () => {
//     return 1 + 1;
// }

export const FirstApp = ({title,subtitle, name}) => {

    


    return (
        <>
            <h1>{title}</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number,
    
}

FirstApp.defaultProps = {
    title: 'Default Title',
    subtitle: 'Default Subtitle',
    name: 'Daniel Mateu'
}
