'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, User, MapPin } from 'lucide-react';

interface Props {
  onNext: () => void;
}

export default function StepPersonal({ onNext }: Props) {
  const [age, setAge] = useState(20);

  const handleIncrement = () => setAge(prev => Math.min(prev + 1, 100));
  const handleDecrement = () => setAge(prev => Math.max(prev - 1, 1));

  return (
    // extra spacing for progress bar with margin bottom 20
    <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500 mb-20">
      
      {/* try: more contrast with the background */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Profile Info</h2>
        <p className="text-slate-500 text-sm mt-2">Tell us a bit about yourself.</p>
      </div>
      
      {/* TRY CONTAINER STYLE: 
          1. bg-white
          2. shadow-xl
          3. border-gray-100
      */}
      <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 space-y-6">
        
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
            <User size={18} className="text-blue-600" />
            <h3 className="font-semibold text-gray-700">Personal Data</h3>
        </div>
        
        {/*
            background grey 50 for more contrast with the white background of the card.
        */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1">First Name</label>
          <input
            type="text"
            placeholder="e.g. Alexander"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
          />
        </div>

        <div className="flex gap-5">
          
          {/* age input */}
          <div className="w-1/3">
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1">Age</label>
            <div className="relative group">
              <input 
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-4 pr-8 py-3 text-gray-900 font-medium focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              
              <div className="absolute right-1 top-1 bottom-1 w-6 flex flex-col border-l border-gray-200">
                <button 
                  onClick={handleIncrement}
                  className="flex-1 hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-blue-600 rounded-tr-md transition-colors"
                >
                  <ChevronUp size={12} strokeWidth={3} />
                </button>
                <button 
                   onClick={handleDecrement}
                   className="flex-1 hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-blue-600 rounded-br-md transition-colors"
                >
                  <ChevronDown size={12} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
          
          {/* select gender */}
          <div className="w-2/3">
             <label className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1">Gender</label>
             <div className="relative group">
              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 appearance-none cursor-pointer focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all">
                <option>Female</option>
                <option>Male</option>
                <option>Prefer not to say</option>
              </select>
              <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none group-hover:text-blue-600 transition-colors" size={16} />
            </div>
          </div>
        </div>

        {/* location section label */}
         <div className="flex items-center gap-2 mt-6 mb-2 border-b border-gray-100 pb-2">
            <MapPin size={18} className="text-blue-600" />
            <h3 className="font-semibold text-gray-700">Location</h3>
        </div>

        {/* select city */}
        <div>
           <label className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1">City of Residence</label>
           <div className="relative group">
            <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 appearance-none cursor-pointer focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all">
              <option>Navotas City</option>
              <option>Manila</option>
            </select>
            <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none group-hover:text-blue-600 transition-colors" size={16} />
          </div>
        </div>

        {/* select barangay */}
        <div>
           <label className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1">Barangay</label>
           <div className="relative group">
            <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 appearance-none cursor-pointer focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all">
              <option>Kaunlaran</option>
              <option>San Jose</option>
            </select>
            <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none group-hover:text-blue-600 transition-colors" size={16} />
          </div>
        </div>

      </div>

      <div className="mt-8">
        <button
          onClick={onNext}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-900/20 active:scale-95 group"
        >
          Go Next <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
        </button>
      </div>
    </div>
  );
}