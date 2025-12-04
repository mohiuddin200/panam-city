import React from 'react';

export const ApplicationLetter: React.FC = () => {
  return (
    <div className="font-bengali text-panam-charcoal leading-relaxed space-y-5">
      <div className="text-center border-b-4 border-double border-panam-brick/30 pb-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-panam-brick">জরুরী নোটিশ: পানাম সিটি অভিযান - ২০২৫</h1>
        <p className="text-md font-semibold text-gray-600 mt-2">তারিখ: ০৪ ডিসেম্বর, ২০২৫</p>
      </div>

      <div className="space-y-4 text-lg md:text-xl">
        <p className="font-bold text-xl">বরাবর,</p>
        <p>আমার কলিজার টুকরা দোস্তগণ,</p>
        
        <p>
          বিষয়: <span className="font-bold text-panam-brick underline decoration-wavy decoration-orange-400">আগামীকাল শুক্রবার পানাম সিটি ট্যুরের জন্য চূড়ান্ত আবেদন।</span>
        </p>

        <p>
          জনাব,
        </p>
        <p>
          সবিনয় নিবেদন এই যে, আমি <strong>মহিউদ্দিন</strong>, আপনাদের সকলের অবগতির জন্য জানাচ্ছি যে, জীবনটা প্যারা আর প্যাঁচে ভরা। এই প্যারার মাঝে একটু শান্তির বাতাস খেতে আগামীকাল <strong>৫ই ডিসেম্বর, ২০২৫ (রোজ শুক্রবার)</strong> আমরা ওল্ড ঢাকার ঐতিহ্যবাহী <strong>পানাম সিটিতে</strong> যাওয়ার প্ল্যান করেছি।
        </p>
        
        <p>
          যেহেতু আগামীকাল শুক্রবার এবং সবারই অফিস/ক্লাস বন্ধ, তাই "বিজি আছি" বা "আম্মু যেতে দিবে না" টাইপ অজুহাত গ্রহণযোগ্য হবে না। 
        </p>

        <div className="bg-orange-50 p-6 rounded-lg border-l-8 border-panam-brick my-6 shadow-sm">
          <p className="font-bold text-panam-brick text-xl mb-2">বিশেষ দ্রষ্টব্য:</p>
          <ul className="list-disc list-inside text-gray-900 space-y-1">
            <li><strong>সাজিদ</strong> এবং <strong>নেহাল</strong> - তোরা দুইজন এই ট্যুরের ভি.আই.পি (VIP)। তোরা মিস দিলে খবর আছে।</li>
            <li>সাথে ভাবি বা অন্য বন্ধু-বান্ধব থাকলে নির্দ্বিধায় এড করতে পারিস।</li>
            <li>খরচপাতি যার যার, আনন্দ সবার। (তবে বিরিয়ানি খাওয়াইলে না করব না)।</li>
          </ul>
        </div>

        <p>
          অতএব, হুজুরের নিকট আকুল আবেদন, নিচে আপনাদের মহামূল্যবান দস্তখত দিয়ে কনফার্ম করুন যে আপনারা যাচ্ছেন।
        </p>
      </div>

      <div className="mt-10 text-right">
        <p>বিনীত নিবেদক,</p>
        <p className="font-bold text-2xl font-cursive text-panam-brick mt-2">মহিউদ্দিন</p>
        <p className="text-sm text-gray-700 font-semibold">ট্যুর আয়োজক কমিটি</p>
      </div>
    </div>
  );
};