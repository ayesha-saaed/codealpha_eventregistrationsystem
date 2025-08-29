export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Event Portal</h1>
      <p className="text-lg text-gray-700">
        Register for upcoming events and workshops.
      </p>
      <a
        href="/registration"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go to Registration
      </a>
    </main>
  );
}
