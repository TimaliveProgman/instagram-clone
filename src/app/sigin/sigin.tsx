import Link from 'next/link';
import * as React from 'react';


export interface ISigInProps {
}

export default function SigIn (props: ISigInProps) {
  return (
    <div>
      <Link href="/auth">link to auth</Link>
    </div>
  );
}
