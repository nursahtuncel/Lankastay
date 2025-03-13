import { useEffect, useState } from "react";
import "./styles.scss";
const { List, Button, Input, Image, Modal, Form } = antd;

    const generateData = () => [
        {
            id: 1,
            name: "Luxury Suite",
            date: "June 15, 2023",
            description: "Spacious suite with panoramic city views and a private balcony.",
            image: "https://placehold.co/100x100?text=Luxury+Suite"
        },
        {
            id: 2,
            name: "Cozy Double Room",
            date: "June 18, 2023",
            description: "Comfortable room with modern amenities, perfect for couples.",
            image: "https://placehold.co/100x100?text=Cozy+Double"
        },
        {
            id: 3,
            name: "Family Suite",
            date: "June 20, 2023",
            description: "Large suite with separate living area, ideal for families.",
            image: "https://placehold.co/100x100?text=Family+Suite"
        },
        {
            id: 4,
            name: "Executive Room",
            date: "June 22, 2023",
            description: "Business-friendly room with a work desk and high-speed internet.",
            image: "https://placehold.co/100x100?text=Executive+Room"
        },
        {
            id: 5,
            name: "Ocean View Deluxe",
            date: "June 25, 2023",
            description: "Stunning room with breathtaking ocean views and luxury furnishings.",
            image: "https://placehold.co/100x100?text=Ocean+View"
        },
        {
            id: 6,
            name: "Budget Single",
            date: "June 28, 2023",
            description: "Affordable single room with all essential amenities for solo travelers.",
            image: "https://placehold.co/100x100?text=Budget+Single"
        },
        {
            id: 7,
            name: "Penthouse Suite",
            date: "July 1, 2023",
            description: "Exclusive top-floor suite with private terrace and jacuzzi.",
            image: "https://placehold.co/100x100?text=Penthouse"
        },
        {
            id: 8,
            name: "Garden View Room",
            date: "July 3, 2023",
            description: "Peaceful room overlooking our beautifully landscaped gardens.",
            image: "https://placehold.co/100x100?text=Garden+View"
        },
        {
            id: 9,
            name: "Accessible Room",
            date: "July 5, 2023",
            description: "Specially designed room with accessibility features for all guests.",
            image: "https://placehold.co/100x100?text=Accessible"
        },
        {
            id: 10,
            name: "Honeymoon Suite",
            date: "July 8, 2023",
            description: "Romantic suite with champagne service and couples' spa treatment.",
            image: "https://placehold.co/100x100?text=Honeymoon"
        },
        {
            id: 11,
            name: "Standard Twin",
            date: "July 10, 2023",
            description: "Comfortable room with two single beds, suitable for friends or colleagues.",
            image: "https://placehold.co/100x100?text=Standard+Twin"
        },
        {
            id: 12,
            name: "Pet-Friendly Room",
            date: "July 12, 2023",
            description: "Welcoming room for guests traveling with their furry companions.",
            image: "https://placehold.co/100x100?text=Pet+Friendly"
        },
        {
            id: 13,
            name: "Eco-Green Room",
            date: "July 15, 2023",
            description: "Environmentally conscious room with sustainable features and organic linens.",
            image: "https://placehold.co/100x100?text=Eco+Green"
        }
    ];
 

    const ListHotelComponent = () => {
        const [data, setData] = useState(generateData());
        const [visibleData, setVisibleData] = useState(data.slice(0, 2));
        const [isModalVisible, setIsModalVisible] = useState(false);
        const [editingItem, setEditingItem] = useState(null);
        const [form] = Form.useForm();

        const onLoadMore = () => {
            const newVisibleData = data.slice(0, visibleData.length + 2);
            setVisibleData(newVisibleData);
        };

        const handleEdit = (item) => {
            setEditingItem(item);
            form.setFieldsValue(item);
            setIsModalVisible(true);
        };

        const handleSave = () => {
            form.validateFields().then(values => {
                const newData = data.map(item => 
                    item.id === editingItem.id ? { ...item, ...values } : item
                );
                setData(newData);
                setVisibleData(newData.slice(0, visibleData.length));
                setIsModalVisible(false);
                setEditingItem(null);
            });
        };

        const handleDelete = (id) => {
            const newData = data.filter((item) => item.id !== id);
            setData(newData);
            setVisibleData(newData.slice(0, visibleData.length));
        };

        const loadMore = visibleData.length < data.length && (
            <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
                <Button onClick={onLoadMore}>Load more</Button>
            </div>
        );

        return (
            <div className="hotel-list">
                <h1 style={{fontSize: '24px', marginBottom: '4px'}}>List of Hotel Rooms</h1>
                <p style={{color: '#9ca3af', marginBottom: '20px'}}>Diverse selection of rooms for every need</p>
                <List
                    itemLayout="horizontal"
                    loadMore={loadMore}
                    dataSource={visibleData}
                    renderItem={(item) => (
                        <List.Item
                            className="fade-in"
                            actions={[
                                <Button 
                                    key="edit" 
                                    type="text" 
                                    icon={<i className={editingItem && editingItem.id === item.id ? "fas fa-save" : "fas fa-pencil-alt"} />} 
                                    onClick={() => editingItem && editingItem.id === item.id ? handleSave() : handleEdit(item)}
                                />,
                                <Button key="delete" type="text" icon={<i className="fas fa-trash" />} onClick={() => handleDelete(item.id)} />
                            ]}
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                className="room-image"
                            />
                            <List.Item.Meta
                                title={item.name}
                                description={
                                    <>
                                        <div>{item.date}</div>
                                        <div>{item.description}</div>
                                    </>
                                }
                            />
                        </List.Item>
                    )}
                />
                <Modal
                    title="Edit Hotel Room"
                    visible={isModalVisible}
                    onOk={handleSave}
                    onCancel={() => {
                        setIsModalVisible(false);
                        setEditingItem(null);
                    }}
                >
                    <Form form={form} layout="vertical">
                        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="date" label="Date" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item name="image" label="Image URL" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    };