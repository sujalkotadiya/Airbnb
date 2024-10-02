
const ScreenPage = ({ props }) => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">Past experiences</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {props.map((el, i) => (
                    <div key={i} className="relative group">
                        <img
                            src={el.image}
                            alt={el.title}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-700"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 8a4 4 0 10-8 0 4 4 0 008 0zM12 12v6m4-2H8"
                                />
                            </svg>
                        </div>
                        <div className="mt-4 px-1">
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-lg">{el.title}</h3>
                                <p className="text-gray-800">Rating: <span className="font-semibold">{el.rating}</span></p>
                            </div>
                            <p className="text-gray-600">{el.description}</p>
                            <p className="text-gray-800">Price: <span className="text-green-600 font-semibold">₹{el.price}</span> / night</p>
                            <p className="text-gray-600">Available: {el.dates}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default ScreenPage