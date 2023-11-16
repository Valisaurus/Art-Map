'use client'
import { useSearchParams } from 'next/navigation';
import "../../app/globals.css";

export default function Messages() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const message = searchParams.get('message')

  return (
    <>
      {error && (
        <p className="messageError">
          Error: {error}
        </p>
      )}
      {message && (
        <p className="messageSuccess">
         Success: {message}
        </p>
      )}
    </>
  );
}
