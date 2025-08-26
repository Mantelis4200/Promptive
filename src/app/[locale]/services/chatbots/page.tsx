import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ChatbotsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Chatbots for Business
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your customer service with intelligent AI chatbots that work 24/7
            </p>
            <button className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}