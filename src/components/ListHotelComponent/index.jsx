import { useState } from "react";
import "./styles.scss";
import { List, Button, Input, Image, Modal, Form } from "antd";

const generateData = () => [
    {
        id: 1,
        name: "Burj Al Arab",
        date: "June 15, 2023",
        description: "Iconic sail-shaped luxury hotel known for its ultra-luxurious suites, private beach, and helicopter pad.",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/457389536.jpg?k=1b5b93930a67d2372178da9df3c090ec47fb1f5622f5664dde18c4362f31b355&o="
    },
    {
        id: 2,
        name: "The Plaza",
        date: "June 18, 2023",
        description: "A historic 5-star hotel near Central Park, famous for its opulent interiors and celebrity guests.",
        image: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_267,q_40,w_400/hotelier-images/e9/38/0fec3170b7a2b7edda5ff2b5825abbd5fb697bbbea4b8c981ae3fffdc8b4.jpeg"
    },
    {
        id: 3,
        name: "Marina Bay Sands",
        date: "June 20, 2023",
        description: "Recognized for its rooftop infinity pool, this hotel offers breathtaking city skyline views.",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/611676302.jpg?k=f7da568223801ba901ea5ded323f55346bcb1484a6e8dd9202ee63ebe1197990&o="
    },
    {
        id: 4,
        name: "Ritz Paris",
        date: "June 22, 2023",
        description: "A legendary luxury hotel that has hosted famous figures like Coco Chanel and Ernest Hemingway.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/22/6a/prestige-suite-windsor.jpg?w=900&h=500&s=1"
    },
    {
        id: 5,
        name: "Taj Lake Palace ",
        date: "June 25, 2023",
        description: "A stunning white-marble hotel floating on Lake Pichola, offering a romantic and royal experience.",
        image: "https://www.historyhit.com/app/uploads/bis-images/5165600/taj-lake-palace-udaipur-788x537.jpg"
    },
    {
        id: 6,
        name: "Four Seasons Bora Bora ",
        date: "June 28, 2023",
        description: "Famous for its overwater bungalows and stunning turquoise lagoon, a paradise for honeymooners.",
        image: "https://cdn.iris-etourism.io/uploads/tahiti_tourisme/b10/4-173-15904004.webp"
    },
    {
        id: 7,
        name: "The Ritz-Carlton",
        date: "July 1, 2023",
        description: "Occupying the top floors of a skyscraper, this hotel provides incredible views of Mount Fuji.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/02/c6/07/grande-lakes-elegance.jpg?w=900&h=500&s=1"
    },
    {
        id: 8,
        name: "Bellagio",
        date: "July 3, 2023",
        description: "Known for its spectacular fountain show, luxurious casino, and world-class entertainment.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/4f/e3/77/bellagio.jpg?w=900&h=500&s=1"
    },
    {
        id: 9,
        name: "The Peninsula Hong Kong",
        date: "July 5, 2023",
        description: "A symbol of elegance and heritage, featuring Rolls-Royce transfers and stunning harbor views.",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/The_Peninsula_Hong_Kong_%28full_view%29.jpg"
    },
    {
        id: 10,
        name: "Aman Venice",
        date: "July 8, 2023",
        description: "A former Venetian palace turned luxury hotel, located on the Grand Canal with a romantic atmosphere.",
        image: "https://www.aman.com/sites/default/files/2023-05/aman-venice-exterior.jpg"
    },
    {
        id: 11,
        name: "Necker Island",
        date: "July 10, 2023",
        description: "A private island resort owned by Richard Branson, offering an exclusive tropical getaway.",
        image: "https://media.cntraveler.com/photos/65cc003f81cef2a4b71b47a2/16:9/w_1920,c_limit/Necker%20Island__MG_3402_Elders_Temple.jpg"
    },
    {
        id: 12,
        name: "Icehotel",
        date: "July 12, 2023",
        description: "Completely rebuilt every winter using ice and snow, offering a truly unique Arctic stay.",
        image: "https://img.oastatic.com/img2/43759288/max/variant.jpg?revbust=c110f1c3"
    },
    {
        id: 13,
        name: "Giraffe Manor",
        date: "July 15, 2023",
        description: "A boutique hotel where guests can share breakfast with friendly, roaming giraffes.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/61/75/47/aerial-view-of-giraffe.jpg?w=1000&h=-1&s=1"
    }
];

const ListHotelComponent = () => {
    const [data, setData] = useState(generateData());
    const [visibleData, setVisibleData] = useState(data.slice(0, 2));
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [
        editingItem, setEditingItem] = useState(null);
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

export default ListHotelComponent;