import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { FormData } from '../types';

export const RsvpForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    isComing: 'yes',
    extraGuests: 0,
    note: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setLoading(true);
    try {
      await addDoc(collection(db, 'rsvps'), {
        name: formData.name,
        isComing: formData.isComing === 'yes',
        extraGuests: Number(formData.extraGuests),
        note: formData.note,
        timestamp: serverTimestamp()
      });
      setSubmitted(true);
      setFormData({ name: '', isComing: 'yes', extraGuests: 0, note: '' });
    } catch (error) {
      console.error("Error signing application: ", error);
      alert("দোস্ত, সার্ভারে একটু সমস্যা হচ্ছে। আবার ট্রাই কর।");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-100 border-2 border-green-500 text-green-900 px-6 py-8 rounded-lg relative text-center font-bengali shadow-md">
        <strong className="font-bold text-2xl block mb-2">সাবাস! দস্তখত জমা হয়েছে।</strong>
        <p className="text-lg">দেখা হবে পানামে!</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 font-bold underline text-green-800 hover:text-green-950"
        >
          আরেকজনের নাম জমা দে
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/80 p-6 md:p-8 rounded-lg shadow-md border-2 border-stone-200 mt-8 font-bengali">
      <h3 className="text-2xl font-bold mb-6 text-center text-panam-brick border-b-2 border-dashed border-gray-300 pb-3">
        এখানে সাইন ইন কর (RSVP)
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        
        <div>
          <label className="block text-panam-charcoal text-lg font-bold mb-2">
            তোর নাম কী?
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="পুরো নাম লেখ..."
            className="w-full bg-white text-gray-900 border-2 border-gray-300 rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-panam-brick focus:ring-1 focus:ring-panam-brick placeholder-gray-500 text-lg"
            required
          />
        </div>

        <div>
          <label className="block text-panam-charcoal text-lg font-bold mb-2">
            যাবি তো?
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <label className="inline-flex items-center p-3 border rounded-md cursor-pointer hover:bg-green-50 transition bg-white">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-green-600 focus:ring-green-500"
                name="isComing"
                value="yes"
                checked={formData.isComing === 'yes'}
                onChange={handleChange}
              />
              <span className="ml-3 text-green-800 font-bold text-lg">ইনশাআল্লাহ্‌ যাচ্ছি!</span>
            </label>
            <label className="inline-flex items-center p-3 border rounded-md cursor-pointer hover:bg-red-50 transition bg-white">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-red-600 focus:ring-red-500"
                name="isComing"
                value="no"
                checked={formData.isComing === 'no'}
                onChange={handleChange}
              />
              <span className="ml-3 text-red-800 font-bold text-lg">না দোস্ত, প্যারা আছে</span>
            </label>
          </div>
        </div>

        {formData.isComing === 'yes' && (
          <div>
            <label className="block text-panam-charcoal text-lg font-bold mb-2">
              সাথে এক্সট্রা কেউ থাকবে? (বউ/জিএফ/ছোট ভাই)
            </label>
            <input
              type="number"
              name="extraGuests"
              min="0"
              max="10"
              value={formData.extraGuests}
              onChange={handleChange}
              className="w-full bg-white text-gray-900 border-2 border-gray-300 rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-panam-brick focus:ring-1 focus:ring-panam-brick text-lg"
            />
            <p className="text-sm text-gray-600 mt-1 font-semibold">সংখ্যায় লেখ (যেমন: 0, 1, 2)</p>
          </div>
        )}

        <div>
          <label className="block text-panam-charcoal text-lg font-bold mb-2">
            কিছু বলার থাকলে বল (ঐচ্ছিক)
          </label>
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            placeholder="সাজিদ/নেহালকে কিছু বলার থাকলে লিখে দে..."
            className="w-full bg-white text-gray-900 border-2 border-gray-300 rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-panam-brick focus:ring-1 focus:ring-panam-brick placeholder-gray-500 h-24 text-lg"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full font-bold text-xl py-4 px-6 rounded shadow-md focus:outline-none transition transform duration-200 border-2 ${
            loading 
              ? 'bg-gray-300 border-gray-400 cursor-not-allowed text-gray-600' 
              : 'bg-panam-brick border-red-900 text-white hover:bg-red-800 hover:-translate-y-1'
          }`}
        >
          {loading ? 'জমা হচ্ছে...' : 'সাইন সাবমিট করলাম'}
        </button>
      </form>
    </div>
  );
};