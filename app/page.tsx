"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans antialiased">
      {/* Hero Section */}
      <section className="bg-gray-900 text-center py-20 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-4">Pixel Canvas</h1>
        <p className="text-xl md:text-2xl mb-8">Immersive 3D Experiences for Enterprise Brands</p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-300">
          Deliver custom branded Unreal Engine 5 experiences directly in the browser, captivating your audience with cutting-edge realism.
        </p>
        <a href="#contact" className="bg-blue-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-lg">
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">Why Choose Pixel Canvas?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 bg-gray-900 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
            <p className="text-5xl mb-4">🚀</p>
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Browser-Based</h3>
            <p className="text-gray-300">No downloads, instant access for all your users.</p>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
            <p className="text-5xl mb-4">🎨</p>
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Custom Branding</h3>
            <p className="text-gray-300">Seamlessly integrate your brand identity and assets.</p>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
            <p className="text-5xl mb-4">⚡️</p>
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Unreal Engine 5</h3>
            <p className="text-gray-300">Leverage cutting-edge realism and performance.</p>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
            <p className="text-5xl mb-4">📊</p>
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Analytics & ROI</h3>
            <p className="text-gray-300">Track engagement and measure the impact of your experience.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 bg-gray-800 rounded-lg shadow-xl">
            <div className="text-6xl font-extrabold text-green-500 mb-4">1</div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Define Vision</h3>
            <p className="text-gray-300">Collaborate with our experts to outline your goals and brand vision.</p>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-lg shadow-xl">
            <div className="text-6xl font-extrabold text-green-500 mb-4">2</div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Design & Build</h3>
            <p className="text-gray-300">Our team crafts your custom 3D immersive world with precision.</p>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-lg shadow-xl">
            <div className="text-6xl font-extrabold text-green-500 mb-4">3</div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Deploy & Engage</h3>
            <p className="text-gray-300">Launch your experience directly in-browser, captivating your audience.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-900 rounded-lg shadow-xl">
            <p className="italic mb-4 text-gray-300">"Pixel Canvas transformed our virtual events with stunning realism and flawless execution. Truly exceptional!"</p>
            <p className="font-semibold text-blue-600">- Alex R., CEO, Global Corp</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-xl">
            <p className="italic mb-4 text-gray-300">"Unreal Engine 5 delivered in a browser is an absolute game-changer. Our customers were absolutely amazed."</p>
            <p className="font-semibold text-blue-600">- Sarah L., Marketing Director, Innovate Ltd.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-xl">
            <p className="italic mb-4 text-gray-300">"Seamless integration, incredible support, and a final product that exceeded all expectations. Highly recommend!"</p>
            <p className="font-semibold text-blue-600">- Mike T., Brand Manager, Future Brands</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-blue-600 text-white text-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Let's create an unforgettable 3D immersive experience that sets your enterprise brand apart.
        </p>
        <a href="#" className="bg-green-500 hover:bg-white hover:text-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-lg">
          Contact Us Today
        </a>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-500 text-center py-8 px-4 border-t border-gray-700">
        <p>&copy; 2023 Pixel Canvas. All rights reserved.</p>
      </footer>
    </div>
  );
}