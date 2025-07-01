import React from 'react'
import './EnterDetail.css'
import { Form, Input, Button, Row, Col, InputNumber } from 'antd';
import { useNavigate } from 'react-router-dom';

function EnterDetail() {
    const NavtoGenerateMarksheet = useNavigate();
    const [form] = Form.useForm();

    const onFinish = (values) => {
        localStorage.setItem('StuDetails', JSON.stringify(values));
        console.log('Form Values:', values);
        NavtoGenerateMarksheet('/Marksheet', { state: values });
    };

    const markValidation = (_, value) => {
        if (value === undefined || value === null || value === '') {
            return Promise.reject('Please enter marks');
        }
        if (value < 0 || value > 100) {
            return Promise.reject('Marks must be between 0 and 100');
        }
        return Promise.resolve();
    };

    return (
        <div className='MainContainerMarksheet'>
            <div className='marksheetDetails'>
                <h2 className="form-title">Student Marksheet Form</h2>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    className="marksheet-form"
                >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="studentName"
                                label="Student Name"
                                rules={[
                                    { required: true },
                                    { pattern: /^[A-Za-z\s]+$/, message: 'Only alphabets are allowed' }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="class"
                                label="Class"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="rollNo"
                                label="Roll Number"
                                rules={[
                                    { required: true },
                                    { pattern: /^[0-9]+$/, message: 'Only numbers are allowed' }
                                ]}
                            >
                                <Input type="number" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="motherName"
                                label="Mother's Name"
                                rules={[
                                    { required: true },
                                    { pattern: /^[A-Za-z\s]+$/, message: 'Only alphabets are allowed' }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="fatherName"
                                label="Father's Name"
                                rules={[
                                    { required: true },
                                    { pattern: /^[A-Za-z\s]+$/, message: 'Only alphabets are allowed' }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item label="Subject Marks">
                        <Row gutter={16}>
                            <Col span={8}>
                                <Form.Item
                                    name="hindi"
                                    label="Hindi"
                                    rules={[{ validator: markValidation }]}
                                >
                                    <InputNumber placeholder="Marks" style={{ width: '100%' }} />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    name="english"
                                    label="English"
                                    rules={[{ validator: markValidation }]}
                                >
                                    <InputNumber placeholder="Marks" style={{ width: '100%' }} />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    name="maths"
                                    label="Maths"
                                    rules={[{ validator: markValidation }]}
                                >
                                    <InputNumber placeholder="Marks" style={{ width: '100%' }} />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={8}>
                                <Form.Item
                                    name="science"
                                    label="Science"
                                    rules={[{ validator: markValidation }]}
                                >
                                    <InputNumber placeholder="Marks" style={{ width: '100%' }} />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    name="sst"
                                    label="Social Studies"
                                    rules={[{ validator: markValidation }]}
                                >
                                    <InputNumber placeholder="Marks" style={{ width: '100%' }} />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    name="cs"
                                    label="Computer Science"
                                    rules={[{ validator: markValidation }]}
                                >
                                    <InputNumber placeholder="Marks" style={{ width: '100%' }} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="submit-button">
                            Submit Marksheet
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default EnterDetail;
