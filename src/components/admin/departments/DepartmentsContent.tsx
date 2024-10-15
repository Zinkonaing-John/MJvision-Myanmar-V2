import { useEffect, useState } from 'react'

// Define the types for a department
interface Department {
  id: number
  name: string
  description: string
  career_path?: string
  license?: string
  created_at: string // Assuming you have a created_at field for date
}

export function DepartmentsContent() {
  const [departments, setDepartments] = useState<Department[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch departments from the API
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch('/api/departments')
        if (!response.ok) {
          throw new Error('Failed to fetch departments')
        }
        const data = await response.json()
        setDepartments(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchDepartments()
  }, [])

  // Handle loading state
  if (loading) {
    return <p className="text-center text-gray-500">Loading departments...</p>
  }

  // Handle error state
  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>
  }

  // If no departments are found
  if (departments.length === 0) {
    return (
      <p className="text-center text-gray-500">No departments available.</p>
    )
  }

  // Function to truncate the description text
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...'
    }
    return text
  }

  // Map through departments and display them
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Departments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((department) => (
          <div
            key={department.id}
            className="flex flex-col justify-between border border-gray-300 rounded-lg p-6 shadow hover:shadow-md transition-shadow relative"
          >
            {/* Top-right Delete and Edit buttons */}
            <div className="flex space-x-2 justify-end">
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm"
                onClick={() => alert(`Delete ${department.name}`)} // Placeholder for delete functionality
              >
                Delete
              </button>
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-sm"
                onClick={() => alert(`Edit ${department.name}`)} // Placeholder for edit functionality
              >
                Edit
              </button>
            </div>

            {/* Department name */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{department.name}</h3>

              {/* Department Description (truncated) */}
              <p className="text-gray-700 mb-4">
                {truncateText(department.description, 100)}
              </p>
            </div>

            {/* Bottom section */}
            <div className="flex justify-between items-center mt-6">
              {/* Display Date */}
              <p className="text-sm text-gray-500">
                Created: {department.created_at}
              </p>

              {/* Read More button */}
              <button
                className="text-blue-500 text-sm font-semibold hover:underline"
                onClick={() => alert(`Read more about ${department.name}`)} // Placeholder for 'Read More' functionality
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
