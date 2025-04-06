import { supabase } from '@/src/lib/supabaseClient'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'Missing department ID' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('departments')
      .delete()
      .eq('id', id)

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