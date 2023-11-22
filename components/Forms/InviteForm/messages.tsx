'use client'

import { useSearchParams } from 'next/navigation'

export default function Messages() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const message = searchParams.get('message')
  return (
    <>
      {error && (
        <p className="errorMessageForm">
          {error}
        </p>
      )}
      {message && (
        <p className="errorMessageForm">
          {message}
        </p>
      )}
    </>
  )
}
