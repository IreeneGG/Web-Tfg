export function NavBar() {
    return (
        <nav className="bg-[#2F2F2F] bg-cover bg-center h-1/4 flex flex-col justify-center items-center" style={{backgroundImage: "url('/fondo1.jpeg')", backgroundBlendMode: 'soft-light'}}>
            <div className="container mx-auto text-center mb-8">
                <h1 className="text-white text-7xl">Brot</h1>
            </div>
            <div className="flex justify-center mt-3">
                <button className="text-white bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out mr-2">Botón 1</button>
                <button className="text-white bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">Botón 2</button>
            </div>
        </nav>
    );
}
