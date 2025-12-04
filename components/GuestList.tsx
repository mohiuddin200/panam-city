import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { Guest } from '../types';

export const GuestList: React.FC = () => {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'rsvps'), orderBy('timestamp', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const guestData: Guest[] = [];
      snapshot.forEach((doc) => {
        guestData.push({ id: doc.id, ...doc.data() } as Guest);
      });
      setGuests(guestData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="text-center p-8 font-bengali text-xl text-gray-600">লোড হচ্ছে...</div>;
  }

  const goingCount = guests.filter(g => g.isComing).length;
  const totalPeople = guests.reduce((acc, curr) => curr.isComing ? acc + 1 + (curr.extraGuests || 0) : acc, 0);

  return (
    <div className="mt-16 font-bengali">
      <h2 className="text-3xl font-bold text-center text-panam-brick mb-8 border-b-2 border-dashed border-gray-400 pb-4 inline-block w-full">
        যারা যারা সাইন করেছে
      </h2>
      
      {/* High Visibility Summary Box */}
      <div className="bg-amber-100 rounded-lg p-6 mb-8 text-center shadow-md border-2 border-amber-300">
        <p className="text-xl text-gray-900 font-semibold">
          মোট কনফার্ম করেছে: <span className="font-extrabold text-panam-brick text-4xl mx-2">{goingCount}</span> জন
        </p>
        <div className="mt-2 text-md text-gray-800 font-medium">
          (এক্সট্রা মানুষসহ মোট যাত্রী: <span className="font-bold">{totalPeople}</span> জন)
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {guests.map((guest) => (
          <div 
            key={guest.id} 
            className={`p-5 rounded-lg shadow-sm border-l-4 relative overflow-hidden transition hover:shadow-md ${
              guest.isComing 
                ? 'bg-white border-l-green-600 border-t border-r border-b border-gray-200' 
                : 'bg-gray-100 border-l-gray-500 border-t border-r border-b border-gray-200 opacity-80'
            }`}
          >
             <div className={`absolute top-0 right-0 px-3 py-1 text-xs font-bold text-white rounded-bl-lg ${guest.isComing ? 'bg-green-600' : 'bg-gray-600'}`}>
                {guest.isComing ? 'যাচ্ছে' : 'যাবে না'}
             </div>

            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-inner ${guest.isComing ? 'bg-panam-brick' : 'bg-gray-500'}`}>
                {guest.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-900">{guest.name}</h4>
                {guest.isComing && guest.extraGuests > 0 && (
                  <span className="inline-block mt-1 text-xs font-bold bg-amber-200 text-amber-900 px-2 py-1 rounded-full border border-amber-300">
                    +{guest.extraGuests} জন সাথে
                  </span>
                )}
              </div>
            </div>
            
            {guest.note && (
              <div className="mt-4 text-sm text-gray-800 bg-gray-50 p-3 rounded italic border border-gray-200">
                "{guest.note}"
              </div>
            )}
          </div>
        ))}

        {guests.length === 0 && (
          <div className="col-span-2 text-center text-gray-500 py-12 italic text-lg border-2 border-dashed border-gray-300 rounded-lg">
            এখনও কেউ সাইন করে নাই। তুই প্রথম হ!
          </div>
        )}
      </div>
    </div>
  );
};