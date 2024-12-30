import type { MenuItem as MenuItemType } from "../types";

type MenuItemProps = {
    item: MenuItemType; // Aquí usas el tipo renombrado
};

export const MenuItem = ({ item }: MenuItemProps) => {
    return (
        <button className="border-2 border-teal-400 w-full p-3 hover:bg-teal-300  flex justify-between transform transition-transform duration-500 hover:scale-110">
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    );
};
