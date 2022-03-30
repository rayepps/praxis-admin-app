import PraxisWordmark from "./PraxisWordmark";


export default function Header() {
  return (
    <div className="flex flex-row p-2">
      <div className="flex flex-col items-end">
        <PraxisWordmark height={20} />
        <span className="uppercase text-xs font-bold text-slate-300">
          Admin
        </span>
      </div>
    </div>
  )
}