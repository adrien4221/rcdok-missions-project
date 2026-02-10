import { ChevronDown, ArrowRight } from 'lucide-react';

interface Props {
  onBack: () => void
  onNext: () => void
}

export default function StepService({ onNext, onBack }: Props) {
  return (
    <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Service Selection</h2>
        <p className="text-sm text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-6">
        {/* Ministry Select */}
        <div>
          <label className="block text-xs text-gray-600 mb-2">Select Ministry</label>
          <div className="relative">
            <select className="w-full border border-gray-200 bg-white p-3 rounded-md text-sm text-gray-800 focus:ring-1 focus:ring-blue-500 outline-none appearance-none">
              <option>Busog Puso</option>
              <option>Medical</option>
            </select>
            <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Parish Select */}
        <div>
          <label className="block text-xs text-gray-600 mb-2">Select Preferred Parish</label>
          <div className="relative">
            <select className="w-full border border-gray-200 bg-white p-3 rounded-md text-sm text-gray-800 focus:ring-1 focus:ring-blue-500 outline-none appearance-none">
              <option>Selected Parish</option>
              <option>Parish A</option>
            </select>
            <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Concern Textarea */}
        <div>
          <label className="block text-xs text-gray-600 mb-2">Briefly describe your concern ...</label>
          <textarea
            className="w-full border-b border-gray-200 focus:border-blue-600 outline-none py-2 text-sm resize-none h-24 placeholder:text-gray-300"
            placeholder="Type here..."
          />
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={onNext}
          className="w-full bg-[#005FAC] hover:bg-blue-700 text-white py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-all shadow-md"
        >
          Go Next <ArrowRight size={16} />
        </button>
        <button 
            onClick={onBack}
            className="w-full mt-3 text-gray-400 text-xs hover:text-gray-600"
        >
            Back
        </button>
      </div>
    </div>
  );
};
