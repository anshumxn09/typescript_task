import React from 'react'
import NoteObject from '../models/Note';
import {Card, Typography, Row, Col} from 'antd';

interface Types{
    items : NoteObject[]
}

const CardBox:React.FunctionComponent<Types> = ({items}) => {
  return (
    <>
    <Row justify={'space-evenly'} style={{padding : '10px'}}>
    {
        items.map((elem, index) => {
            // const
            return (
                <Col style={{margin : '5px'}}>
                <Card hoverable style={{width :"300px", height : "300px", borderColor : "navy"}}>
                    <Typography.Title level={3} style={{color : "#1164a2"}}>{elem.title}</Typography.Title>
                    <Typography.Text>{elem.desc}</Typography.Text>
                    <div style={{position : "absolute", bottom : 0, right : 10}}>
                        <img src="https://media.istockphoto.com/id/941221722/vector/character-reaching-top-of-the-mountain-and-sticking-a-flag-thin-line-icon-trendy-design.jpg?s=612x612&w=0&k=20&c=NWlzQ9lo_nIfiIgy0FfuCVRYWdMvm3nPjujPbzO-9Ro=" alt="" width={200} height={200}/>
                    </div>
                </Card>
                </Col>
            )
        })
    }
    </Row>
    </>
  )
}

export default CardBox;