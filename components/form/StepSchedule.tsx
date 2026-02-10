import { useState } from 'react';
import { ChevronDown, CheckCircle, ChevronLeft, ChevronRight, Calendar, Clock } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export default function StepSchedule({ onBack }: Props) {
  // Local state for interactivity
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Mock data for the calendar (Days 1-30)
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  
  // Mock data for time slots
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", 
    "01:00 PM", "02:30 PM", "04:00 PM"
  ];

  return (
    // Added mb-24 to prevent overlap with the progress bar
    <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500 mb-24">
      
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Schedule Appointment</h2>
        <p className="text-sm text-gray-500 mt-2">
          Select your preferred date and time.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-8">
        
        {/* --- CONTACT INFO SECTION --- */}
        <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                Contact Details
            </h3>
            
            {/* Phone Input */}
            <div>
            <label className="text-xs text-gray-500 mb-1 block">Phone Number</label>
            <div className="flex gap-2 border-b border-gray-200 pb-2">
                <span className="text-sm text-gray-700 flex items-center font-medium">
                +63 <ChevronDown size={14} className="ml-1 text-gray-400"/>
                </span>
                <input
                type="tel"
                className="flex-1 outline-none text-sm text-gray-900 placeholder:text-gray-300"
                placeholder="999 999 9999"
                />
            </div>
            </div>

            {/* Email Input */}
            <div>
            <label className="text-xs text-gray-500 mb-1 block">Email Address</label>
            <input
                type="email"
                placeholder="alex@example.com"
                className="w-full border-b border-gray-200 py-2 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-blue-600 transition-colors"
            />
            </div>
        </div>

        {/* --- CALENDAR SECTION --- */}
        <div>
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                    <Calendar size={14} className="text-blue-600"/> Select Date
                </h3>
                <div className="flex gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded-full text-gray-400"><ChevronLeft size={16}/></button>
                    <span className="text-xs font-medium text-gray-600">October 2023</span>
                    <button className="p-1 hover:bg-gray-100 rounded-full text-gray-400"><ChevronRight size={16}/></button>
                </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 text-center mb-2">
                {['S','M','T','W','T','F','S'].map((d) => (
                    <span key={d} className="text-[10px] text-gray-400 font-bold">{d}</span>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
                {days.map((day) => (
                    <button
                        key={day}
                        onClick={() => setSelectedDate(day)}
                        className={`
                            h-8 w-8 text-xs rounded-full flex items-center justify-center transition-all
                            ${selectedDate === day 
                                ? 'bg-blue-600 text-white shadow-md scale-110' 
                                : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}
                        `}
                    >
                        {day}
                    </button>
                ))}
            </div>
        </div>

        {/* --- TIME SLOTS SECTION --- */}
        <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider flex items-center gap-2 mb-4">
                <Clock size={14} className="text-blue-600"/> Available Time
            </h3>
            
            <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((time) => (
                    <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`
                            py-2 px-3 text-xs rounded-lg border transition-all
                            ${selectedTime === time 
                                ? 'border-blue-600 bg-blue-50 text-blue-700 font-medium ring-1 ring-blue-600' 
                                : 'border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600'}
                        `}
                    >
                        {time}
                    </button>
                ))}
            </div>
        </div>

      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex gap-3">
        <button 
            onClick={onBack}
            className="px-6 py-3 rounded-full text-gray-500 text-sm font-medium hover:bg-gray-100 transition-colors"
        >
            Back
        </button>
        <button
          onClick={() => alert(`Submitted for Date: ${selectedDate}, Time: ${selectedTime}`)}
          className="flex-1 bg-[#005FAC] hover:bg-blue-700 text-white py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-900/20"
        >
          Confirm Appointment <CheckCircle size={16} />
        </button>
      </div>
    </div>
  );
}