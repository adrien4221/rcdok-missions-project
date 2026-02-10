export default function ProgressBar({ step }: { step: number }) {
  return (
    <div className="h-2 bg-gray-200">
      <div
        className="h-full bg-blue-600 transition-all"
        style={{ width: `${(step / 3) * 100}%` }}
      />
    </div>
  )
}
