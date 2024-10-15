'use client'
import { useState } from 'react'
import { AddDeptForm } from './AddDeptForm'
import { DepartmentsContent } from './DepartmentsContent'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

export const Departments = () => {
  const [showForm, setShowForm] = useState<boolean>(false)
  return (
    <div className="w-full">
      <button
        className="border p-2 rounded-md bg-slate-500 text-white cursor-pointer"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? (
          <div>
            <ArrowBackIosIcon /> Departments
          </div>
        ) : (
          'Add Departments'
        )}
      </button>

      {showForm ? <AddDeptForm /> : <DepartmentsContent />}
    </div>
  )
}
