"use client";

type Props = {
  error: Error & { digest?: string };
  reset: VoidFunction;
};

export default function Error({ error, reset }: Props): JSX.Element {
  return <>{error.message && error.message}</>;
}
