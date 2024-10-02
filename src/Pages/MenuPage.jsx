import { useState } from 'react';
import { Link } from 'react-router-dom'; 

const categories = [
    { name: 'Icons', icon: 'https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png', path: '/icons' },
    { name: 'Amazing views', icon: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg', path: '/amazing-views' },
    { name: 'Amazing pools', icon: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg', path: '/amazing-pools' },
    { name: 'Farms', icon: 'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg', path: '/farms' },
    { name: 'Top of the world', icon: 'https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg', path: '/top-of-the-world' },
    { name: 'Lakefront', icon: 'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg', path: '/lakefront' },
    { name: 'OMG!', icon: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg', path: '/omg' },
    { name: 'Castles', icon: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg', path: '/castles' },
    { name: 'Beachfront', icon: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg', path: '/beachfront' },
    { name: 'Luxe', icon: 'https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg', path: '/luxe' },
    { name: 'Tiny homes', icon: 'https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg', path: '/tiny-homes' },
    { name: 'Cabins', icon: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg', path: '/cabins' },
    { name: 'Treehouses', icon: 'https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg', path: '/treehouses' },
    { name: 'Historical homes', icon: 'https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg', path: '/historical-homes' },
    { name: 'Mansions', icon: 'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg', path: '/mansions' },
    { name: 'Top cities', icon: 'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg', path: '/top-cities' },
    { name: 'Rooms', icon: 'https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg', path: '/rooms' },
    { name: 'Caves', icon: 'https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg', path: '/caves' },
];

const MenuPage = () => {
    const [activeCategory, setActiveCategory] = useState(null); 

    const handleCategoryClick = (categoryName) => {
        setActiveCategory(categoryName); 
    };

    return (
        <div className="flex justify-between space-x-6 overflow-x-auto p-4 bg-gray-100">
            {categories.map((category) => (
                <Link 
                    key={category.name} 
                    to={category.path} 
                    className="flex flex-col items-center w-24"
                    onClick={() => handleCategoryClick(category.name)}
                >
                    <img src={category.icon} alt={category.name} className="w-8 mb-1" />
                    <span 
                        className={`text-gray-600 text-center text-md whitespace-nowrap relative`}
                    >
                        {category.name}
                        {activeCategory === category.name && (
                            <span className="absolute left-0 right-0 bottom-[-5px] h-[2px] bg-gray-800"></span> 
                        )}
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default MenuPage;
