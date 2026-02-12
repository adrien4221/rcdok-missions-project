import { ChevronDown, ArrowRight } from 'lucide-react';

interface Props {
  onNext: () => void;
}

export default function StepPersonal({ onNext }: Props) {
  return (
    <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Main Heading outside the box */}
      <h2 className="text-center text-2xl font-bold mb-6 text-gray-900">Profile info</h2>
      
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-6">
        {/* Sub Heading inside the box */}
        <h3 className="font-semibold text-gray-900 mb-6">Personal data</h3>
        
        {/* First Name Input */}
        <div>
          <label className="block text-xs text-gray-600 mb-1">First Name</label>
          <input
            type="text"
            placeholder="Enter first name"
            className="w-full border-b border-gray-200 py-2 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-blue-600 transition-colors bg-transparent"
          />
        </div>

        {/* Last Name Input */}
        {/*
        <div>
          <label className="block text-xs text-gray-600 mb-1">Last Name</label>
          <input
            type="text"
            placeholder="Enter last name"
            className="w-full border-b border-gray-200 py-2 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-blue-600 transition-colors bg-transparent"
          />
        </div>
          */}
        {/* Two Column Row: Age & Gender */}
        <div className="flex gap-6">
          {/* Age Select */}
          <div className="w-1/2">
            <label className="block text-xs text-gray-600 mb-1">Age</label>
            <div className="relative group">
              <select className="w-full border-b border-gray-200 py-2 text-sm text-gray-900 bg-transparent focus:outline-none focus:border-blue-600 appearance-none cursor-pointer pb-2">
                <option>20</option>
                <option>21</option>
                <option>22</option>
              </select>
              <ChevronDown className="absolute right-0 top-2 text-gray-400 group-hover:text-blue-600 transition-colors pointer-events-none" size={16} />
            </div>
          </div>
          
          {/* Gender Select */}
          <div className="w-1/2">
             <label className="block text-xs text-gray-600 mb-1">Gender</label>
             <div className="relative group">
              <select className="w-full border-b border-gray-200 py-2 text-sm text-gray-900 bg-transparent focus:outline-none focus:border-blue-600 appearance-none cursor-pointer pb-2">
                <option>Female</option>
                <option>Male</option>
              </select>
              <ChevronDown className="absolute right-0 top-2 text-gray-400 group-hover:text-blue-600 transition-colors pointer-events-none" size={16} />
            </div>
          </div>
        </div>

        {/* City Select */}
        <div>
           <label className="block text-xs text-gray-600 mb-1">City of Residence</label>
           <div className="relative group">
            <select className="w-full border-b border-gray-200 py-2 text-sm text-gray-900 bg-transparent focus:outline-none focus:border-blue-600 appearance-none cursor-pointer pb-2">
              <option>Navotas City</option>
              <option>Manila</option>
            </select>
            <ChevronDown className="absolute right-0 top-2 text-gray-400 group-hover:text-blue-600 transition-colors pointer-events-none" size={16} />
          </div>
        </div>

        {/* Barangay Select */}
        <div>
           <label className="block text-xs text-gray-600 mb-1">Barangay</label>
           <div className="relative group">
            <select className="w-full border-b border-gray-200 py-2 text-sm text-gray-900 bg-transparent focus:outline-none focus:border-blue-600 appearance-none cursor-pointer pb-2">
              <option>Kaunlaran</option>
              <option>San Jose</option>
            </select>
            <ChevronDown className="absolute right-0 top-2 text-gray-400 group-hover:text-blue-600 transition-colors pointer-events-none" size={16} />
          </div>
        </div>

      </div>

      {/* Navigation Button */}
      <div className="mt-8">
        <button
          onClick={onNext}
          className="w-full bg-[#005FAC] hover:bg-blue-700 text-white py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-all shadow-md"
        >
          Go Next <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}