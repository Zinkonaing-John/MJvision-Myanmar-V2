import { supabase } from '@/src/lib/supabaseClient'
import { NextRequest, NextResponse } from 'next/server'

// Define the structure of the incoming form data
interface FormData {
  name: string
  category: string
  description: string
  career_path?: string
  license?: string
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Parse the incoming JSON data
    const {
      name,
      category,
      description,
      career_path,
      license,
    } = (await request.json()) as FormData

    // Basic validation
    if (!name || !description || !category) {
      return NextResponse.json(
        { error: 'name, category and Description are required.' },
        { status: 400 }
      )
    }

    // Insert data into the 'departments' table
    const { data, error } = await supabase
      .from('departments')
      .insert([
        {
          name,
          category,
          description,
          career_path: career_path || null,
          license: license || null,
        },
      ])
      .select()

    // Handle Supabase insertion errors
    if (error) {
      console.error('Supabase Insert Error:', error)
      return NextResponse.json(
        { error: 'Failed to submit the form.' },
        { status: 500 }
      )
    }

    // Successful insertion response
    return NextResponse.json(
      { message: 'Form submitted successfully', data },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting form:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url)
    const column = searchParams.get('column')
    const value = searchParams.get('value')

    if (!column || !value) {
      return NextResponse.json(
        { error: 'Missing column or value' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('departments')
      .delete()
      .eq(column, value)

    if (error) {
      console.error('Supabase Delete Error:', error)
      return NextResponse.json(
        { error: 'Failed to delete the department.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Department deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error deleting department:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}