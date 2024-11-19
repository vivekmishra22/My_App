import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

const MyList = () => {

    // const listGroupStyle = {
    //     border: 'none',
    // };

    // const listItemStyle = {  style={listItemStyle}
    //     border: 'none',
    //     borderBottom: 'none',  
    // };

    return (
        <>
            <ListGroup className='mt-5'>
                <ListGroup.Item className="border-0">Cras justo odio</ListGroup.Item>
                <ListGroup.Item className="border-0">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item className="border-0">Morbi leo risus</ListGroup.Item>
                <ListGroup.Item className="border-0">Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item className="border-0">Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default MyList
