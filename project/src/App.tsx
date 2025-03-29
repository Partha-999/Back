import React, { useState } from 'react';
import { Heart, MessageCircle, Calendar, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('memories');

  const memories = [
    {
      date: 'March 21, 2025',
      image: '/src/assets/1.jpg',
      caption: 'Our cafe date ☕️'
    },
    {
      date: 'March 22, 2025',
      image: '/src/assets/2.jpg',
      caption: 'Your Pizza with extra cheese 🍕'
    },
    {
      date: 'March 23, 2025',
      image: '/src/assets/3.jpg',
      caption: 'Happy us after wakeup ❤️'
    },
    {
      date: 'March 23, 2025',
      image: '/src/assets/4.jpg',
      caption: 'Nuv ichina shirtt 👕'
    },
    {
      date: 'March 13, 2025',
      image: '/src/assets/5.jpg',
      caption: 'Our calls reduces the distance 🤳'
    }
  ];

  const messages = [
    {
      date: 'March 6, 2025',
      message: '"10 months andiiiiiiii, happyy 10 months andii, oche 2 months best months in d year ga chedddam andiiiii....Chuddam le, Baavundiiii, Same 2 u ❤️"'
    },
    { 
      date: 'March 3, 2025',
      message: '"Everyday I express, Pattinchukovu Vedava, Telusukolevaaaa Naa heart ni, Aa reels anni enduku save chestha cheppu🎄"'
    },
    {
      date: 'February 15, 2025',
      message: '"Promise U made me happy, Very happy tbh, cheppu oka line lo naa gurinchi, My Strength 💪🏻"'
    },
    {
      date: 'December 18, 2024',
      message: '"Happiest birthday Mr Pardhuuuuuuuuuu🥳🥳🥳🥳 20Yrs aypoyindi🎊🎊🎊🎊🎊 Nijanga chala chala happy ga undiiiiiii☺️☺️☺️☺️☺️☺️☺️ Nee life lo nenu undatam🤗🤗🤗🤗 Nuvvante naku chala respect undedhi ante manchodu,baa chaduthadu ani😅😅😅😅😅 Kaani aa respect kaastha frnd ship chesav 😁😁😁😁😁😁😁😁 Frnds ayna manam best friends aypoyam🤩🤩🤩🤩🤩🤩🤩🤩🤩 Aa best friends nundi promotion kaavali ani naaku telusu le kaani waiit chey amma😅😅😅😅😅😅😅 Nuv eppatiki happy ga undali😁😁😁😁😁😁😁😁😁😁 Navvuthu undali😊😊😊😊😊😊😊 Ninnu nenu navvistha gaaa😉😉😉 Manam eppudu ilane undamu raa🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗 Nenu neethone unta🤝🤝🤝🤝🤝 Kalise undamu amma😜😜😜😜😜 Evadra ninnu daati naa deggariki ostadu cheppu😅😅😅😅😅😅 Ninnu daati ravali ante vaadu petti puttali le🤭🤭🤭🤭🤭🤭🤭🤭🤭 Nenu ninnu baa chuskuntaaaa☺️☺️ Trust me NANNA🥺🥺🥺🥺🥺 Aanandam lo unta 🥳🥳🥳🥳🥳🥳 Baada lo baagam panchukunta🤌 Amma laa chuskuntaa😁😁😁😁 Birthday ante okka roje kada msg petti vadilestha anukoku😆 Assala vadalanu amma👊👊👊 Pakkane unte kottali ani undi😂😂 Final ga okate amma, I WILL NEVER LEAVE U UNTIL MY LAST BREATH ❤️ Ivala neeku okka chinni surprise kuda........ Choosey..... https://geethikachowdary-25.github.io/geethslittlesurprise-20/ Use airpods for better experience in full volume 10 rojula naa kastam nee ksm Final gaa nee kallalo aa spark ksm ee raaaaaa anthala kasta padi chesa Ante adi neeku chala easy ee...antha kastam em kaadu... Kaani naa intention is to make my BOY happiesttttt Nachutadi ani veyyi kallatho eduru chustunna Adi chusaka nenu ninnu premistunano ledo neeke teliyali mari Chusi ela undo text chey amma Will be waiting to listen to u.....call ksm baaga waitinggggggg"'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 text-rose-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Story</h1>
          <p className="text-gray-600 italic">"Every love story is beautiful, but ours is my favorite forever"</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setActiveSection('memories')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition ${
                activeSection === 'memories'
                  ? 'bg-rose-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Camera className="w-5 h-5" />
              Memories
            </button>
            <button
              onClick={() => setActiveSection('messages')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition ${
                activeSection === 'messages'
                  ? 'bg-rose-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <MessageCircle className="w-5 h-5" />
              Messages
            </button>
          </div>

          {activeSection === 'memories' && (
            <div className="space-y-8">
              {memories.map((memory, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 transition hover:shadow-md">
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Calendar className="w-4 h-4" />
                    {memory.date}
                  </div>
                  <div className="h-64 relative rounded-lg mb-4 overflow-hidden">
                    <img
                      src={memory.image}
                      alt={memory.caption}
                      className="absolute inset-0 w-full h-full object-contain bg-black/5"
                    />
                  </div>
                  <p className="text-gray-700 text-center font-medium">{memory.caption}</p>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'messages' && (
            <div className="space-y-6">
              {messages.map((msg, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    {msg.date}
                  </div>
                  <p className="text-gray-700 text-lg italic">{msg.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Every relationship has its ups and downs, but what matters is that we're in this together.
            I cherish every moment with you, even the challenging ones, because they make us stronger.
          </p>
          <div className="inline-flex items-center gap-2 text-rose-500">
            <Heart className="w-5 h-5 fill-current" />
            <span className="font-medium">Forever Yours</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;