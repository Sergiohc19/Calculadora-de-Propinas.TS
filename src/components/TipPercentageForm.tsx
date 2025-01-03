import type { Dispatch, SetStateAction } from "react";

const tipOptions = [
  {
    id: "tip-05",
    value: 0.05,
    label: "5%",
  },
  {
    id: "tip-10",
    value: 0.10,
    label: "10%",
  },
  {
    id: "tip-15",
    value: 0.15,
    label: "15%",
  },
  {
    id: "tip-20",
    value: 0.20,
    label: "20%",
  },
  {
    id: "tip-25",
    value: 0.25,
    label: "25%",
  },
];

type TipPercentageFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>


    
}

export default function TipPercentageForm({setTip}: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form action="">
        {tipOptions.map((tip) => (
          <div key={tip.id} className="flex gap-2">
            <label htmlFor={tip.id}>{tip.label}</label>
            <input
              id={tip.id}
              type="radio"
              name="name"
              value={tip.value}
              onChange={e => setTip(+e.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
