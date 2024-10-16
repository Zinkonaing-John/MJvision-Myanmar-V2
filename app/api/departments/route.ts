import { supabase } from '@/src/lib/supabaseClient'
import { NextResponse } from 'next/server'

// Define a handler for GET requests
export async function GET() {
  try {
    // Fetch data from the 'departments' table
    const { data, error } = await supabase.from('departments').select('*')

    // Handle errors from Supabase
    if (error) {
      console.error('Error fetching departments:', error)
      return NextResponse.json(
        { error: 'Failed to fetch departments' },
        { status: 500 },
      )
    }

    // Return the fetched data as JSON
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
