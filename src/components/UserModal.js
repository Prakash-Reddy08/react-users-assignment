import React, { useEffect } from 'react';
import { Button, Input, Modal } from 'antd';
import { useGlobalContext } from '../context'
import { Form } from 'antd';

const UserModal = ({ details }) => {
    const { isModalOpen, closeModal, editUserDetails } = useGlobalContext();
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue({
            name: details[0]?.name,
            email: details[0]?.email,
            phone: details[0]?.phone,
            website: details[0]?.website
        })
    }, [form, details])
    const onSubmit = (values) => {
        editUserDetails(details[0].id, values);
    }
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    return (
        <Modal getContainer={false} title="Basic Modal" onCancel={closeModal} visible={isModalOpen} footer={[
            <Button key="cancel" onClick={() => closeModal()}>
                Cancel
            </Button>,
            <Button
                key="submit"
                type="primary"
                onClick={() => {
                    form
                        .validateFields()
                        .then((values) => {
                            onSubmit(values);
                            closeModal();
                        })
                        .catch((info) => {
                            console.log("Validate Failed:", info);
                        });
                }}
            >
                Submit
            </Button>
        ]}>
            <Form form={form} {...layout} name="control-hooks">
                <Form.Item
                    name="name"
                    label="Name"

                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            type: "email",
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="website"
                    label="Website"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default UserModal;
