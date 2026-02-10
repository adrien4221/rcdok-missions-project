'use client'

import { useState } from 'react'
import StepPersonal from '@/components/form/StepPersonal'
import StepService from '@/components/form/StepService'
import StepSchedule from '@/components/form/StepSchedule'
import ProgressBar from '@/components/layout/ProgressBar'

export default function RequestPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-6 flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-200 rounded" /> {/* logo placeholder */}
        <h1 className="text-xl font-semibold">Request Assistance</h1>
      </header>

      {/* Main */}
      <main className="flex-1 flex justify-center items-center" 
      style={{ paddingBottom: '80px' }}>
        {step === 1 && 
          <StepPersonal 
            onNext={() => setStep(2)} 

          />}
        {step === 2 && (
          <StepService
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        )}
        {step === 3 && <StepSchedule onBack={() => setStep(2)} />}
      </main>

      {/* Progress */}
      <ProgressBar step={step} />
    </div>
  )
}
