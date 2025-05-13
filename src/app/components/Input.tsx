"use client";

import { useState } from "react";
import { z } from "zod";
import Button from "./Button";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export default function EmailSignupForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = emailSchema.safeParse({ email });

    if (!result.success) {
      setError(result.error.errors[0].message);
    } else {
      setError("");
      console.log("Valid email submitted:", email);
    }
  };

  return (
    <div className="relative w-full max-w-[974px] mx-auto mb-12">
      <form
        onSubmit={handleSubmit}
        className="h-[48px] bg-gradient-to-r from-[#757575] to-[#36853a] rounded-lg flex overflow-hidden px-[3px]"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 bg-transparent text-white placeholder-white text-sm sm:text-base focus:outline-none h-full rounded-l-md"
        />
        <Button text="Join" />
      </form>

      {error && (
        <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
      )}
    </div>
  );
}
