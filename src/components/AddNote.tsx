import { Modal, Form, Button } from "antd";
import Input from "antd/es/input";
import React from "react";
import NoteObject  from "../models/Note";
import {v4 as uuid} from 'uuid';

interface Add{
    addToList : (note: NoteObject) => void 
}

const AddNote : React.FunctionComponent<Add> = ({addToList}) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const submitDetails = (values : any) => {
        setIsModalOpen(false);
        addToList({...values, date : new Date(Date.now()), id : uuid()})
    }
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <button
                className="float"
                type="button"
                style={{
                    background: "#1164a2",
                    border: "none",
                    outline: "none",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    fontSize: "30px",
                    color: "white",
                    position: "absolute",
                    right: "15px",
                    bottom: "20px",
                    cursor: "pointer",
                }}
                onClick={showModal}
            >
                +
            </button>
            <Modal
                title="Create A Note"
                open={isModalOpen}
                onCancel={handleCancel}
                okButtonProps={{style : {
                    display : "none"
                }}}
                okText="Add Note"
            >
                <Form layout="vertical" onFinish={submitDetails} initialValues={{
                    remember : false
                }} autoComplete="off">
                    <Form.Item label="Title" name="title" rules={[{
                        required : true,
                        message : "Kindly enter the title"
                    }]}>
                        <Input maxLength={25} placeholder="Kindly enter your title" type="text" 
                        ></Input>
                    </Form.Item>
                    <Form.Item label="Description" name="desc" rules={[
                        {required : true, message : "Kindly enter the description"}
                    ]}>
                        <Input.TextArea maxLength={100} placeholder="Kindly enter the description" style={{height : "100px", resize :"none"}}></Input.TextArea>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" block htmlType="submit">Add Note</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default AddNote;
