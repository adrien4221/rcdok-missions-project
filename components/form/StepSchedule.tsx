'use client';

import { useState } from 'react';
import { ChevronDown, CheckCircle, Calendar, Clock, Phone, Mail, ArrowRight } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export default function StepSchedule({ onBack }: Props) {
  const [date, setDate] = useState('');
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Mock available time slots
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", 
    "01:00 PM", "02:30 PM", "04:00 PM"
  ];

  return (
    <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500 mb-20">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Schedule Visit</h2>
        <p className="text-slate-500 text-sm mt-2">
          Select a convenient time for us to meet.
        </p>
      </div>

      {/* White Card Container */}
      <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 space-y-8">
        
        {/* --- CONTACT INFO SECTION --- */}
        <div className="space-y-5">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                <Phone size={18} className="text-blue-600" />
                <h3 className="font-semibold text-gray-700">Contact Details</h3>
            </div>
            
            {/* Phone Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1">Phone Number</label>
              <div className="relative group">
                {/* Prefix Icon/Text */}
                <div className="absolute left-0 top-0 bottom-0 px-4 bg-gray-100 border-r border-gray-200 rounded-l-lg flex items-center text-gray-600 text-sm font-medium">
                  +63
                </div>
                <input
                  type="tel"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-16 pr-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                  placeholder="999 999 9999"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1">Email Address</label>
              <div className="relative">
                 <input
                    type="email"
                    placeholder="alex@example.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                  />
                  <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
              </div>
            </div>
        </div>

        {/* --- DATE & TIME SECTION --- */}
        <div className="space-y-5">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                <Calendar size={18} className="text-blue-600" />
                <h3 className="font-semibold text-gray-700">Date & Time</h3>
            </div>

            {/* Native Date Input */}
            <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1">Select Date</label>
                <input 
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 font-medium focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all cursor-pointer"
                />
            </div>

            {/* Time Pills */}
            <div>
                <label className="block text-xs font-semibold text-gray-500 mb-2 ml-1 flex items-center gap-2">
                    <Clock size={12} className="text-blue-600"/> Available Slots
                </label>
                
                <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                        <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`
                                py-2 px-2 text-xs rounded-lg border transition-all font-medium
                                ${selectedTime === time 
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-105' 
                                    : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-600'}
                            `}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            </div>
        </div>

      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex flex-col gap-3">
        <button
          onClick={() => alert(`Submitted!\nDate: ${date}\nTime: ${selectedTime}`)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-900/20 active:scale-95 group"
        >
          Confirm Appointment <CheckCircle size={20} className="group-hover:scale-110 transition-transform"/>
        </button>
        
        <button 
            onClick={onBack}
            className="w-full py-3 rounded-xl text-gray-500 text-sm font-medium hover:bg-gray-100 hover:text-gray-700 transition-colors"
        >
            Back to Services
        </button>
      </div>
    </div>
  );
}