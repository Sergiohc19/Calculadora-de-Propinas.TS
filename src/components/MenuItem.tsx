import type { MenuItem } from "../types";

type MenuItemProps = {
    item: MenuItemType, // Aquí usas el tipo renombrado
    addItem: () => void
};

export const MenuItem = ({ item, addItem }: MenuItemProps) => {
    return (
        <button className="border-2 border-teal-400 w-full p-3 hover:bg-teal-300  flex justify-between transform transition-transform duration-500 hover:scale-110"
        onClick={() => addItem()}
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    );
};
