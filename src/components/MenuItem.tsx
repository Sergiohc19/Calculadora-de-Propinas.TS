import type { MenuItem } from "../types/";

type MenuItemProps = {
    item: MenuItem, // Aquí usas el tipo renombrado
    addItem: (item: MenuItem) => void
};

export default function MenuItem({ item, addItem }: MenuItemProps)  {
    
    return (
        <button className="border-2 border-teal-400 w-full p-3 hover:bg-teal-300  flex justify-between transform transition-transform duration-500 hover:scale-110"
        onClick={() => addItem(item)}
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    );
};
