import mongoose from 'mongoose';
import { planNames } from '../shared/plans.js';

const limits = { name: 100, email: 200, business: 150, goals: 2000 };
export function validateEnquiry(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return { error: 'Please provide an enquiry object.' };
  const allowed = [...Object.keys(limits), 'plan'];
  if (Object.keys(body).some(key => !allowed.includes(key))) return { error: 'The enquiry contains unsupported fields.' };
  const value = {};
  for (const [key, limit] of Object.entries(limits)) {
    if (typeof body[key] !== 'string' || !body[key].trim() || body[key].trim().length > limit) return { error: `Please provide a valid ${key} (maximum ${limit} characters).` };
    value[key] = body[key].trim();
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email)) return { error: 'Please provide a valid email address.' };
  if (!planNames.includes(body.plan)) return { error: 'Please select a valid package.' };
  value.email = value.email.toLowerCase();
  value.plan = body.plan;
  return { value };
}

const schema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: limits.name },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: limits.email },
  business: { type: String, required: true, trim: true, maxlength: limits.business },
  goals: { type: String, required: true, trim: true, maxlength: limits.goals },
  plan: { type: String, required: true, enum: planNames },
}, { timestamps: true, bufferCommands: false });
export const Enquiry = mongoose.model('Enquiry', schema);
