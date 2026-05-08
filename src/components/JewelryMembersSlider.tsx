"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

export interface TeamMember {
  fullName: string;
  designation: string;
  mobile: string;
  photo?: string; // base64 or URL
}

interface KeyMembersSliderProps {
  members: TeamMember[];
  /** Called when user adds/edits members */
  onChange?: (members: TeamMember[]) => void;
  /** Read-only display mode (no edit controls) */
  readOnly?: boolean;
}

const EMPTY_MEMBER: TeamMember = {
  fullName: "",
  designation: "",
  mobile: "",
  photo: undefined,
};

const KeyMembersSlider: React.FC<KeyMembersSliderProps> = ({
  members,
  onChange,
  readOnly = false,
}) => {
  const [current, setCurrent] = useState(0);

  const safeMembers = members.length > 0 ? members : [{ ...EMPTY_MEMBER }];
  const total = safeMembers.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const handleField = (
    field: keyof TeamMember,
    value: string
  ) => {
    if (!onChange) return;
    const updated = safeMembers.map((m, i) =>
      i === current ? { ...m, [field]: value } : m
    );
    onChange(updated);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const updated = safeMembers.map((m, i) =>
        i === current ? { ...m, photo: reader.result as string } : m
      );
      onChange(updated);
    };
    reader.readAsDataURL(file);
  };

  const addMember = () => {
    if (!onChange || safeMembers.length >= 5) return;
    const updated = [...safeMembers, { ...EMPTY_MEMBER }];
    onChange(updated);
    setCurrent(updated.length - 1);
  };

  const removeMember = () => {
    if (!onChange || safeMembers.length <= 1) return;
    const updated = safeMembers.filter((_, i) => i !== current);
    onChange(updated);
    setCurrent(Math.min(current, updated.length - 1));
  };

  const member = safeMembers[current];

  return (
    <div className="bg-white border border-[#015D67]/15 rounded-2xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-[#015D67] px-4 py-3 flex items-center justify-between">
        <div>
          <p className="text-white font-semibold text-sm">Key Team Members</p>
          <p className="text-white/60 text-[11px]">
            Who will be called on stage at Gala Night (min 1, max 5)
          </p>
        </div>
        <div className="flex items-center gap-2 text-white text-sm font-medium">
          <button
            onClick={prev}
            disabled={total <= 1}
            className="p-1 rounded-full hover:bg-white/20 disabled:opacity-30 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="min-w-[3ch] text-center text-xs">
            {current + 1}/{total}
          </span>
          <button
            onClick={next}
            disabled={total <= 1}
            className="p-1 rounded-full hover:bg-white/20 disabled:opacity-30 transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Slide dots */}
      {total > 1 && (
        <div className="flex gap-1 justify-center py-2 bg-[#015D67]/5 border-b border-[#015D67]/10">
          {safeMembers.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${
                i === current
                  ? "bg-[#015D67] w-5 h-2"
                  : "bg-[#015D67]/30 w-2 h-2 hover:bg-[#015D67]/50"
              }`}
            />
          ))}
        </div>
      )}

      {/* Member card */}
      <div className="p-5 flex gap-4 items-start">
        {/* Photo */}
        <div className="shrink-0">
          <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[#015D67]/20 bg-gray-100 flex items-center justify-center">
            {member.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={member.photo}
                alt={member.fullName || "Member photo"}
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="h-7 w-7 text-gray-400" />
            )}
          </div>
          {!readOnly && (
            <label className="mt-1.5 flex justify-center cursor-pointer">
              <span className="text-[10px] text-[#015D67] underline underline-offset-2 hover:no-underline">
                {member.photo ? "Change" : "Upload photo"}
              </span>
              <input
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={handlePhotoUpload}
              />
            </label>
          )}
        </div>

        {/* Fields */}
        <div className="flex-1 grid grid-cols-1 gap-2.5">
          <Field
            label="Full Name"
            value={member.fullName}
            placeholder="e.g. Dr. Ramesh Kumar"
            onChange={(v) => handleField("fullName", v)}
            readOnly={readOnly}
          />
          <Field
            label="Designation"
            value={member.designation}
            placeholder="e.g. Managing Director"
            onChange={(v) => handleField("designation", v)}
            readOnly={readOnly}
          />
          <Field
            label="Mobile Number"
            value={member.mobile}
            placeholder="10-digit mobile"
            onChange={(v) => handleField("mobile", v)}
            readOnly={readOnly}
            type="tel"
          />
        </div>
      </div>

      {/* Add / Remove controls */}
      {!readOnly && (
        <div className="flex gap-2 px-5 pb-4">
          <button
            onClick={addMember}
            disabled={safeMembers.length >= 5}
            className="flex-1 py-1.5 rounded-lg border border-[#015D67]/40 text-[#015D67] text-xs font-semibold hover:bg-[#015D67]/5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            + Add Member
          </button>
          <button
            onClick={removeMember}
            disabled={safeMembers.length <= 1}
            className="px-4 py-1.5 rounded-lg border border-red-200 text-red-500 text-xs font-semibold hover:bg-red-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

// ── Tiny field component ──────────────────────────────────────────────────────
const Field: React.FC<{
  label: string;
  value: string;
  placeholder: string;
  onChange: (v: string) => void;
  readOnly: boolean;
  type?: string;
}> = ({ label, value, placeholder, onChange, readOnly, type = "text" }) => (
  <div>
    <label className="block text-[10px] font-semibold text-gray-500 mb-0.5 uppercase tracking-wide">
      {label}
    </label>
    {readOnly ? (
      <p className="text-sm text-gray-800">{value || <span className="text-gray-400 italic">Not provided</span>}</p>
    ) : (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#015D67]/30 focus:border-[#015D67]/50 transition-all"
      />
    )}
  </div>
);

export default KeyMembersSlider;