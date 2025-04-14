import { useState } from "react";
import "./styles.scss";
import { List, Button, Input, Image, Modal, Form, DatePicker } from "antd";
import moment from "moment";

const generateData = () => [
    {
        id: 1,
        name: "Blue Origin Fams",
        date: moment("2023-06-15"),
        description: "Wooden bungalows built on the water offer a peaceful stay surrounded by nature.",
        image: "https://www.magiclub.com/magiclub/visuals/sri_lanka_sigiriya_hotel_vil_uyana_2.jpg"
    },
    {
        id: 2,
        name: "Ocean Land",
        date: moment("2023-06-18"),
        description: "A luxury resort offering a tropical holiday atmosphere with its wooden design and sun loungers by the pool.",
        image: "https://yourexecutivecompass.com.au/wp-content/uploads/2019/11/edvin-johansson-rlwE8f8anOc-unsplash-768x509.jpg"
    },
    {
        id: 3,
        name: "Stark House",
        date: moment("2023-06-20"),
        description: "An open-air restaurant offering a luxurious and inviting atmosphere with its modern architecture and stylish lighting.",
        image: "https://assets.architecturaldigest.in/photos/600838cb7a5614cb87e4a055/1:1/w_320,c_limit/Geoffrey-Bawa-Sri-Lanka-travel-guide-1366x768.jpg"
    },
    {
        id: 4,
        name: "Vinna Vill",
        date: moment("2023-06-22"),
        description: "This hotel offers comfortable accommodations and unique views, providing a peaceful getaway in the middle of nature.",
        image: "https://lmd.lk/wp-content/uploads/2022/12/4.png"
    },
    {
        id: 5,
        name: "Bobox",
        date: moment("2023-06-25"),
        description: "This charming mountain lodge offers its guests a peaceful experience with its magnificent view and relaxing atmosphere.",
        image: "https://www.namesnack.com/images/house-sitting-business-names-6010x4012-20200728.jpeg?crop=2:1,smart&width=730"
    },
    {
        id: 6,
        name: "Shangri-La",
        date: moment("2023-06-28"),
        description: "A modern hotel with an infinity pool overlooking the city.",
        image: "https://mandarina-colombo-hotel.bookeder.com/data/Photos/450x450/9153/915364/915364879.JPEG"
    },
    {
        id: 7,
        name: "Top View",
        date: moment("2023-07-02"),
        description: "It is a paradise that offers a comfortable holiday experience with its sea view, sunbathing areas and stylish pool.",
        image: "https://fosterandreed.com/wp-content/uploads/2022/12/Foster-Reed-Shangri-La-Colombo-02.jpg"
    },
    {
        id: 8,
        name: "Green Villa",
        date: moment("2023-07-03"),
        description: "This charming hotel offers a peaceful accommodation experience with its lush garden and natural beauty.",
        image: "https://landscapegeelong.com/wp-content/uploads/2022/07/newly-landscaped-home-Geelong-waterfront.jpg"
    },
    {
        id: 9,
        name: "Wodden Pit",
        date: moment("2023-07-05"),
        description: "It is a holiday resort surrounded by nature, offering a peaceful holiday to its guests with its stylish architecture and luxurious pool.",
        image: "https://www.crescentrating.com/images/blog/HWVmS6Qj9fB6SmOAAefx0aUj3Y7epYtz.jpg"
    },
    {
        id: 10,
        name: "Boutiqe",
        date: moment("2023-07-08"),
        description: "The unique hotel with its mountain view offers an accommodation experience intertwined with nature with its modern architecture.",
        image: "https://cz.lakpura.com/cdn/shop/files/LK150098A4-01-E.jpg?v=1690957977"
    },
    {
        id: 11,
        name: "Modern House",
        date: moment("2023-07-10"),
        description: "This hotel room, with its modern and stylish design, is ideal for hosting guests by offering a pleasant atmosphere.",
        image: "https://i0.wp.com/blog.clikalia.com/wp-content/uploads/2019/01/61150_vender-o-alquilar.jpg?resize=860%2C573&ssl=1"
    },
    {
        id: 12,
        name: "Silver Rain",
        date: moment("2023-07-12"),
        description: "This modern hotel offers guests a unique experience, offering a tropical paradise with ocean views and an infinity pool.",
        image: "https://img1.wsimg.com/isteam/ip/bc20b664-7714-495b-88f1-fe415d417b39/beach%20house%2011.jpg/:/cr=t:0%25,l:5.62%25,w:88.77%25,h:100%25/rs=w:365,h:274,cg:true"
    },
    {
        id: 13,
        name: "Cashville",
        date: moment("2023-07-15"),
        description: "Featuring a modern and stylish design, this hotel room offers a comfortable seating area and a fully equipped kitchen option.",
        image: "https://img.netty.immo/esteves/assets/783bb55f1641570220@1280x853.webp"
    }
];

const ListHotelComponent = () => {
    const [data, setData] = useState(generateData());
    const [visibleData, setVisibleData] = useState(data.slice(0, 2));
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [form] = Form.useForm();
    const [addForm] = Form.useForm();

    const [filterByName, setFilterByName] = useState("");
    const [filterByDate, setFilterByDate] = useState(null);
    


    const onLoadMore = () => {
        const newVisibleData = data.slice(0, visibleData.length + 2);
        setVisibleData(newVisibleData);
    };

    const handleEdit = (item) => {
        setEditingItem(item);
        form.setFieldsValue({...item, date: moment(item.date)});
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
    const handleAdd = () => {
        addForm.validateFields().then(values => {
            const newItem = {
                id: data.length + 1,
                ...values,
                image: values.image || "https://placehold.co/100x100?text=No+Image"
            };
            const newData = [...data, newItem];
            setData(newData);
            setVisibleData(newData.slice(0, visibleData.length + 1));
            setIsAddModalVisible(false);
            addForm.resetFields();
        });
    };

    const handleFilter = () => {
        console.log('Filtering with date:', filterByDate ? filterByDate.format('YYYY-MM-DD') : 'none');
        
        const filteredData = data.filter(item => {
            const matchesName = filterByName ? item.name.toLowerCase().includes(filterByName.toLowerCase()) : true;
            
            let matchesDate = true;
            if (filterByDate) {
                try {
                    console.log('Comparing dates:',
                        'Item:', item.date.format('YYYY-MM-DD HH:mm:ss Z'),
                        'Filter:', filterByDate.format('YYYY-MM-DD HH:mm:ss Z'),
                        'Item moment:', item.date.toString(),
                        'Filter moment:', filterByDate.toString());
                        
                    // Compare both as strings and using moment's isSame
                    const itemDateStr = item.date.format('YYYY-MM-DD');
                    const filterDateStr = filterByDate.format('YYYY-MM-DD');
                    const stringMatch = itemDateStr === filterDateStr;
                    
                    const itemDate = moment(item.date).startOf('day');
                    const filterDate = moment(filterByDate).startOf('day');
                    const momentMatch = itemDate.isSame(filterDate);
                    
                    console.log('Comparison results:',
                        'String match:', stringMatch,
                        'Moment match:', momentMatch);
                        
                    matchesDate = stringMatch || momentMatch;
                } catch (e) {
                    console.error('Error comparing dates:', e);
                    matchesDate = false;
                }
            }
            
            return matchesName && matchesDate;
        });
        
        console.log('Filter results:', filteredData);
        setVisibleData(filteredData.length > 0 ? filteredData : []);
    };


    const loadMore = visibleData.length < data.length && (
        <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
            <Button className="onLoadMore" onClick={onLoadMore}>Load more</Button>
        </div>
    );

    return (
        <div className="hotel-list">
            <h1 style={{fontSize: '24px', marginBottom: '4px'}}>List of Hotel Rooms</h1>
            <p style={{color: '#9ca3af', marginBottom: '20px'}}>Diverse selection of rooms for every need</p>
            <div className="add-hotel-button">
                    <Button type="primary" onClick={() => setIsAddModalVisible(true)}>
                        <i className="fas fa-plus"></i> Add New Hotel
                    </Button>
                </div>
                <div className="filter-buttons">
                    <Input 
                        placeholder="Filter by Name" 
                        style={{ marginRight: 8, width: 200 }} 
                        value={filterByName} 
                        onChange={(e) => setFilterByName(e.target.value)} 
                    />
                    <DatePicker
                        placeholder="Filter by Date"
                        style={{ marginRight: 8, width: 200 }}
                        value={filterByDate}
                        onChange={(date) => setFilterByDate(date)}
                    />
                    <Button type="primary" onClick={handleFilter}>
                        <i className="fas fa-filter"></i> Filter
                    </Button>
                </div>
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
                            preview={false}
                        />
                        <List.Item.Meta
                            title={item.name}
                            description={
                                <>
                                    <div>{item.date.format('YYYY-MM-DD')}</div>
                                    <div>{item.description}</div>
                                </>
                            }
                        />
                    </List.Item>
                )}
            />
            <Modal
                title="Edit Hotel Room"
                open={isModalVisible}
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
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item name="image" label="Image URL" rules={[{ required: false }]}>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
            <Modal
                    title="Add New Hotel Room"
                    open={isAddModalVisible}
                    onOk={handleAdd}
                    onCancel={() => setIsAddModalVisible(false)}
                >
                    <Form form={addForm} layout="vertical">
                        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="date" label="Date" rules={[{ required: true }]}>
                            <DatePicker style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item name="image" label="Image URL" rules={[{ required: false }]}>
                            <Input />
                        </Form.Item>
                    </Form>
                </Modal>
        </div>
    );
};

export default ListHotelComponent;