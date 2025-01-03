
const tipOptions = [
 
    {
      id: "tip-10",
      value: 0.1,
      label: "10%",
    },
    {
      id: "tip-15",
      value: 0.15,
      label: "15%",
    },
    {
      id: "tip-20",
      value: 0.2,
      label: "20%",
    },
    {
      id: "tip-25",
      value: 0.25,
      label: "25%",
    },
    {
      id: "tip-30",
      value: 0.30,
      label: "30%",
    },
  ];

type TipPercentageFormProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
};

export default function TipPercentageForm({
  setTip,
  tip,
}: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form action="">
        {tipOptions.map((tipOptions) => (
          <div key={tipOptions.id} className="flex gap-2">
            <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
            <input
              id={tipOptions.id}
              type="radio"
              name="name"
              value={tipOptions.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOptions.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
