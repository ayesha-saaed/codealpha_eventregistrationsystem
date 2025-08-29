"use client";
import { useState } from "react";
import API from "@/lib/api"; // axios instance
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegistrationPage() {
  const [form, setForm] = useState({ name: "", email: "", eventId: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await API.post("/registrations/register", form);

      if (res.data?.success) {
        setMessage("✅ Registered successfully!");
      } else {
        setMessage("⚠️ Something went wrong");
      }
    } catch (error: unknown) {
      // 👇 Safe type check
      if (error && typeof error === "object" && "response" in error) {
        const err = error as { response?: { data?: { error?: string } } };
        setMessage("❌ Error: " + (err.response?.data?.error || "Failed"));
      } else {
        setMessage("❌ Unknown error");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <Input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Input
        placeholder="Event ID"
        value={form.eventId}
        onChange={(e) => setForm({ ...form, eventId: e.target.value })}
      />
      <Button type="submit">Register</Button>
      {message && <p>{message}</p>}
    </form>
  );
}
