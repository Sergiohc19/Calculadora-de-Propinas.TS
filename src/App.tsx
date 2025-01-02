import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";
import { UseOrder } from "./hooks/useOrder";

function App() {
  const { order, addItem } = UseOrder();

  return (
    <>
      <header className="bg-gradient-to-br from-teal-700 from-10% via-teal-500 via-30% to-teal-300 to-90% py-5">
        <h1 className="text-center text-5xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-3xl font-black">Menú</h2>
          <div className="space-y-3 my-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 mx-6 rounded-lg space-y-10">
          <OrderContents order={order} />
        </div>
      </main>
    </>
  );
}

export default App;
