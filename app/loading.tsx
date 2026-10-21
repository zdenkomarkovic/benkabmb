export default function LoadingPage() {
  return (
    <div role="status" aria-label="Učitavanje…" className="grid min-h-[50vh] place-items-center">
      <span className="size-10 animate-spin rounded-full border-4 border-line border-t-brand" />
    </div>
  );
}
