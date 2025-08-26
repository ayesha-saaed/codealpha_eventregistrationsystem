"use client";

import { useState } from "react";

export default function EventForm() {
  const [formData, setFormData] = useState({
    eventId: "",
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        setMessage(result.error || "Registration failed");
      } else {
        setMessage("✅ Registered successfully!");
        setFormData({ eventId: "", name: "", email: "" }); // reset form
      }
    } catch (err) {
      setMessage("❌ Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold">Register for Event</h2>

      {/* Event ID (or dropdown later) */}
      <div>
        <label className="block mb-1 font-medium">Event ID</label>
        <input
          type="text"
          name="eventId"
          value={formData.eventId}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      {/* Name */}
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Registering..." : "Register"}
      </button>

      {message && <p className="mt-2 text-center">{message}</p>}
    </form>
  );
}
