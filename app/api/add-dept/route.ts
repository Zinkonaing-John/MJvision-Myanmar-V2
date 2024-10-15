// app/api/add-dept/route.ts

import { supabase } from '@/src/lib/supabaseClient'

// Define the structure of the incoming form data
interface FormData {
  name: string
  category: string
  description: string
  career_path?: string
  license?: string
}

// Named export for handling POST requests
export async function POST(request: Request): Promise<Response> {
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
      return new Response(
        JSON.stringify({
          error: 'name, category and Description are required.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
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
      return new Response(
        JSON.stringify({ error: 'Failed to submit the form.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } },
      )
    }

    // Successful insertion response
    return new Response(
      JSON.stringify({ message: 'Form submitted successfully', data }),
      { status: 201, headers: { 'Content-Type': 'application/json' } },
    )
  } catch (error) {
    console.error('Error submitting form:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
