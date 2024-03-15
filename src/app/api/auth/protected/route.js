// NEXT
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

// PROJECT IMPORTS
import { authOptions } from 'utils/authOptions';

// ==============================|| NEXT AUTH - ROUTES  ||============================== //

export async function GET() {
  const session = await getServerSession(authOptions);
  if (session) {
    return NextResponse.json({ protected: true });
  } else {
    return NextResponse.json({ protected: false });
  }
}
